import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center pb-6 border-b border-black">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold">Stay Connected</h2>
            <p>Subscribe to our newsletter for exclusive offers and updates.</p>
          </div>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border border-gray-600 bg-gray-600 text-white focus:ring-2 focus:ring-gray-500 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-500"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 text-sm">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg mb-3">About Us</h3>
            <p className="leading-relaxed text-balck">
              Discover the best products at unbeatable prices. Shop with confidence and enjoy seamless online shopping.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline text-black">About Us</a></li>
              <li><a href="/contact" className="hover:underline text-black">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline text-black">FAQs</a></li>
              <li><a href="/terms" className="hover:underline text-black">Terms & Conditions</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-black">Email: support@soulera.com</p>
            <p className="text-black">Phone: +91 12345 67890</p>
            <p className="text-black">Address: 123 Soul Era Lane, New Delhi, India</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4 text-2xl text-black">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-black">
          <p>&copy; {new Date().getFullYear()} Soul Era. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/sandeepkasera99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:underline"
            >
              Sandeep Kasera
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
