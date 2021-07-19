const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post == null) return res.status(404).json('Post not found');

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  console.log('Check1');
  console.log(req.body);
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  console.log(req.params.id);
  //if (req.params.id === req.body.id) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json('upated successfully');
  } catch (err) {
    res.status(500).json(err);
  }
  //   } else {
  //     res.status(404).json("you can't change other's post");
  //   }
});

router.delete('/:id', async (req, res) => {
  //verify if the user is allowed to delete that post or not
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
