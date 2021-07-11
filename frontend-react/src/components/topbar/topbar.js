import './topbar.css';
import { Link } from 'react-router-dom';
const topbar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              About
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/logout'>
              {user && 'Logout'}
            </Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <>
            <img className='topImg' src='https://lh3.googleusercontent.com/ogw/ADea4I5DAEwYN-IxbhlD_JO1x6vL-OX410K2Evo4_SsMyg=s83-c-mo' alt=''></img>
            <i className='topSearchIcon fas fa-search'></i>
          </>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                Register
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default topbar;
