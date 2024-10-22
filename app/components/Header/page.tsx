import Link from 'next/link'
import React from 'react';


const Header = () => {
  return (
    <header className="bg-primary text-white p-4 border-b-4 border-accent">
      <div className="flex justify-between items-center">
      <h1 className=" text-4xl text-white font-bold ">
        Kehkashan
      </h1>
      <div>
        <ul className='flex space-x-6'>
          <li>
            <Link href="/" className='hover:text-secondary'>Home</Link>
          </li>
          <li>
          <Link href="/about" className='hover:text-secondary'>
          About Me
            </Link>
            </li>
          <li>
            <Link href= "/portfolio" className='hover:text-secondary' >
            Portfolio
            </Link>
          </li>
          <li>
          <Link href="/contact" className='hover:text-secondary'>
          Contact Me
          </Link>
          </li>
        </ul>
      </div>
    </div>
    </header>
  );
}
export default Header;
