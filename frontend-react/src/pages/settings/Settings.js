import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img src='' alt='' />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Ripunjai' />
          <label>Email</label>
          <input type='email' placeholder='ripunjai@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit' type='submit'>
            Update
          </button>
          <span style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>Profile has been updated...</span>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
