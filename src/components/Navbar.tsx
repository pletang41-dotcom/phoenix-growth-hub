import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#industry' },
    { name: 'Case Studies', href: '#testimonials' },
    { name: 'About', href: '#process' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-phoenix-slate' 
          : 'bg-transparent py-6 text-phoenix-slate'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="https://storage.googleapis.com/msgsndr/shMiO51nYSm8IXztUM7V/media/6913bd2d29bad131b5abaa87.png" 
            alt="Phoenix Digital Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-phoenix-slate' : 'text-phoenix-slate'}`}>
            PHOENIX <span className="text-phoenix-gold">DIGITAL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-phoenix-gold' : 'text-gray-700 hover:text-phoenix-gold'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-phoenix-gold hover:bg-phoenix-goldDark text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 shadow-lg shadow-phoenix-gold/20">
            Book a Strategy Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-phoenix-slate p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-phoenix-gold hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-phoenix-gold text-white px-5 py-3 rounded-lg font-bold">
                Book a Strategy Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;