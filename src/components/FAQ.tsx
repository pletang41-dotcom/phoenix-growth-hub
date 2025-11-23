import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How fast can we launch?",
    answer: "Our standard setup sprint is 7 days. Most clients see their first automated booking within 10 days of kickoff."
  },
  {
    question: "Do you work with my existing software?",
    answer: "Yes, we integrate with most major CRMs and booking platforms including MindBody, Zenoti, Salesforce, and Hubspot."
  },
  {
    question: "Is there a guarantee?",
    answer: "We offer a performance guarantee. If you don't see a lift in qualified bookings within 60 days, we work for free until you do."
  },
  {
    question: "What is the 'City Exclusivity' clause?",
    answer: "To protect our partners' competitive advantage, we only work with one specific niche business per city radius (e.g., one MedSpa in Austin)."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-phoenix-slate">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-phoenix-slate">{faq.question}</span>
                {activeIndex === index ? <ChevronUp className="text-phoenix-gold" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-gray-50"
                  >
                    <div className="p-5 text-sm text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
