import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients start seeing qualified leads within 2-3 weeks of system activation. By week 8, you'll have a fully optimized AI-powered booking system generating consistent leads.",
    },
    {
      question: "What makes Phoenix different from other marketing agencies?",
      answer:
        "We focus exclusively on service-based businesses and provide a complete Done-For-You AI system. Plus, our CityLock™ exclusivity means you're the only business in your area using our proven framework.",
    },
    {
      question: "Do I need technical knowledge to use the system?",
      answer:
        "Not at all. We handle 100% of the setup, integration, and ongoing optimization. You just need to focus on serving the clients we send your way.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "We specialize in service-based businesses like med spas, dental practices, fitness studios, salons, wellness centers, and similar appointment-based businesses.",
    },
    {
      question: "Is there a contract or commitment required?",
      answer:
        "We offer flexible engagement options. The initial 8-week DFY Growth System is our foundation program, with ongoing support available based on your growth goals.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Phoenix Digital Consultancy
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-subtle"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
