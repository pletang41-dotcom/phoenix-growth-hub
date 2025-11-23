import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustryCards from './components/IndustryCards';
import QuickLaunchForm from './components/QuickLaunchForm';
import ConversionVisualizer from './components/ConversionVisualizer';
import TrustTimeline from './components/TrustTimeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-phoenix-slate selection:bg-phoenix-gold selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <IndustryCards />
        <TrustTimeline />
        <QuickLaunchForm />
        <ConversionVisualizer />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
