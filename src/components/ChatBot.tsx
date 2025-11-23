import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-phoenix-slate p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm">Phoenix AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                <X size={18} />
              </button>
            </div>
            
            <div className="h-64 p-4 overflow-y-auto bg-gray-50 space-y-4">
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-700 text-sm p-3 rounded-r-xl rounded-bl-xl max-w-[85%] shadow-sm">
                  Hello! Need help building a booking system?
                </div>
              </div>
            </div>

            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-gray-100 border-transparent rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:bg-white focus:border-phoenix-gold border"
              />
              <button className="bg-phoenix-gold text-white p-2 rounded-lg hover:bg-phoenix-goldDark">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-phoenix-slate text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50 hover:bg-phoenix-gold"
      >
        <MessageSquare size={24} fill="currentColor" />
      </button>
    </>
  );
};

export default ChatBot;