import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/data';

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-20 text-gray-200 bg-gray-950">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden border border-gray-800 rounded-xl"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left transition-all bg-gradient-to-br from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900 group"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                >
                  <ChevronDown size={18} className="text-white" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 border-t border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-md">
                      <motion.p 
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-400"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;