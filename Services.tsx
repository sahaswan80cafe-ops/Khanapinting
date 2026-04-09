import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "interior",
      title: "Interior Painting",
      img: "/interior.png",
      desc: "Transform your living spaces with our premium interior painting solutions. We use high-quality, low-VOC paints that are safe for your family and provide a flawless, long-lasting finish.",
      benefits: ["Dust-free process", "Premium paint brands", "Color consultation", "Furniture protection"]
    },
    {
      id: "exterior",
      title: "Exterior Painting",
      img: "/exterior.png",
      desc: "Protect your home from harsh weather conditions while enhancing its curb appeal. Our exterior painting services use durable, weather-resistant paints designed specifically for the Indian climate.",
      benefits: ["Weatherproof paints", "Crack filling & repair", "Fungus & algae resistance", "Long-lasting finish"]
    },
    {
      id: "texture",
      title: "Texture & Designer Walls",
      img: "/texture.png",
      desc: "Create stunning focal points in any room with our custom texture and designer wall painting. From metallic finishes to 3D stencils, our skilled artisans bring your vision to life.",
      benefits: ["Custom designs", "Metallic & velvet finishes", "Stencils & patterns", "Expert application"]
    },
    {
      id: "waterproofing",
      title: "Waterproofing Solutions",
      img: "/waterproofing.png",
      desc: "Say goodbye to damp walls and leakage issues. We provide comprehensive waterproofing solutions for terraces, bathrooms, and exterior walls to protect your property's structural integrity.",
      benefits: ["Terrace waterproofing", "Bathroom sealing", "Exterior wall protection", "Warranty provided"]
    },
    {
      id: "commercial",
      title: "Commercial Painting",
      img: "/services-commercial.png",
      desc: "Professional painting services for offices, shops, and commercial buildings. We work around your schedule to minimize disruption to your business operations.",
      benefits: ["Flexible scheduling", "Large team for quick turnaround", "Durable commercial paints", "Safety compliance"]
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
            Our Professional <span className="text-accent">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto text-primary-foreground/80"
          >
            Comprehensive painting and waterproofing solutions tailored to your specific needs, delivered with uncompromising quality.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src={service.img} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-extrabold text-foreground">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 py-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="font-medium text-foreground/90">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-full shadow-lg">
                  <a href={`https://wa.me/917668472825?text=Hi, I am interested in your ${service.title} service. Could you provide a free quote?`} target="_blank" rel="noopener noreferrer">
                    Get Free Quote
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Package Comparison */}
      <div className="bg-muted py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Painting Packages</h2>
            <p className="text-lg text-muted-foreground">Choose the right package that fits your budget and requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Standard",
                desc: "Affordable and durable",
                price: "Budget Friendly",
                features: ["Basic surface preparation", "1 coat primer", "2 coats standard emulsion", "Post-painting cleanup", "6 months warranty"]
              },
              {
                name: "Premium",
                desc: "High quality, rich finish",
                price: "Most Popular",
                highlight: true,
                features: ["Thorough surface repair", "2 coats premium primer", "2 coats premium washable emulsion", "Deep cleaning", "1 year warranty", "Color consultation"]
              },
              {
                name: "Luxury",
                desc: "The ultimate finish",
                price: "Premium Choice",
                features: ["Flawless surface preparation", "Anti-fungal treatment", "2 coats luxury primer", "2-3 coats luxury metallic/matte finish", "Complete deep cleaning", "3 years warranty", "Dedicated manager"]
              }
            ].map((pkg, i) => (
              <Card key={i} className={`relative overflow-hidden ${pkg.highlight ? 'border-2 border-accent shadow-2xl scale-105 z-10' : 'border-border shadow-lg'}`}>
                {pkg.highlight && (
                  <div className="absolute top-0 inset-x-0 bg-accent text-white text-center py-1.5 text-sm font-bold uppercase tracking-wider">
                    Recommended
                  </div>
                )}
                <CardContent className={`p-8 ${pkg.highlight ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.desc}</p>
                  <div className="text-xl font-extrabold text-foreground mb-8">{pkg.price}</div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${pkg.highlight ? 'text-accent' : 'text-primary'}`} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full h-12 font-bold ${pkg.highlight ? 'bg-accent hover:bg-accent/90 text-white' : 'bg-primary hover:bg-primary/90 text-white'}`}>
                    <a href={`https://wa.me/917668472825?text=Hi, I am interested in your ${pkg.name} painting package.`} target="_blank" rel="noopener noreferrer">
                      Select Package
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
