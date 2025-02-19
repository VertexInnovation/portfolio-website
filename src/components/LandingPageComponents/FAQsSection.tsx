import { motion } from 'framer-motion';
import { FAQS } from '../data/data';

const FAQsSection = () => {
  return (
    <section className="w-full px-0 py-20 text-gray-200 max-h-fit bg-gray-950">
      <div className="max-w-3xl mx-auto mb-16 text-center max-h-fit">
      <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text">
      Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {FAQS.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 border border-gray-800 shadow-lg bg-gray-950/50 rounded-xl backdrop-blur-sm"
        >
          <h3 className="mb-3 text-xl font-semibold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text">
          {faq.question}
          </h3>
          <p className="text-gray-400">{faq.answer}</p>
        </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FAQsSection;