const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcryptjs');

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json('Bad request');
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update user by userId
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true, useFindAndModify: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can not update this user');
  }
});

router.delete('/:id', async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json('No user to delete');
      try {
        await Post.deleteMany({ username: req.body.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('user has been deleted');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(400).json('User by this id is not found', err);
    }
  } else {
    res.status(404).json('You can only delete your account');
  }
});
module.exports = router;
