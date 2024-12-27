"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using Font Awesome for hamburger menu icons
import { CgProfile } from "react-icons/cg";
import { FiSearch } from 'react-icons/fi'; // Import the search icon from react-icons
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({ men: false, women: false, kids: false, homeANDliving: false });
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
  };

  const handleCartPage = async () => {
    router.push(`/cart`);
  };

  const searchProducts = () => {
    console.log('Searched');
  };

  // Handle mouse hover for dropdown
  const handleMouseEnter = (category: string) => {
    setIsDropdownOpen((prev) => ({ ...prev, [category]: true }));
  };

  const handleMouseLeave = (category: string) => {
    setIsDropdownOpen((prev) => ({ ...prev, [category]: false }));
  };

  return (
    <header className="bg-purple-color text-white px-2 py-4 shadow-lg">
      <nav className='container mx-auto flex justify-between items-center'>
        <Link href="/"><h3 className='text-white text-2xl font-bold'>Soul era</h3></Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-purple-color md:bg-transparent z-10 md:z-auto transition-all duration-300 ease-in-out`}>
          
          {/* Men Dropdown */}
          <li 
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
            onMouseEnter={() => handleMouseEnter('men')}
            onMouseLeave={() => handleMouseLeave('men')}
          >
            <span className="cursor-pointer">Men</span>
            {isDropdownOpen.men && (
              <div className="absolute left-0 top-full w-48 bg-white text-black shadow-lg py-2">
                <ul
                onMouseEnter={() => handleMouseEnter('men')}
                onMouseLeave={() => handleMouseLeave('men')}
                >
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/men/clothing">Clothing</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/men/accessories">Accessories</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/men/shoes">Shoes</Link></li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
            )}
          </li>

          {/* Women Dropdown */}
          <li 
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
            onMouseEnter={() => handleMouseEnter('women')}
            onMouseLeave={() => handleMouseLeave('women')}
          >
            <span className="cursor-pointer">Women</span>
            {isDropdownOpen.women && (
              <div className="absolute left-0 top-full w-48 bg-white text-black shadow-lg py-2">
                <ul
                onMouseEnter={() => handleMouseEnter('women')}
                onMouseLeave={() => handleMouseLeave('women')}
                >
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/women/clothing">Clothing</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/women/accessories">Accessories</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/women/shoes">Shoes</Link></li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
            )}
          </li>

          {/* Kids Dropdown */}
          <li 
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
            onMouseEnter={() => handleMouseEnter('kids')}
            onMouseLeave={() => handleMouseLeave('kids')}
          >
            <span className="cursor-pointer">Kids</span>
            {isDropdownOpen.kids && (
              <div className="absolute left-0 top-full w-48 bg-white text-black shadow-lg py-2">
                <ul
                onMouseEnter={() => handleMouseEnter('kids')}
                onMouseLeave={() => handleMouseLeave('kids')}
                >
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/kids/clothing">Clothing</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/kids/toys">Toys</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/kids/shoes">Shoes</Link></li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
            )}
          </li>
          {/* Kids Dropdown */}
          <li 
            className="p-4 md:p-0 md:mx-2 hover:text-gray-300 relative"
            onMouseEnter={() => handleMouseEnter('homeANDliving')}
            onMouseLeave={() => handleMouseLeave('homeANDliving')}
          >
            <span className="cursor-pointer">Home&Living</span>
            {isDropdownOpen.homeANDliving && (
              <div className="absolute left-0 top-full w-48 bg-white text-black shadow-lg py-2">
                <ul
                onMouseEnter={() => handleMouseEnter('home&living')}
                onMouseLeave={() => handleMouseLeave('home&living')}
                >
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/kids/clothing">Kitchen</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/kids/toys">Dining</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><Link href="/kids/shoes">Room</Link></li>
                  {/* Add more categories as needed */}
                </ul>
              </div>
            )}
          </li>

          {/* Search */}
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <div className="relative w-full md:w-auto">
              <FiSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="search"
                placeholder="Search Products"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                onChange={searchProducts}
              />
            </div>
          </li>

          {/* Profile */}
          <li className="p-4 md:p-0 md:mx-2 hover:text-gray-300">
            <button onClick={handleProfilePage} className="text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <CgProfile className={clsx('h-4 transition-all ease-in-out hover:scale-110')} />
            </button>
          </li>

          {/* Cart */}
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
