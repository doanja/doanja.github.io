import React from 'react';

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  const { projectName, projectDescription, techStack, links } = project;

  return (
    <div className='bg-white shadow-md rounded-md flex flex-col h-full justify-between'>
      <div className='px-6 py-4'>
        <h1 className='font-bold text-xl mb-2'>{projectName}</h1>
        <p className='text-gray-900 text-sm'>{projectDescription}</p>
      </div>

      <div className='p-4 flex flex-wrap items-center text-sm border-t border-b gap-1 mt-auto'>
        {techStack.map((tech: string) => (
          <span className='inline-block bg-gray-300 rounded-md px-3 py-1 text-sm font-semibold text-gray-900'>{tech}</span>
        ))}
      </div>

      <div className='p-4 flex items-center text-sm bg-gray-100 rounded-b-md gap-1'>
        <p className='text-gray-900 text-sm'>Links: </p>
        {links.map((link: Link) => (
          <a
            href={link.url}
            className='bg-gray-800 transition duration-300 hover:bg-gray-600 transform text-gray-50 rounded-md px-3 py-1 text-sm font-semibold hover:shadow-lg'>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
