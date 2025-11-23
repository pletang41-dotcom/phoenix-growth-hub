import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-phoenix-gold/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 order-1 md:order-1"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-phoenix-goldDark text-xs md:text-sm font-semibold mb-6">
               AI-Powered Growth Systems
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-phoenix-slate leading-tight mb-6">
              We help service businesses fill their calendars with <span className="text-phoenix-gold">qualified leads</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-6">
              — using AI systems that run 24/7.
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Install your DFY AI-powered booking system in 60 days — with full setup, automations, and exclusivity per city.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-phoenix-gold hover:bg-phoenix-goldDark text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center shadow-lg shadow-phoenix-gold/20 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-gray-200 text-phoenix-slate px-8 py-4 rounded-xl font-medium text-lg flex items-center justify-center hover:border-phoenix-gold/50 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-phoenix-gold" />
                  <span>DFY Setup</span>
              </div>
              <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-phoenix-gold" />
                  <span>City Exclusivity</span>
              </div>
              <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-phoenix-gold" />
                  <span>60-Day Launch</span>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center md:justify-end order-2 md:order-2">
              
              <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] border border-dashed border-gray-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute right-0 md:right-20 top-1/2 -translate-y-1/2 w-[240px] md:w-[320px] h-[240px] md:h-[320px] border border-gray-100 rounded-full"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 z-10">
                  <AnimatePresence mode="wait">
                      <motion.div
                          key={currentImage}
                          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.8 }}
                          className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                      >
                          <img 
                              src={images[currentImage]} 
                              alt="Business Growth" 
                              className="w-full h-full object-cover"
                          />
                      </motion.div>
                  </AnimatePresence>
                  
                  <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 max-w-[200px]"
                  >
                      <div className="bg-green-100 text-green-600 p-3 rounded-full shrink-0">
                          <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                      </div>
                      <div>
                          <p className="text-xs md:text-sm text-gray-500">Monthly ROI</p>
                          <p className="text-lg md:text-xl font-bold text-phoenix-slate">+342%</p>
                      </div>
                  </motion.div>

                   <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -top-6 -right-2 md:-right-4 bg-phoenix-slate text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                  >
                      <div>
                          <p className="text-xs text-gray-400">Active Leads</p>
                          <p className="text-lg font-bold">1,240+</p>
                      </div>
                  </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
