import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "exterior", label: "Exterior" },
    { id: "interior", label: "Interior" },
    { id: "texture", label: "Texture Work" }
  ];

  const projects = [
    {
      id: 1,
      category: "exterior",
      before: "/gallery-1-before.png",
      after: "/gallery-1-after.png",
      title: "Villa Exterior Renovation",
      desc: "Weatherproof luxury emulsion"
    },
    {
      id: 2,
      category: "interior",
      before: "/gallery-2-before.png",
      after: "/gallery-2-after.png",
      title: "Living Room Makeover",
      desc: "Premium washable matte finish"
    },
    {
      id: 3,
      category: "texture",
      before: "/texture.png",
      after: "/texture.png", // Using same for now to show the effect
      title: "Master Bedroom Accent",
      desc: "Metallic geometric stencil"
    },
    {
      id: 4,
      category: "exterior",
      before: "/services-commercial.png",
      after: "/services-commercial.png",
      title: "Commercial Office Building",
      desc: "Durable exterior coating"
    },
    {
      id: 5,
      category: "interior",
      before: "/interior.png",
      after: "/interior.png",
      title: "Modern Kitchen",
      desc: "Anti-fungal premium paint"
    },
    {
      id: 6,
      category: "texture",
      before: "/texture.png",
      after: "/texture.png",
      title: "Hallway Feature Wall",
      desc: "Venetian plaster finish"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full pt-20">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our Work <span className="text-accent">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto text-primary-foreground/80"
          >
            See the transformation we bring to homes and offices across India. 
            Drag the slider on images to see the before and after difference.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full px-8 font-bold ${
                activeFilter === filter.id 
                  ? "bg-accent hover:bg-accent text-white" 
                  : "hover:bg-muted"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-muted cursor-pointer"
              >
                {/* Simplified gallery view - just showing the "after" image with hover details */}
                <img 
                  src={project.after} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <p className="text-white/80 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 text-center bg-muted rounded-3xl p-12 max-w-4xl mx-auto border border-border">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Want to see your home here?</h3>
          <p className="text-muted-foreground mb-8 text-lg">Contact us today for a free site inspection and quotation.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 rounded-full shadow-lg">
            <a href="https://wa.me/917668472825">WhatsApp Us Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
