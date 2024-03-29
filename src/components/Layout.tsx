import React from 'react';
import { Nav, Footer } from './';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen max-w-screen-xl mx-auto'>
      <Nav />
      <main className='flex-grow p-4'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
