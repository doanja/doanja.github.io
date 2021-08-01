import { useState } from 'react';
import { NavLink } from '.';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const closeMenu = () => !showMenu && setShowMenu(!showMenu);

  return (
    <nav className='flex flex-wrap items-center justify-between mt-0 bg-gray-50'>
      {/* logo */}
      <img src='https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png' alt='ACME' width='120' />

      {/* hamburger */}
      <div className='flex md:hidden'>
        <button onClick={() => setShowMenu(!showMenu)}>
          <img
            className={`${showMenu ? 'block' : 'hidden'}`}
            src='https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png'
            width='40'
            height='40'
          />
          <img className={`${showMenu && 'hidden'}`} src='https://img.icons8.com/fluent-systems-regular/2x/close-window.png' width='40' height='40' />
        </button>
      </div>

      {/* nav links */}
      <div
        className={` ${showMenu && 'hidden'} md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-gray-900 md:border-none`}
        onClick={closeMenu}>
        <NavLink linkTo='about' linkText='about' />
        <NavLink linkTo='projects' linkText='projects' />
        <NavLink linkTo='education' linkText='education' />
        <NavLink linkTo='skills' linkText='skills' />
      </div>
    </nav>
  );
};

export default Navbar;
