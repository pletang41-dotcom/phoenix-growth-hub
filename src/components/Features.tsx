import { Bot, Shield, Lock, BarChart3, Zap, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "GlowFlow",
      description: "AI-powered lead capture and nurture system that engages prospects 24/7 and books them automatically.",
    },
    {
      icon: Shield,
      title: "ShowUp Shield™",
      description: "Intelligent no-show prevention using SMS reminders, confirmations, and AI-driven engagement.",
    },
    {
      icon: Zap,
      title: "Revive Protocol",
      description: "Automated customer reactivation flows that bring back dormant clients with personalized campaigns.",
    },
    {
      icon: Users,
      title: "Reputation Loop",
      description: "Turn satisfied customers into advocates with automated review requests and referral systems.",
    },
    {
      icon: Lock,
      title: "CityLock™ Exclusivity",
      description: "Geographic exclusivity ensures you're the only business in your area using our proven system.",
    },
    {
      icon: BarChart3,
      title: "TrustTrak™ Dashboard",
      description: "Real-time ROI tracking and analytics to measure every lead, booking, and dollar generated.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Why Work With <span className="text-primary">Phoenix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete AI-powered growth system designed specifically for service-based businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-gold transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
