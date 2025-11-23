import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Sparkles, ChevronRight, Loader2 } from 'lucide-react';
import { IndustryType, GeneratedStrategy } from '../types';
import { generateStrategy } from '../services/geminiService';

const QuickLaunchForm: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType | null>(null);
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<GeneratedStrategy | null>(null);

  const handleGenerate = async () => {
    if (!selectedIndustry) return;
    setLoading(true);
    try {
      const result = await generateStrategy(selectedIndustry);
      setStrategy(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-phoenix-gold/10 rounded-full mb-4">
              <Sparkles className="text-phoenix-gold w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-phoenix-slate mb-3">Instant Strategy Generator</h2>
            <p className="text-gray-600">Select your business type to see how AI can scale your bookings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Input */}
            <div className="space-y-6">
              <label className="block text-sm font-bold text-gray-700">What business are you running?</label>
              <div className="space-y-3">
                {Object.values(IndustryType).map((type) => (
                  <div 
                    key={type}
                    onClick={() => {
                        setSelectedIndustry(type);
                        setStrategy(null); // Reset on change
                    }}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      selectedIndustry === type 
                      ? 'bg-phoenix-slate border-phoenix-slate text-white shadow-lg' 
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{type}</span>
                    {selectedIndustry === type && <div className="w-3 h-3 bg-phoenix-gold rounded-full" />}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={!selectedIndustry || loading}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                  !selectedIndustry || loading
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-phoenix-gold text-white hover:bg-phoenix-goldDark shadow-lg shadow-phoenix-gold/20'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Generating Plan...
                  </>
                ) : (
                  <>
                    Generate My Plan <Rocket className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Right: Output */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {strategy ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    key="result"
                  >
                    <div className="mb-6">
                      <h4 className="text-xs font-bold tracking-wider text-phoenix-goldDark mb-2">YOUR VALUE PROP</h4>
                      <p className="text-xl font-serif font-medium text-phoenix-slate italic">"{strategy.headline}"</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold tracking-wider text-gray-400 mb-2">RECOMMENDED BONUSES</h4>
                      <ul className="space-y-2">
                        {strategy.bonuses.map((bonus, i) => (
                          <li key={i} className="flex items-center text-gray-700 text-sm bg-white p-2 rounded border border-gray-100">
                            <ChevronRight className="w-4 h-4 text-phoenix-gold mr-2" />
                            {bonus}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
                      <span className="text-green-700 text-sm font-medium">Proj. Monthly Lift</span>
                      <span className="text-2xl font-bold text-green-700">{strategy.estimatedLift}</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="empty"
                    className="text-center text-gray-400"
                  >
                    <div className="mb-4 inline-block p-4 bg-white rounded-full border border-gray-100">
                      <Rocket className="w-8 h-8 opacity-30" />
                    </div>
                    <p>Select an industry and hit generate to see AI in action.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLaunchForm;