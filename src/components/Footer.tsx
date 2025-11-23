import React from 'react';
import { Twitter, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-phoenix-slate pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/shMiO51nYSm8IXztUM7V/media/6913bd2d29bad131b5abaa87.png" 
                alt="Phoenix Digital Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-white">PHOENIX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We build the systems that build your business. Stop relying on willpower and start relying on automation.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-phoenix-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-phoenix-gold">About Us</a></li>
              <li><a href="#" className="hover:text-phoenix-gold">Careers</a></li>
              <li><a href="#" className="hover:text-phoenix-gold">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-phoenix-gold">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center"><Mail size={16} className="mr-2"/> hello@phoenix.digital</li>
              <li>123 Innovation Dr, Suite 400<br/>Austin, TX 78701</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">Stay Updated</h4>
            <p className="text-xs text-gray-400 mb-4">Get the latest automation strategies delivered to your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-phoenix-gold w-full"
                />
                <button className="bg-phoenix-gold text-white p-2 rounded-lg hover:bg-phoenix-goldDark transition-colors">
                    <ArrowRight size={18} />
                </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>&copy; {new Date().getFullYear()} Phoenix Digital Consultancy.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
