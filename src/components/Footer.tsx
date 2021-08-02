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
      </div>

      {/* <div className='flex flex-row'>
        <AiFillGithub size='3rem' />
        <AiFillLinkedin size='3rem' />
      </div> */}

      {/* Copyright &copy; 2021 doanja */}
    </footer>
  );
};

export default Footer;
