import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "We added $40k in new revenue in the first 30 days. The AI follow-up system is relentless but polite.",
    author: "Dr. Sarah Jenkins",
    role: "Owner, Radiant Smiles",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    quote: "Finally, I can focus on training clients instead of chasing payments and confirming sessions. Life saver.",
    author: "Mike Ross",
    role: "Founder, IronClad Fitness",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    quote: "The booking rate went from 15% to 45% within a week of installing the Phoenix Protocol.",
    author: "Elena Fisher",
    role: "Director, Luxe MedSpa",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-phoenix-slate mb-4">Results Speak Louder</h2>
          <p className="text-gray-600">Trusted by growth-minded service businesses across the globe.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
          {testimonials.map((t) => (
            <motion.div 
              key={t.id}
              whileHover={{ y: -10 }}
              className="snap-center min-w-[300px] md:min-w-[400px] bg-gray-50 border border-gray-200 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4 text-phoenix-gold">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-700 italic mb-6">"{t.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <p className="text-phoenix-slate font-bold text-sm">{t.author}</p>
                  <p className="text-phoenix-goldDark text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-widest font-semibold">Powering Systems For</p>
            <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale">
                {['Align Technology', 'MindBody', 'Salesforce', 'HubSpot', 'Twilio'].map((logo) => (
                    <span key={logo} className="text-xl font-bold text-gray-400">{logo}</span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
