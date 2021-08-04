import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrap'>
        <div className='footer-link-wrap'>
          <h4 className='footer-link-title'>Phone</h4>
          <a href='123-123-1234' className='footer-link'>
            123-123-1234
          </a>
        </div>

        <div className='footer-link-wrap'>
          <h4 className='footer-link-title'>Email</h4>
          <a href='test@test.com' className='footer-link'>
            test@test.com
          </a>
        </div>

        <div className='footer-icon-wrap'>
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
