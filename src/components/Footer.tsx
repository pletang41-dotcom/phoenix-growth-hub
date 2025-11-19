import { Mail, Linkedin, Twitter } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "GlowFlow System", href: "#services" },
      { label: "ShowUp Shield", href: "#services" },
      { label: "Revive Protocol", href: "#services" },
      { label: "TrustTrak Dashboard", href: "#services" },
    ],
    resources: [
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Blog", href: "#" },
    ],
  };

  return (
    <footer className="bg-charcoal text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src={phoenixLogo} alt="Phoenix Digital Consultancy" className="h-16 w-auto mb-6" />
            <p className="text-background/80 mb-6 leading-relaxed">
              AI-powered marketing consultancy helping service businesses fill their calendars with
              qualified leads — 24/7.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@phoenixdigital.com"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-background/10 hover:bg-primary p-3 rounded-lg transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Phoenix Digital Consultancy. All rights reserved.</p>
            <p>
              Designed for service businesses that want to <span className="text-primary">grow smarter</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
