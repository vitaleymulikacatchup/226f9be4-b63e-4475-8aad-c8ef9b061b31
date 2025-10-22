import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Leaderboards', hasDropdown: true },
    { name: 'Decks', hasDropdown: true },
    { name: 'Meta', hasDropdown: true },
    { name: 'Matchups (WIP)', hasDropdown: false },
    { name: 'Streamer Decks', hasDropdown: false },
    { name: 'Esports', hasDropdown: false },
    { name: 'Utilities', hasDropdown: true },
    { name: 'Misc', hasDropdown: true }
  ];

  return (
    <header className="bg-hs-dark border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hs-blue rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">HS</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">HSGuru</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm hidden md:block">No ads & more</span>
            <a href="#" className="text-orange-500 font-bold text-sm hover:text-orange-400 transition-colors">
              PATREON
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button key={index} className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm py-2">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;