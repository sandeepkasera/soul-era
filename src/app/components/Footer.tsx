import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-color text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center pb-6 border-b border-purple-700">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold">Stay Connected</h2>
            <p>Subscribe to our newsletter for exclusive offers and updates.</p>
          </div>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border border-purple-600 bg-purple-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500"
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
            <p className="leading-relaxed text-purple-200">
              Discover the best products at unbeatable prices. Shop with confidence and enjoy seamless online shopping.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline text-purple-200">About Us</a></li>
              <li><a href="/contact" className="hover:underline text-purple-200">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline text-purple-200">FAQs</a></li>
              <li><a href="/terms" className="hover:underline text-purple-200">Terms & Conditions</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-purple-200">Email: support@soulera.com</p>
            <p className="text-purple-200">Phone: +91 12345 67890</p>
            <p className="text-purple-200">Address: 123 Soul Era Lane, New Delhi, India</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4 text-2xl text-purple-200">
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
        <div className="mt-6 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} Soul Era. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/sandeepkasera99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
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
