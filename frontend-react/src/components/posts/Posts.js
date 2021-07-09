import './posts.css';
import Post from '../post/Post';
const posts = () => {
  return (
    <div className='posts'>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default posts;
