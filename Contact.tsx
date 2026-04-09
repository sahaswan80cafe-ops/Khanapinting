import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Inquiry from Website:
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message}`;

    window.open(`https://wa.me/917668472825?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="w-full pt-20">
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Get In <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto text-primary-foreground/80"
          >
            We're here to help with your painting project. Contact us for a free quote, site visit, or any queries.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-foreground">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-full text-accent flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone / WhatsApp</h4>
                    <a href="tel:+917668472825" className="text-muted-foreground hover:text-accent transition-colors block">+91 7668472825</a>
                    <a href="https://wa.me/917668472825" className="text-sm font-semibold text-accent mt-1 block">Chat on WhatsApp</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@khanpainting.in" className="text-muted-foreground hover:text-primary transition-colors">info@khanpainting.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Head Office</h4>
                    <p className="text-muted-foreground">Budaun, Uttar Pradesh, India</p>
                    <p className="text-sm text-primary font-medium mt-1">Serving All Over India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-80 border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112398.20456108146!2d79.05607519124403!3d28.026777894291834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a1bb2fa61df1f%3A0x8dd38ed8ce8ef5e1!2sBudaun%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709841234567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Khan Painting Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border shadow-xl">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-3xl font-extrabold mb-2 text-foreground">Send an Inquiry</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you via WhatsApp.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="h-12"
                      placeholder="John Doe" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (WhatsApp)</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="h-12"
                      placeholder="+91 9876543210" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select required onValueChange={handleSelectChange}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Interior Painting">Interior Painting</SelectItem>
                        <SelectItem value="Exterior Painting">Exterior Painting</SelectItem>
                        <SelectItem value="Texture Design">Texture & Designer Walls</SelectItem>
                        <SelectItem value="Waterproofing">Waterproofing</SelectItem>
                        <SelectItem value="Commercial">Commercial Painting</SelectItem>
                        <SelectItem value="Other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date for Site Visit</Label>
                    <Input 
                      type="date" 
                      id="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange} 
                      className="h-12" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Tell us about your property, number of rooms, current condition, etc."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" /> Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
