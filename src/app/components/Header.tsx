"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using Font Awesome for hamburger menu icons
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const part = parts.pop();
      if (part) {
        return part.split(';').shift();
      }
    }
    return undefined;
  }
  const handleProfilePage = async () => {
    const user = getCookie('shit_user');
    if (user) {
      router.push(`/profile/${user}`);
    } else {
      router.push('/login');
    }
  }
  const handleCartPage = async () => {
      router.push(`/cart`);
  }

  // const searchProducts = ({ products, searchQuery }) => {
  //   const filteredProducts = products.filter((product) =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  const searchProducts = () => {
    console.log('Searched')
  }
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className='container mx-auto flex justify-between items-center px-4'>
        <Link href="/"><h3 className='text-white text-2xl font-bold'>Soul era</h3></Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-10 md:z-auto transition-all duration-300 ease-in-out`}>
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <form action="#" method="GET" className="flex items-center w-full">
              <input type="text" name="search" placeholder="Search Products" className="px-4 py-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800" />
              <button type="submit" onClick={searchProducts} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Search
              </button>
            </form>
          </li>
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <button onClick={handleProfilePage} className="text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <CgProfile className={clsx('h-4 transition-all ease-in-out hover:scale-110')} />
            </button>
          </li>
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <button onClick={handleCartPage} className="text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <ShoppingCartIcon
                className={clsx('h-4 transition-all ease-in-out hover:scale-110')}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
