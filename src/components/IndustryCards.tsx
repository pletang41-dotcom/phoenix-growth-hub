import React from 'react';
import { Stethoscope, Dumbbell, HeartPulse, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    id: 1,
    title: 'Med Spas',
    icon: <HeartPulse size={40} />,
    benefits: ['Auto-confirm appointments', 'Pre-treatment instructions', 'Post-care review sequences'],
    cta: 'See MedSpa Flow',
    color: 'text-pink-500 bg-pink-50'
  },
  {
    id: 2,
    title: 'Dentists',
    icon: <Stethoscope size={40} />,
    benefits: ['Hygiene recall automation', 'Emergency triage bot', 'Insurance verification logic'],
    cta: 'View Dental System',
    color: 'text-blue-500 bg-blue-50'
  },
  {
    id: 3,
    title: 'Fitness Studios',
    icon: <Dumbbell size={40} />,
    benefits: ['Class reminder SMS', 'Membership renewal flow', 'Referral generation engine'],
    cta: 'Explore Fitness AI',
    color: 'text-orange-500 bg-orange-50'
  }
];

const IndustryCards: React.FC = () => {
  return (
    <section id="industry" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-phoenix-slate mb-4">Built For Your Industry</h2>
          <p className="text-gray-600 text-lg">Specialized automation engines for high-volume service businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="group h-[400px] perspective-1000">
              <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all hover:border-phoenix-gold/30">
                  <div className={`w-20 h-20 rounded-full ${industry.color} flex items-center justify-center mb-6`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-phoenix-slate mb-2">{industry.title}</h3>
                  <div className="w-12 h-1 bg-phoenix-gold rounded-full mt-4"></div>
                  <p className="mt-6 text-gray-400 text-sm font-medium">Hover to reveal system capabilities</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-phoenix-slate border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
                  <h3 className="text-xl font-bold text-phoenix-gold mb-6">{industry.title} System</h3>
                  <ul className="space-y-3 mb-8 text-left w-full">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-phoenix-gold mr-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-lg bg-white text-phoenix-slate font-bold hover:bg-phoenix-gold hover:text-white transition-colors">
                    {industry.cta}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;