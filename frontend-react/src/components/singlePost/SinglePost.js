import './singlePost.css';
const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImg' src='https://image.shutterstock.com/z/stock-photo-software-development-technology-background-website-html-code-on-the-laptop-display-closeup-photo-1236426871.jpg' alt='' className='singlePostImg' />

        <h1 className='singlePostTitle'>
          Title here I am
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>

        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author:</span>
          <span className='singlePostDate'>1 hour Ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.v</p>
      </div>
    </div>
  );
};

export default SinglePost;
