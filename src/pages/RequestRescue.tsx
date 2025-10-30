import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, MapPin, Phone, User, Car, CheckCircle2, Clock, Loader2, Truck, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import MapView from "@/components/MapView";
import ChargingProgress from "@/components/ChargingProgress";
import PaymentScreen from "@/components/PaymentScreen";
import StarRating from "@/components/StarRating";

type RescueStage = 
  | "form" 
  | "waiting" 
  | "accepted" 
  | "enroute" 
  | "arrived" 
  | "charging" 
  | "complete" 
  | "payment" 
  | "rating" 
  | "thankyou";

const RequestRescue = () => {
  const [stage, setStage] = useState<RescueStage>("form");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    vehicleModel: "",
    vehicleNumber: "",
    batteryLevel: "",
    additionalInfo: "",
  });

  const driverInfo = {
    name: "Rajesh Kumar",
    vehicle: "Tesla Mobile Charger Van",
    plateNumber: "DL 5C 9876",
    phone: "+91 98765 43210",
    rating: 4.8,
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    switch (stage) {
      case "waiting":
        timer = setTimeout(() => setStage("accepted"), 3000);
        break;
      case "accepted":
        timer = setTimeout(() => setStage("enroute"), 4000);
        break;
      case "enroute":
        timer = setTimeout(() => setStage("arrived"), 12000);
        break;
      case "arrived":
        timer = setTimeout(() => setStage("charging"), 3000);
        break;
    }
    return () => clearTimeout(timer);
  }, [stage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage("waiting");
    toast({
      title: "Rescue Request Submitted! ⚡",
      description: "Searching for nearby rescue drivers...",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChargingComplete = () => {
    setStage("complete");
    setTimeout(() => setStage("payment"), 2000);
  };

  const handlePaymentComplete = () => {
    setStage("rating");
  };

  const handleRatingSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Rate your experience to continue",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for your feedback! ⭐",
      description: "Your rating helps us improve our service.",
    });
    setStage("thankyou");
  };

  if (stage === "form") {
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
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </Label>
                  <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="hover-glow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required className="hover-glow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Current Location
                  </Label>
                  <Input id="location" name="location" placeholder="123 MG Road, Bangalore" value={formData.location} onChange={handleChange} required className="hover-glow" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel" className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-primary" />
                      Vehicle Model
                    </Label>
                    <Input id="vehicleModel" name="vehicleModel" placeholder="Tesla Model 3" value={formData.vehicleModel} onChange={handleChange} required className="hover-glow" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                    <Input id="vehicleNumber" name="vehicleNumber" placeholder="KA 01 AB 1234" value={formData.vehicleNumber} onChange={handleChange} required className="hover-glow" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batteryLevel" className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-primary" />
                    Current Battery Level (%)
                  </Label>
                  <Input id="batteryLevel" name="batteryLevel" type="number" min="0" max="100" placeholder="5" value={formData.batteryLevel} onChange={handleChange} required className="hover-glow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                  <Textarea id="additionalInfo" name="additionalInfo" placeholder="Any special circumstances..." value={formData.additionalInfo} onChange={handleChange} className="hover-glow min-h-[100px]" />
                </div>
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
  }

  if (stage === "waiting") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/50 shadow-glow">
            <CardContent className="flex flex-col items-center justify-center py-16 space-y-6">
              <Loader2 className="w-20 h-20 text-primary animate-spin" />
              <h2 className="text-3xl font-bold text-glow">Searching for Drivers...</h2>
              <p className="text-muted-foreground text-center">Finding the nearest rescue driver to your location</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (stage === "accepted") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/50 shadow-glow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-20 h-20 text-green-500 animate-scale-in" />
              </div>
              <CardTitle className="text-3xl text-glow">Driver Accepted! ✅</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Driver Information</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><p className="text-muted-foreground">Name</p><p className="font-semibold">{driverInfo.name}</p></div>
                  <div><p className="text-muted-foreground">Vehicle</p><p className="font-semibold">{driverInfo.vehicle}</p></div>
                  <div><p className="text-muted-foreground">Plate</p><p className="font-semibold">{driverInfo.plateNumber}</p></div>
                  <div><p className="text-muted-foreground">Rating</p><p className="font-semibold">⭐ {driverInfo.rating}</p></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (stage === "enroute") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl space-y-6">
          <Card className="border-primary/50 shadow-glow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4"><Truck className="w-16 h-16 text-primary animate-bounce" /></div>
              <CardTitle className="text-3xl text-glow">Driver En Route 🚗</CardTitle>
            </CardHeader>
          </Card>
          <MapView driverLocation={{ lat: 12.9716, lng: 77.5946 }} userLocation={{ lat: 12.9350, lng: 77.6245 }} driverName={driverInfo.name} animateMovement={true} />
          <Card><CardContent className="pt-6"><div className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /><div><p className="font-semibold">Estimated Arrival</p><p className="text-sm text-muted-foreground">8-12 minutes</p></div></div></CardContent></Card>
        </div>
      </div>
    );
  }

  if (stage === "arrived") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-green-500/50 shadow-glow bg-green-500/5">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4"><div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse"><Truck className="w-12 h-12 text-green-500" /></div></div>
              <CardTitle className="text-3xl text-green-500">Driver Arrived! 🚗🔌</CardTitle>
              <CardDescription className="text-lg">Setting up charging equipment</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  if (stage === "charging") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <ChargingProgress startBattery={parseInt(formData.batteryLevel) || 5} targetBattery={80} chargingSpeed={3} onComplete={handleChargingComplete} />
        </div>
      </div>
    );
  }

  if (stage === "complete") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-green-500/50 shadow-glow bg-green-500/5">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4"><CheckCircle2 className="w-20 h-20 text-green-500 animate-scale-in" /></div>
              <CardTitle className="text-3xl text-green-500">Charging Complete! ⚡</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  if (stage === "payment") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <PaymentScreen amount={500} onPaymentComplete={handlePaymentComplete} />
        </div>
      </div>
    );
  }

  if (stage === "rating") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/50 shadow-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Rate Your Experience ⭐</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center py-6">
                <StarRating rating={rating} onRatingChange={setRating} size="lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedback">Additional Feedback (Optional)</Label>
                <Textarea id="feedback" placeholder="Tell us about your experience..." value={feedback} onChange={(e) => setFeedback(e.target.value)} className="min-h-[120px]" />
              </div>
              <Button variant="hero" size="lg" className="w-full" onClick={handleRatingSubmit}>Submit Rating</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-primary/50 shadow-glow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4"><div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center animate-scale-in"><Heart className="w-16 h-16 text-primary fill-primary" /></div></div>
            <CardTitle className="text-4xl text-glow">Thank You! ❤️</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-secondary/50 rounded-lg p-6 text-center">
              <p className="text-muted-foreground">Your feedback helps us improve our service</p>
              {rating > 0 && <div className="flex justify-center items-center gap-2 mt-3"><StarRating rating={rating} readonly size="sm" /></div>}
            </div>
            <Button variant="hero" size="lg" className="w-full" onClick={() => setStage("form")}>Make Another Request</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestRescue;
