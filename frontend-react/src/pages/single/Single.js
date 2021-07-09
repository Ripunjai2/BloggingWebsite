import './single.css';
import SinglePost from '../../components/singlePost/SinglePost';
import Sidebar from '../../components/sidebar/Sidebar';

const single = () => {
  return (
    <div>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default single;
