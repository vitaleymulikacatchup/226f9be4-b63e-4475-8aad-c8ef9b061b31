import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hs-dark border-t border-gray-700 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Donate Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded-full transition-colors">
            Donate
          </button>
          
          {/* Discord */}
          <a href="#" className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors">
            <span className="text-sm font-bold">Discord</span>
          </a>
          
          {/* Twitch */}
          <a href="#" className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
            <span className="text-sm font-bold">twitch</span>
          </a>
          
          {/* Patreon */}
          <a href="#" className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors">
            <span className="text-sm font-bold">PATREON</span>
          </a>
          
          {/* Follow Button */}
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors text-sm">
            Follow
          </button>
        </div>
        
        {/* Privacy Policy */}
        <div className="text-center mt-4">
          <a href="#" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;