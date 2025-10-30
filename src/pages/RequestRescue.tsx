import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, MapPin, Phone, User, Car, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const RequestRescue = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    vehicleModel: "",
    batteryLevel: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Rescue Request Submitted! ⚡",
        description: "Help is on the way. We'll contact you shortly.",
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/50 shadow-glow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-20 h-20 text-primary animate-scale-in" />
              </div>
              <CardTitle className="text-3xl text-glow">Rescue Request Confirmed!</CardTitle>
              <CardDescription className="text-lg">
                Help is on the way! A rescue driver has been notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/50 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">What happens next?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <span>A nearby rescue driver will accept your request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <span>You'll receive a call to confirm your location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <span>Track your rescue van in real-time (coming soon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <span>Get emergency charging within 15-30 minutes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Your Request Details:</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Location:</strong> {formData.location}</p>
                  <p><strong>Vehicle:</strong> {formData.vehicleModel}</p>
                  <p><strong>Battery Level:</strong> {formData.batteryLevel}%</p>
                </div>
              </div>

              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => setIsSubmitted(false)}
              >
                Make Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-border shadow-glow">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Battery className="w-8 h-8 text-primary" />
              Request Emergency Rescue
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll dispatch the nearest rescue van to your location
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="hover-glow"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="hover-glow"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Current Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="123 Main St, City, State, ZIP"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="hover-glow"
                />
                <p className="text-xs text-muted-foreground">
                  Provide your exact location or nearest landmark
                </p>
              </div>

              {/* Vehicle Model */}
              <div className="space-y-2">
                <Label htmlFor="vehicleModel" className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  Vehicle Model
                </Label>
                <Input
                  id="vehicleModel"
                  name="vehicleModel"
                  placeholder="Tesla Model 3, Nissan Leaf, etc."
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  required
                  className="hover-glow"
                />
              </div>

              {/* Battery Level */}
              <div className="space-y-2">
                <Label htmlFor="batteryLevel" className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-primary" />
                  Current Battery Level (%)
                </Label>
                <Input
                  id="batteryLevel"
                  name="batteryLevel"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="5"
                  value={formData.batteryLevel}
                  onChange={handleChange}
                  required
                  className="hover-glow"
                />
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Any special circumstances or additional details..."
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="hover-glow min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Battery className="w-5 h-5" />
                Request Rescue Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestRescue;
