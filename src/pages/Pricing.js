import { motion } from 'framer-motion';
import { DollarSign, CheckCircle, TrendingDown, Shield, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { images } from '../assets/images';

const Pricing = () => {
  const pricingData = [
    {
      service: 'Pick & Pack',
      description: 'Base per order (scanning, picking, basic packaging) – required with our freight',
      rate: '$2.50 per order + $0.40 per additional item',
      notes: 'Lowest base rate around – beats typical $3–$8 competitors. Volume discounts for 500+ orders/month.',
      highlight: true,
    },
    {
      service: 'Storage',
      description: 'Per pallet or shelf space (ambient)',
      rate: '$8–$15 per pallet/month',
      notes: 'Flexible – pay only for what you use. Chilled add-on available.',
    },
    {
      service: 'Extra Items / Complexity',
      description: 'Additional items, kitting, special packaging',
      rate: '$0.30–$0.80 per item',
      notes: 'Transparent add-ons.',
    },
    {
      service: 'Returns Processing',
      description: 'Inspection, restocking',
      rate: '$2.50 per return',
      notes: 'Low rate to encourage hassle-free service.',
    },
    {
      service: 'Onboarding / Receiving',
      description: 'Initial stock intake',
      rate: '$150–$500 one-time (often waived)',
      notes: 'Free for ongoing clients with >200 orders/month.',
    },
    {
      service: 'CourierIt Freight / Shipping',
      description: 'Nationwide, Auckland metro, urgent, international (via our network)',
      rate: 'From $5–$15+ per parcel (discounted bulk rates)',
      notes: 'Leverages our bulk buying power – cheapest when bundled. Same-day Auckland add-ons from $5.',
    },
    {
      service: 'Monthly Tech/Admin Fee',
      description: 'Portal access, integrations, reporting',
      rate: '$49/month (waived for >300 orders)',
      notes: 'Free API setup with Shopify, WooCommerce, Xero, etc. – same as our courier platform.',
    },
  ];

  const benefits = [
    {
      icon: <DollarSign size={32} />,
      title: "Auckland's Cheapest Pick & Pack",
      description: '$2.50 base makes us the most affordable for bundled 3PL + freight.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <TrendingDown size={32} />,
      title: 'Bundled Savings',
      description: 'Freight required = automatic access to our discounted courier rates (no middleman markups).',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: <Shield size={32} />,
      title: 'Predictable & Transparent',
      description: 'One bill for storage, pick & pack, and shipping – no surprises.',
      gradient: 'from-orange-600 to-red-500',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Volume Discounts',
      description: '10–25% off for higher volumes.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 md:py-28 overflow-hidden animated-bg">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.business.technology})` }}
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
            {/* Image Above Tag */}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] p-4 rounded-2xl inline-block">
                <Tag className="text-white" size={40} />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
              Transparent & <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">Cheapest</span> 3PL Pricing in <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">Auckland</span> 
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent font-bold">CourierIt 3PL</span> (Freight Required)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-[#ff6600] p-8 rounded-2xl mb-6 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                At CourierIt 3PL, pricing is simple, upfront, and the lowest in Auckland for pick &
                pack. We only offer 3PL if we handle your freight/shipping via our CourierIt
                network – this lets us bundle savings and give you one low-cost, predictable bill.
              </p>
            </div>
            <p className="text-gray-600 text-base md:text-lg">
              No full standalone fulfilment – our model focuses on storage + pick & pack +
              discounted CourierIt freight. All prices in NZD excl. GST. Custom quotes for your
              volume/product needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                        Service/Component
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                        Our Rate (Cheapest in Auckland)
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                        Notes/Comparison
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {pricingData.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`hover:bg-gray-50 transition-colors ${
                          item.highlight ? 'bg-orange-50/30' : ''
                        }`}
                      >
                        <td className="px-4 py-4 font-semibold text-gray-900 text-sm">{item.service}</td>
                        <td className="px-4 py-4 text-gray-700 text-sm leading-relaxed">{item.description}</td>
                        <td className="px-4 py-4">
                          <span className="font-bold text-base text-[#ff6600]">
                            {item.rate}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-gray-600 text-sm leading-relaxed">{item.notes}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 md:py-24 bg-white">
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
              Key Benefits
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Key Benefits of Our <span className="bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent">Pricing</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="modern-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full blur-2xl`}></div>
                <div className={`relative bg-gradient-to-br ${benefit.gradient} p-4 rounded-2xl w-fit mb-6 transform group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 relative z-10">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-4 rounded-xl border border-green-200">
              <p className="text-gray-800 font-bold text-lg mb-2">No Lock-ins</p>
              <p className="text-gray-600">Month-to-month flexibility</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-8 shadow-lg">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="text-yellow-600">Disclaimer:</strong> Rates are indicative for standard e-commerce parcels
                (up to 5kg, average 2–3 items). Final pricing via free quote – depends on volume,
                product size/weight, and freight options. <strong className="text-[#ff6600]">Freight is mandatory for 3PL services.</strong>
              </p>
            </div>
          </motion.div>
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
              Ready to Save on Your Logistics?
            </motion.h2>
            <p className="text-xl md:text-2xl mb-10 text-orange-100 font-medium">
              Get your free custom quote today!
            </p>
            <motion.a
              href="mailto:support@courierit.co.nz"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#ff6600] px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center space-x-2 hover:bg-gray-50 transition-all shadow-2xl"
            >
              <Sparkles size={20} />
              <span>Get Your Free Quote</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
