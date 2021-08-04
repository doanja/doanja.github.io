interface NavLinkProps {
  linkTo: string;
  linkText: string;
}

const NavLink = ({ linkTo, linkText }: NavLinkProps) => {
  return (
    <a
      href={`#${linkTo}`}
      className='block uppercase font-medium text-gray-300 px-3 py-3 border-b-2 border-gray-300 transition-all duration-200 ease-in hover:text-white md:inline-block md:border-none'>
      {linkText}
    </a>
  );
};

export default NavLink;
