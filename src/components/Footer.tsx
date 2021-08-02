import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='footer-link-wrap'>
        <div className='footer-link-group'>
          <h4 className='footer-link-title'>Phone</h4>
          <a href='123-123-1234' className='footer-link'>
            123-123-1234
          </a>
        </div>

        <div className='footer-link-group'>
          <h4 className='footer-link-title'>Phone</h4>
          <a href='123-123-1234' className='footer-link'>
            123-123-1234
          </a>
        </div>

        <div className='footer-icon-group'>
          <div className='footer-icon'>
            <AiFillGithub size='2rem' />
          </div>
          <div className='footer-icon'>
            <AiFillLinkedin size='2rem' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
