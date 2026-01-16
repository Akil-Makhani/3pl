import { motion } from 'framer-motion';
import { FileText, Package, Truck, Zap, CheckCircle, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';

const Home = () => {
  const features = [
    {
      icon: <Package size={40} />,
      title: 'Cheapest Pick & Pack in Auckland',
      description: '$2.50 base per order – we undercut competitors while bundling with our discounted CourierIt freight network.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: <Truck size={40} />,
      title: 'Powered by CourierIt',
      description: 'Since 2013, we\'ve delivered cheap, streamlined shipping across NZ and worldwide. Now add warehousing and fulfilment – same low costs, same reliability.',
      gradient: 'from-orange-600 to-red-500',
    },
    {
      icon: <Zap size={40} />,
      title: 'Fast, Accurate, & Integrated',
      description: '99%+ accuracy, real-time tracking via our portal, and one monthly bill for everything.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Built for Kiwi Businesses',
      description: 'Ideal for e-commerce and SMEs – scalable storage + our proven freight for nationwide reach.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const services = [
    'Warehousing',
    'Pick & Pack (with Required Freight)',
    'Nationwide Courier & Freight',
    'Returns',
    'Integrations',
  ];

  const testimonials = [
    {
      text: 'CourierIt 3PL slashed our costs – pick & pack is super cheap, and shipping is seamless!',
      author: 'Auckland Business Owner',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Modern Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image from Public Folder */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/banner.png)' }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
          {/* Orange accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
         

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center space-x-6 mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 bg-white rounded-2xl shadow-lg"
              >
                <FileText className="text-[#ff6600] stroke-2" size={64} strokeWidth={1.5} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 bg-white rounded-2xl shadow-lg float"
              >
                <Truck className="text-[#ff6600] stroke-2" size={64} strokeWidth={1.5} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 bg-white rounded-2xl shadow-lg"
              >
                <Package className="text-[#ff6600] stroke-2" size={64} strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-2xl">
                Affordable Auckland 3PL with Built-in{' '}
                <span className="text-[#ff6600] drop-shadow-lg">
                  CourierIt Freight
                </span>{' '}
                – Cheaper Than the Rest!
              </h1>

              <p className="text-lg md:text-xl text-white mb-6 leading-relaxed max-w-4xl mx-auto drop-shadow-lg font-medium">
                Warehousing, pick & pack, and seamless nationwide shipping – all under one NZ-owned roof.
                Start saving today with the lowest pick & pack rates in Auckland at just{' '}
                <span className="font-bold text-[#ff6600] text-2xl drop-shadow-lg">$2.50 per order</span>!
              </p>

              <p className="text-base md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                As the dedicated 3PL extension of CourierIt (your go-to for cheap, reliable courier
                and freight since 2013), we only provide fulfilment if we handle your shipping too –
                leveraging our bulk rates for unbeatable savings on delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4 mb-10 text-left max-w-2xl mx-auto"
            >
              {[
                'Auckland-based warehouse for fast processing and same-day metro options.',
                'Free integrations with Shopify, WooCommerce, Xero, and more – just like our courier platform.',
                'No monthly fees, no lock-ins – pay only for storage, pick & pack, and your CourierIt freight.',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-3 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-xl border border-white/20"
                >
                  <CheckCircle className="text-[#ff6600] mt-0.5 flex-shrink-0" size={22} strokeWidth={2} />
                  <span className="text-gray-800 text-base font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 102, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center space-x-3 shadow-2xl glow mb-3"
            >
              <Sparkles size={20} className="text-white" />
              <span>Get Your Free Quote</span>
              <ArrowRight size={20} className="text-white" />
            </motion.a>
            <p className="text-sm text-white mt-3 font-medium drop-shadow-lg">
              ✨ Auckland's Cheapest 3PL with Freight Included!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section with Modern Cards */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white px-4 py-2 rounded-full text-sm font-bold mb-4"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">CourierIt 3PL</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the perfect blend of affordability, reliability, and seamless integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="modern-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl`}></div>
                <div className={`relative bg-gradient-to-br ${feature.gradient} p-4 rounded-2xl w-fit mb-6 transform group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section with Modern Design */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6600] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff8533] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-[#ff6600] to-[#ff8533] p-12 rounded-3xl shadow-2xl border border-orange-300/20">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="text-yellow-400 fill-yellow-400" size={32} />
                  </motion.div>
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-white mb-6 italic leading-relaxed font-medium">
                "{testimonials[0].text}"
              </p>
              <p className="text-white/90 font-semibold text-xl">– {testimonials[0].author}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Teaser with Modern Badges */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900">
              Our <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="modern-badge text-sm md:text-base cursor-pointer"
                >
                  {service}
                </motion.span>
              ))}
            </div>
            <Link 
              to="/pricing"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#ff6600] to-[#ff8533] rounded-xl shadow-2xl overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff8533] to-[#ff6600] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center space-x-2">
                <span>View Full Pricing</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA with Modern Design */}
      <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-[#ff6600] to-[#ff8533] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6"
            >
              Cut your logistics bills
            </motion.h2>
            <p className="text-xl md:text-2xl mb-10 text-orange-100 font-medium">
              Contact us or get a quick quote!
            </p>
            <motion.a
              href="mailto:info@courierit3pl.co.nz"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#ff6600] px-10 py-5 rounded-xl font-bold text-lg inline-block hover:bg-gray-50 transition-all shadow-2xl"
            >
              Get Your Free Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
