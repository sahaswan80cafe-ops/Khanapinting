import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      city: "Delhi",
      type: "Homeowner",
      text: "Khan Painting transformed my 3BHK completely. Their team was extremely professional, covered all furniture before starting, and left the house spotless. Highly recommend the luxury finish!"
    },
    {
      name: "Priya Desai",
      city: "Mumbai",
      type: "Interior Designer",
      text: "As an interior designer, I need painters who understand texture and finish perfectly. Shahwaz and his team never disappoint. They've handled 5 of my projects so far with flawless execution."
    },
    {
      name: "Amit Patel",
      city: "Pune",
      type: "Homeowner",
      text: "Very affordable without compromising on quality. The team of 5 workers finished my entire house painting in just 4 days. The exterior waterproofing they did is holding up perfectly in the monsoons."
    },
    {
      name: "Vikram Singh",
      city: "Lucknow",
      type: "Builder",
      text: "Managing a commercial project requires speed and scale. Khan Painting brought in a team of 20 painters and completed our office building exterior beautifully. Dependable and professional."
    },
    {
      name: "Neha Gupta",
      city: "Jaipur",
      type: "Homeowner",
      text: "I was worried about the dust and mess, but their dust-free process is amazing. The texture wall in my living room looks like a piece of art. Thank you Khan Painting!"
    },
    {
      name: "Sanjay Kumar",
      city: "Agra",
      type: "Shop Owner",
      text: "Got my retail showroom painted overnight so business wasn't affected. They understand customer needs perfectly. Great pricing and genuine Asian Paints used."
    },
    {
      name: "Ramesh Yadav",
      city: "Kanpur",
      type: "Homeowner",
      text: "Called them for a small 2-room job and they showed the same professionalism as a big project. Honest quotation and very polite workers."
    },
    {
      name: "Anjali Verma",
      city: "Noida",
      type: "Homeowner",
      text: "The wood polishing and interior painting gave a completely fresh look to our old house. Very skilled craftsmen. Will definitely hire them again."
    }
  ];

  return (
    <div className="w-full pt-20">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Customer <span className="text-accent">Testimonials</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto text-primary-foreground/80"
          >
            Don't just take our word for it. Read what our satisfied customers across India have to say about our painting services.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border shadow-lg hover:shadow-xl transition-shadow bg-card relative overflow-hidden">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-muted/30 -z-10" />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="flex text-accent mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed flex-grow italic mb-8">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.type} • {review.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to join our happy customers?</h2>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 rounded-full shadow-lg">
            <a href="tel:+917668472825">Call Us Now: +91 7668472825</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
