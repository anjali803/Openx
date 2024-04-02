import Link from 'next/link';
import { FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons library
import Navbar from '../components/Navbar';

const CyberSecurityPage = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center bg-gradient-to-r from-green-500 to-black min-h-screen">

<div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl text-white font-bold mb-4">Cyber Security Solutions for Organizations with Critical Infrastructure</h1>
  <p className="text-lg text-white mb-8">The scanner Scope is too small. Don't use it for professional audits.</p>

  <form className="mb-8">
    <button className="bg-gray-600 text-white px-6 py-3 rounded-md mr-3 mb-3">BETA</button>

    {/* Search bar */}
    <div className="flex items-center mb-4">
      <input type="text" placeholder="Enter URL" className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-solid-gray-2px" />
      <button className="bg-transparent border border-gray-400 px-2 py-2 rounded-r-md text-gray-800  hover:bg-green-400">Scan</button>
    </div>

    {/* Icons */}
    <div className="flex justify-left">
      <FaPhone className="text-white text-xl mr-4 backdrop:line-through" />
      <FaLinkedin className="text-white text-xl mr-4" />
      <FaWhatsapp className="text-white text-xl" />
    </div>
  </form>

  {/* Other content goes here */}
</div>
</div>
    </>
    
  );
};

export default CyberSecurityPage;

