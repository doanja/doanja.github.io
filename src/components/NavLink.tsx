import React from 'react';

interface NavLinkProps {
  linkTo: string;
  linkText: string;
}

const NavLink: React.FC<NavLinkProps> = ({ linkTo, linkText }) => {
  return (
    <a
      href={`#${linkTo}`}
      className='block uppercase font-medium text-gray-300 px-3 py-3 transition-all duration-300 ease-in hover:text-white md:inline-block md:border-none'>
      {linkText}
    </a>
  );
};

export default NavLink;
