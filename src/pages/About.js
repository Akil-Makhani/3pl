import { motion } from 'framer-motion';
import { Target, TrendingDown, Users, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';

const About = () => {
  const differentiators = [
    {
      icon: <TrendingDown size={32} />,
      title: 'Leveraging CourierIt Strengths',
      description: 'Discounted freight rates passed directly to you, with proven integrations and tracking.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: <Shield size={32} />,
      title: 'Auckland Advantage',
      description: 'Local warehouse for quick processing and metro speed.',
      gradient: 'from-orange-600 to-red-500',
    },
    {
      icon: <Target size={32} />,
      title: 'Cheapest Pick & Pack',
      description: '$2.50 base rate in Auckland – transparent and unbeatable when bundled with our shipping.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Users size={32} />,
      title: 'Customer-First',
      description: 'No hidden fees, month-to-month flexibility, and personalized support for small-to-medium businesses.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header with Modern Design */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 md:py-28 overflow-hidden animated-bg">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.location.auckland})` }}
        ></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              About Us
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">CourierIt 3PL</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Affordable Fulfilment + Freight in Auckland
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.img
                src={images.warehouse.operations}
                alt="Warehouse Operations"
                className="w-full h-64 md:h-full object-cover rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <motion.img
                src={images.delivery.shipping}
                alt="Shipping Logistics"
                className="w-full h-64 md:h-full object-cover rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  CourierIt 3PL is the natural next step for CourierIt, New Zealand's trusted NZ-owned
                  courier and freight service since 2013. We've spent years streamlining dispatch,
                  saving businesses time and money with cheap rates, free integrations, and reliable
                  nationwide delivery.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Now, we're launching our 3PL division in Auckland – offering warehousing and order
                  fulfilment, but only when paired with our CourierIt freight. This ensures you get
                  the full savings from our bulk buying power on shipping, plus seamless end-to-end
                  service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6600] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff8533] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-8"
              >
                <div className="bg-gradient-to-br from-[#ff6600] to-[#ff8533] p-6 rounded-3xl shadow-2xl">
                  <Target className="text-white" size={80} />
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Mission</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
                To stop parcel problems, shipping snags, and delivery drama – extending our promise
                to your entire supply chain. We make logistics affordable and hassle-free so you
                can focus on growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
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
              Why We're Different
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Why We're <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">Different</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="modern-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl`}></div>
                <div className={`relative bg-gradient-to-br ${item.gradient} p-4 rounded-2xl w-fit mb-6 transform group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-12 rounded-3xl border border-orange-100 shadow-lg">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
                  Our <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">Commitment</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  We partner with top carriers and use our cloud-based system for everything – from
                  receiving goods to final delivery. Everything integrates directly with your platforms
                  for maximum efficiency.
                </p>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-bold">
                  Join Kiwi businesses already saving with CourierIt – now go further with our 3PL!
                </p>
                <Link
                  to="/pricing"
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#ff6600] to-[#ff8533] rounded-xl shadow-2xl overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff8533] to-[#ff6600] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center space-x-2">
                    <span>View Pricing</span>
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#ff6600] to-[#ff8533] text-white relative overflow-hidden">
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
              Let's talk savings
            </motion.h2>
            <p className="text-xl md:text-2xl mb-10 text-orange-100 font-medium">
              Get in Touch Today!
            </p>
            <motion.a
              href="mailto:support@courierit.co.nz"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#ff6600] px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center space-x-2 hover:bg-gray-50 transition-all shadow-2xl"
            >
              <Sparkles size={20} />
              <span>Contact Us</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
