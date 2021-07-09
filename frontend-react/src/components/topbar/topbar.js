import './topbar.css';
const topbar = () => {
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
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src='https://lh3.googleusercontent.com/ogw/ADea4I5DAEwYN-IxbhlD_JO1x6vL-OX410K2Evo4_SsMyg=s83-c-mo' alt=''></img>
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default topbar;
