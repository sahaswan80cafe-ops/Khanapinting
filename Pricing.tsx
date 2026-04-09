import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [rooms, setRooms] = useState<number>(1);
  const [roomSize, setRoomSize] = useState<string>("medium");
  const [paintType, setPaintType] = useState<string>("standard");
  const [addTexture, setAddTexture] = useState<boolean>(false);

  // Simple calculation logic
  const calculateCost = () => {
    let baseCostPerRoom = 0;
    
    // Room size multiplier
    if (roomSize === "small") baseCostPerRoom = 3000;
    else if (roomSize === "medium") baseCostPerRoom = 5000;
    else if (roomSize === "large") baseCostPerRoom = 8000;

    // Paint type multiplier
    if (paintType === "premium") baseCostPerRoom *= 1.5;
    else if (paintType === "luxury") baseCostPerRoom *= 2.2;

    // Texture addition
    if (addTexture) baseCostPerRoom += 2500;

    const total = baseCostPerRoom * rooms;
    const lowerBound = Math.floor(total * 0.9);
    const upperBound = Math.ceil(total * 1.1);

    return {
      lower: lowerBound.toLocaleString("en-IN"),
      upper: upperBound.toLocaleString("en-IN")
    };
  };

  const estimate = calculateCost();

  const handleWhatsAppClick = () => {
    const text = `Hi Khan Painting, I used your pricing calculator. I need a quote for:
- Rooms: ${rooms}
- Size: ${roomSize}
- Paint Quality: ${paintType}
- Texture required: ${addTexture ? "Yes" : "No"}
Please arrange a free site visit.`;
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
            Calculate Your <span className="text-accent">Painting Cost</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto text-primary-foreground/80"
          >
            Use our interactive calculator to get an instant estimate for your project. 
            For a precise quote, schedule a free site visit.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          
          {/* Calculator Form */}
          <div className="lg:col-span-3">
            <Card className="border-border shadow-xl">
              <CardContent className="p-6 md:p-10 space-y-10">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <div className="bg-accent/10 p-3 rounded-xl text-accent">
                    <Calculator className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Cost Estimator</h2>
                    <p className="text-muted-foreground text-sm">Enter details to generate an instant estimate</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-bold">Number of Rooms</Label>
                  <Input 
                    type="number" 
                    min={1} 
                    max={20} 
                    value={rooms} 
                    onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
                    className="h-14 text-lg"
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-bold">Room Size</Label>
                  <RadioGroup value={roomSize} onValueChange={setRoomSize} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: "small", label: "Small (up to 100 sqft)" },
                      { id: "medium", label: "Medium (100-150 sqft)" },
                      { id: "large", label: "Large (above 150 sqft)" }
                    ].map((size) => (
                      <div key={size.id}>
                        <RadioGroupItem value={size.id} id={`size-${size.id}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size.id}`}
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent/5 hover:text-accent peer-data-[state=checked]:border-accent peer-data-[state=checked]:text-accent cursor-pointer transition-all"
                        >
                          <span className="font-semibold text-center">{size.label}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-bold">Paint Quality</Label>
                  <RadioGroup value={paintType} onValueChange={setPaintType} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: "standard", label: "Standard", desc: "Durable emulsion" },
                      { id: "premium", label: "Premium", desc: "Washable matte" },
                      { id: "luxury", label: "Luxury", desc: "Rich metallic/sheen" }
                    ].map((type) => (
                      <div key={type.id}>
                        <RadioGroupItem value={type.id} id={`paint-${type.id}`} className="peer sr-only" />
                        <Label
                          htmlFor={`paint-${type.id}`}
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent/5 hover:text-accent peer-data-[state=checked]:border-accent peer-data-[state=checked]:text-accent cursor-pointer transition-all"
                        >
                          <span className="font-bold mb-1">{type.label}</span>
                          <span className="text-xs text-center font-normal opacity-80">{type.desc}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex items-center justify-between bg-muted/50 p-6 rounded-xl border border-border">
                  <div className="space-y-1">
                    <Label className="text-base font-bold">Add Texture Wall</Label>
                    <p className="text-sm text-muted-foreground">One designer wall per room</p>
                  </div>
                  <Switch checked={addTexture} onCheckedChange={setAddTexture} className="data-[state=checked]:bg-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <Card className="border-accent border-2 shadow-2xl overflow-hidden bg-primary text-white">
                <div className="p-8 text-center space-y-4">
                  <h3 className="text-xl font-semibold opacity-90">Estimated Cost</h3>
                  <div className="text-4xl md:text-5xl font-extrabold text-accent">
                    ₹{estimate.lower} <span className="text-2xl font-medium text-white/70">to</span> ₹{estimate.upper}
                  </div>
                  <p className="text-sm opacity-80 pt-4">
                    *This is a rough estimate. Actual cost may vary based on surface condition, ceiling height, and precise measurements.
                  </p>
                </div>
                <div className="bg-white/10 p-6">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 rounded-full shadow-lg"
                  >
                    Get Exact Quote on WhatsApp
                  </Button>
                </div>
              </Card>

              <div className="bg-muted p-6 rounded-xl border border-border flex gap-4">
                <AlertCircle className="text-primary h-6 w-6 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">Free Site Inspection</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We offer a 100% free site visit anywhere in India to take exact measurements and provide a final, binding quotation with no hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
