import React from 'react';
import { useState } from 'react';
import { NavLink } from '.';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);
  const closeMenu = () => !showMenu && setShowMenu(!showMenu);

  return (
    <nav className='flex flex-wrap items-center justify-between mt-0'>
      {/* logo */}
      <img src='https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png' alt='ACME' width='120' />

      {/* hamburger */}
      <div className='flex md:hidden'>
        <button onClick={() => setShowMenu(!showMenu)} className='mr-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`${showMenu ? 'block' : 'hidden'} h-8 w-8 text-white`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`${showMenu && 'hidden'} h-8 w-8 text-white`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>

      {/* nav links */}
      <ul
        className={` ${
          showMenu && 'transform h-0 md:h-full md:items-center md:transform-none'
        } w-full text-right mt-5 font-bold origin-top duration-300 scale-y-0 md:flex md:w-auto md:mt-0 md:border-none `}
        onClick={closeMenu}>
        <NavLink linkTo='projects' linkText='projects' />
        <NavLink linkTo='skills' linkText='skills' />
        <NavLink linkTo='about' linkText='about' />
        {/* <NavLink linkTo='education' linkText='education' /> */}
      </ul>
    </nav>
  );
};

export default Navbar;
