import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Layout, ShieldCheck, BarChart3 } from 'lucide-react';

const phases = [
  {
    id: 1,
    weeks: "Week 1",
    title: "Kickoff + Setup Sprint",
    description: "We align on strategy, audit your current process, and activate lead channels.",
    features: ["Strategy Audit", "Tech Stack Setup", "Lead Activation"],
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    id: 2,
    weeks: "Weeks 2–3",
    title: "Booking Engine Build",
    description: "Installing the core automation infrastructure to capture and convert.",
    features: ["GlowFlow Nurture", "ShowUp Shield™", "Revive Protocol", "Reputation Loop"],
    icon: <Layout className="w-6 h-6" />,
  },
  {
    id: 3,
    weeks: "Weeks 4–6",
    title: "Optimization & Activation",
    description: "Live traffic monitoring. We refine targeting, messaging, and automation flows.",
    features: ["A/B Testing", "Message Refinement", "Audience Calibration"],
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    id: 4,
    weeks: "Weeks 7–8",
    title: "Review + Rejuvenate",
    description: "Full ROI analysis using TrustTrak™ and strategic planning for scaling.",
    features: ["TrustTrak™ ROI Report", "System Optimization", "Growth Planning"],
    icon: <ShieldCheck className="w-6 h-6" />,
  }
];

const TrustTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-phoenix-gold font-bold tracking-wider text-sm uppercase mb-2 block">The Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-bold text-phoenix-slate mb-4">8-Week DFY Growth System</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A proven protocol to install a scalable revenue system for your business.</p>
        </div>

        <div className="relative">
           {/* Vertical Line for Mobile / Desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}
                >
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                     <div className={`text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="inline-block px-3 py-1 bg-phoenix-gold/10 text-phoenix-goldDark text-xs font-bold rounded-full mb-2">
                            {phase.weeks}
                        </span>
                        <h3 className="text-2xl font-bold text-phoenix-slate mb-3">{phase.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                            {phase.features.map((feat, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-md border border-gray-200">
                                    {feat}
                                </span>
                            ))}
                        </div>
                     </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-phoenix-gold shadow-lg z-10">
                    {phase.icon}
                  </div>

                  {/* Empty Side for spacing */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustTimeline;