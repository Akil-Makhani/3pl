import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/pricing', label: 'Pricing' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-extrabold bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent"
            >
              CourierIt 3PL
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Only Home is clickable, others are disabled
              if (item.path === '/') {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative font-semibold transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-[#ff6600]'
                        : 'text-gray-700 hover:text-[#ff6600]'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff6600] to-[#ff8533] rounded-full"
                      />
                    )}
                  </Link>
                );
              }
              // Disabled links for About and Pricing
              return (
                <span
                  key={item.path}
                  className="relative font-semibold text-gray-400 cursor-not-allowed"
                  title="Coming soon"
                >
                  {item.label}
                </span>
              );
            })}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              Get Quote
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  // Only Home is clickable, others are disabled
                  if (item.path === '/') {
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'text-[#ff6600]'
                            : 'text-gray-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  // Disabled links for About and Pricing
                  return (
                    <span
                      key={item.path}
                      className="font-medium text-gray-400 cursor-not-allowed"
                      title="Coming soon"
                    >
                      {item.label}
                    </span>
                  );
                })}
                <a href="#contact" className="btn-primary w-fit">
                  Get Quote
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

