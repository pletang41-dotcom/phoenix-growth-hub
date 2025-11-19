import { CheckCircle2, Clock, Rocket, TrendingUp } from "lucide-react";

const FunnelMap = () => {
  const phases = [
    {
      phase: "PHASE 1",
      title: "KICKOFF + SETUP SPRINT",
      duration: "Week 1",
      icon: Rocket,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        "Onboarding & strategy call",
        "Complete business audit",
        "Lead activation setup",
      ],
    },
    {
      phase: "PHASE 2",
      title: "BOOKING ENGINE BUILD",
      duration: "Weeks 2–3",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        "GlowFlow – Lead capture & nurture automation",
        "ShowUp Shield™ – No-show prevention system",
        "Revive Protocol – Customer reactivation flows",
        "Reputation Loop – Automated review & referral system",
      ],
    },
    {
      phase: "PHASE 3",
      title: "OPTIMIZATION & ACTIVATION",
      duration: "Weeks 4–6",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        "Monitor campaign performance",
        "Refine targeting & messaging",
        "Optimize automation workflows",
        "A/B test key conversion points",
      ],
    },
    {
      phase: "PHASE 4",
      title: "REVIEW + REJUVENATE",
      duration: "Weeks 7–8",
      icon: CheckCircle2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        "ROI review via TrustTrak™ dashboard",
        "System optimization & fine-tuning",
        "Growth planning for next quarter",
        "Ongoing support activation",
      ],
    },
  ];

  return (
    <section id="system" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            8-Week <span className="text-primary">DFY Growth System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From setup to optimization—everything you need to start generating qualified leads in 60
            days
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector Line (desktop only) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-border z-0" />
                )}

                <div className="relative bg-card border border-border rounded-xl p-6 shadow-subtle hover:shadow-gold transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`${phase.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`h-7 w-7 ${phase.color}`} />
                  </div>

                  {/* Phase Label */}
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                    <span className="text-xs text-muted-foreground ml-2">({phase.duration})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-4 min-h-[3rem]">{phase.title}</h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to transform your business with AI-powered growth?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:text-primary/80 font-semibold text-lg underline decoration-2 underline-offset-4 transition-smooth"
          >
            Start Your 8-Week Journey →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FunnelMap;
