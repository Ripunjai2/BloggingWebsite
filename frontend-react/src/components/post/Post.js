import './post.css';
const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>

        <span className='postTitle'>As of now title hai ye</span>
        <hr />

        <span className='postDate'>I hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.</p>
    </div>
  );
};

export default Post;
