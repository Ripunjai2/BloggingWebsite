import './write.css';
const Write = () => {
  return (
    <div className='write'>
      <img className='writeImg' src='https://image.shutterstock.com/z/stock-photo-software-development-technology-background-website-html-code-on-the-laptop-display-closeup-photo-1236426871.jpg' g alt='' />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
