import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Paintbrush, Clock, ShieldCheck, ThumbsUp, Users, MapPin, Star, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10 mix-blend-multiply" />
          <img 
            src="/hero.png" 
            alt="Professional painters working on a house" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl text-white space-y-6"
          >
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg mb-2">
              #1 Painting Service in India
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Professional House <br/><span className="text-accent">Painting Services</span> <br/>Across India
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
              Transform your space with Khan Painting. Fast, affordable, and flawless results from 40+ skilled experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-14 px-8 rounded-full shadow-xl">
                <a href="tel:+917668472825">Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold text-lg h-14 px-8 rounded-full backdrop-blur-sm">
                <a href="https://wa.me/917668472825" target="_blank" rel="noopener noreferrer">Get Free Quote on WhatsApp</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6 text-sm font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer avatar" />
                  </div>
                ))}
              </div>
              <div className="text-white/80">
                <div className="flex text-accent"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                Trusted by 500+ customers
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
          >
            {[
              { icon: Clock, title: "Fast Service" },
              { icon: ShieldCheck, title: "Quality Paints" },
              { icon: ThumbsUp, title: "Clean Work" },
              { icon: Users, title: "40+ Experts" },
              { icon: MapPin, title: "All India" },
              { icon: Paintbrush, title: "Affordable Rates" }
            ].map((benefit, i) => (
              <motion.div key={i} variants={item} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary mb-2">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground">{benefit.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Our Painting Services</h2>
            <p className="text-lg text-muted-foreground">From a single room to an entire commercial building, we handle projects of all sizes with the same level of care and precision.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Interior Painting", img: "/interior.png", desc: "Breathe new life into your living spaces with our premium interior painting solutions. Flawless walls, vibrant colors." },
              { title: "Exterior Painting", img: "/exterior.png", desc: "Protect and beautify your home's exterior with our weather-resistant, durable painting systems designed for Indian climates." },
              { title: "Texture & Designer Walls", img: "/texture.png", desc: "Create a stunning focal point with our custom texture and stencil wall designs. Luxury finishes for modern homes." },
              { title: "Waterproofing", img: "/waterproofing.png", desc: "End your leakage worries forever with our advanced terrace and bathroom waterproofing solutions. 100% effective." }
            ].map((service, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-xl group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"/>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 bg-white relative z-20">
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                  <Button variant="link" className="px-0 text-accent font-bold group-hover:pl-2 transition-all" asChild>
                    <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 rounded-full">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold">Why Choose <span className="text-accent">Khan Painting</span>?</h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                We are not just painters; we are craftsmen dedicated to making your home look its absolute best. With operations across India, we bring standard-setting quality to every project.
              </p>
              
              <ul className="space-y-4">
                {[
                  "No hidden costs or surprise charges",
                  "Premium brand paints (Asian Paints, Berger, etc.)",
                  "Post-painting clean up guaranteed",
                  "Free site visit and consultation",
                  "Dedicated project manager for large projects"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="text-accent h-6 w-6 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 rounded-full shadow-lg">
                  <a href="https://wa.me/917668472825">Chat with us on WhatsApp</a>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "40+", label: "Skilled Workers" },
                { number: "500+", label: "Projects Completed" },
                { number: "All", label: "India Service" },
                { number: "100%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/90 font-medium text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Loved by Homeowners</h2>
            <p className="text-lg text-muted-foreground">See what our customers have to say about our work.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Homeowner, Delhi",
                text: "Khan Painting transformed my 3BHK completely. Their team was extremely professional, covered all furniture before starting, and left the house spotless. Highly recommend the luxury finish!"
              },
              {
                name: "Priya Desai",
                role: "Interior Designer, Mumbai",
                text: "As an interior designer, I need painters who understand texture and finish perfectly. Shahwaz and his team never disappoint. Flawless execution."
              },
              {
                name: "Amit Patel",
                role: "Homeowner, Pune",
                text: "Very affordable without compromising on quality. The team finished my entire house painting in just 4 days. The exterior waterproofing is holding up perfectly."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="flex text-accent mb-4">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground italic mb-6">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="font-bold rounded-full">
              <Link href="/testimonials">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ & Newsletter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Do you provide a free estimate?",
                    a: "Yes, we provide a 100% free site visit and estimate with no hidden charges anywhere in India."
                  },
                  {
                    q: "What brand of paints do you use?",
                    a: "We use premium brands like Asian Paints, Berger, Nerolac, and Dulux based on your preference and budget."
                  },
                  {
                    q: "How long does it take to paint a standard 2BHK?",
                    a: "A standard 2BHK usually takes 3-4 days depending on the scope of work and repairs needed."
                  },
                  {
                    q: "Do you provide any warranty?",
                    a: "Yes, we provide up to a 3-year warranty on our painting services depending on the package selected."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border rounded-xl p-6 shadow-sm">
                    <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-10 md:p-12 rounded-3xl h-fit">
              <h2 className="text-3xl font-extrabold mb-4 text-white">Subscribe to Our Newsletter</h2>
              <p className="text-primary-foreground/80 mb-8">
                Get tips on home maintenance, new texture designs, and exclusive discounts directly in your inbox.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full h-14 px-6 rounded-full text-foreground"
                  required
                />
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 rounded-full">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent relative">
        <div className="container mx-auto px-4 md:px-6 text-center text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto">Ready to Give Your Home a Fresh New Look?</h2>
          <p className="text-xl max-w-2xl mx-auto font-medium text-white/90">
            Get a free, no-obligation quote today. Our team is ready to answer your questions and schedule a site visit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="font-bold text-lg h-16 px-10 rounded-full shadow-xl hover:scale-105 transition-transform">
              <a href="tel:+917668472825">
                <Phone className="mr-2 h-6 w-6" /> Call +91 7668472825
              </a>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-16 px-10 rounded-full shadow-xl hover:scale-105 transition-transform">
              <a href="https://wa.me/917668472825" target="_blank" rel="noopener noreferrer">
                WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
