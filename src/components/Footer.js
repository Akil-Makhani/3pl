import { Link } from 'react-router-dom';
import { Truck, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">
              CourierIt 3PL
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Affordable Auckland 3PL with Built-in CourierIt Freight – Cheaper Than the Rest!
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Truck size={20} className="text-[#ff6600]" />
              </motion.div>
              <span className="font-medium">NZ-Owned Since 2013</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home', enabled: true },
                { path: '/about', label: 'About Us', enabled: true },
                { path: '/pricing', label: 'Pricing', enabled: true },
              ].map((link) => (
                <li key={link.path}>
                  {link.enabled ? (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#ff6600] transition-colors flex items-center space-x-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#ff6600] transition-all duration-300"></span>
                      <span>{link.label}</span>
                    </Link>
                  ) : (
                    <span className="text-gray-500 cursor-not-allowed flex items-center space-x-2" title="Coming soon">
                      <span className="w-0 h-0.5"></span>
                      <span>{link.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <motion.a
                href="mailto:support@courierit.co.nz"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <div className="p-2 bg-[#ff6600]/20 rounded-lg group-hover:bg-[#ff6600] transition-colors">
                  <Mail size={18} className="text-[#ff6600] group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-[#ff6600] transition-colors">support@courierit.co.nz</span>
              </motion.a>
              <motion.a
                href="tel:092220128"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <div className="p-2 bg-[#ff6600]/20 rounded-lg group-hover:bg-[#ff6600] transition-colors">
                  <Phone size={18} className="text-[#ff6600] group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-[#ff6600] transition-colors">09 222 0128</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CourierIt 3PL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

