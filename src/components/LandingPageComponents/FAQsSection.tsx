import { motion } from 'framer-motion';
import { FAQS } from '../data/data';

const FAQsSection = () => {
  return (
    <section className="container px-4 py-20 mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white shadow-lg rounded-xl"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;