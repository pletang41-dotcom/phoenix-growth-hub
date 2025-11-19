import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Med Spa Owner, Los Angeles",
      content:
        "Phoenix transformed our booking process completely. We went from 15 appointments per week to 45+ in just 8 weeks. The AI system handles everything while we focus on providing great service.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Fitness Studio Owner, Miami",
      content:
        "The ShowUp Shield alone paid for itself in the first month. Our no-show rate dropped from 30% to under 5%. This system is a game-changer for service businesses.",
      rating: 5,
    },
    {
      name: "Dr. Emily Chen",
      role: "Dental Practice, Seattle",
      content:
        "I was skeptical about AI marketing, but Phoenix made it so easy. The Reputation Loop has tripled our 5-star reviews and referrals. Best investment we've made for practice growth.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Trusted by <span className="text-primary">Service Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours are growing with Phoenix
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-subtle">
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed text-foreground">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
