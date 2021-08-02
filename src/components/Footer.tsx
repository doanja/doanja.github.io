import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='flex w-full pt-8 pb-12 py-10 bg-gray-100'>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <p>Phone</p>
          <p>123-123-1234</p>
        </div>

        <div className='flex flex-col'>
          <p>Phone</p>
          <p>123-123-1234</p>
        </div>
      </div>

      <div className='flex flex-row'>
        <AiFillGithub size='3rem' />
        <AiFillLinkedin size='3rem' />
      </div>

      {/* Copyright &copy; 2021 doanja */}
    </footer>
  );
};

export default Footer;
