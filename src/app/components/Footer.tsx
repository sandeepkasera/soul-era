import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full text-center">
      <div className="container mx-auto">
        <p>{new Date().getFullYear()} Get Shit Go. All rights reserved.</p>
        <p className="isolate">Developed By Sandeep Kasera. <a href="https://www.linkedin.com/in/sandeepkasera99/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Connect here!</a></p> 
      </div>
    </footer>
  );
};

export default Footer;
