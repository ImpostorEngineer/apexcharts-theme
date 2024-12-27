'use client';

import Link from 'next/link';
import { useChangeTheme } from './useChangeTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useChangeTheme();

  const navItems = {
    '/': {
      name: 'Home',
    },
    '/chart': {
      name: 'Chart',
    },
    '/about': {
      name: 'About',
    },
  };

  return (
    <nav className='flex justify-start items-center py-4 mx-auto pb-4'>
      <div className='flex'>
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className='rounded-md text-xl font-bold hover:text-gray-800 hover:bg-gray-300 p-2'
          >
            {name}
          </Link>
        ))}
      </div>
      <div className='ml-auto'>
        <Link href='#' onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </Link>
      </div>
    </nav>
  );
}
