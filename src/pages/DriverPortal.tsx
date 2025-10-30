import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Battery, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Truck,
  IndianRupee,
  Heart
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import MapView from "@/components/MapView";
import ChargingProgress from "@/components/ChargingProgress";
import StarRating from "@/components/StarRating";

type DriverStage = "login" | "dashboard" | "accepted" | "enroute" | "arrived" | "charging" | "complete" | "payment" | "rating" | "thankyou";

const DriverPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stage, setStage] = useState<DriverStage>("login");
  const [activeRequest, setActiveRequest] = useState<any>(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Mock rescue requests data
  const rescueRequests = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "123 MG Road, Bangalore",
      vehicle: "Tesla Model 3",
      vehicleNumber: "KA 01 AB 1234",
      batteryLevel: 3,
      distance: "2.5 km",
      timestamp: "5 minutes ago",
      status: "pending",
      phone: "+91 98765 12345"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "456 Koramangala, Bangalore",
      vehicle: "Nissan Leaf",
      vehicleNumber: "KA 05 CD 5678",
      batteryLevel: 8,
      distance: "4.1 km",
      timestamp: "12 minutes ago",
      status: "pending",
      phone: "+91 98765 67890"
    },
  ];

  // Auto-progress through stages
  useEffect(() => {
    let timer: NodeJS.Timeout;

    switch (stage) {
      case "accepted":
        timer = setTimeout(() => setStage("enroute"), 3000);
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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted! ⚡",
      description: "We'll review your application and get back to you within 24 hours.",
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setStage("dashboard");
    toast({
      title: "Welcome back! ⚡",
      description: "You're now logged in to the Driver Portal.",
    });
  };

  const handleAcceptRequest = (request: any) => {
    setActiveRequest(request);
    setStage("accepted");
    toast({
      title: "Request Accepted! ⚡",
      description: "Navigate to the location and start the rescue mission.",
    });
  };

  const handleChargingComplete = () => {
    setStage("complete");
    setTimeout(() => setStage("payment"), 2000);
  };

  const handlePaymentReceived = () => {
    setStage("rating");
  };

  const handleRatingSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Rate your customer to continue",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for your feedback! ⭐",
      description: "Rating submitted successfully.",
    });
    setStage("thankyou");
  };

  const resetToDashboard = () => {
    setStage("dashboard");
    setActiveRequest(null);
    setRating(0);
    setFeedback("");
  };

  // LOGIN/SIGNUP VIEW
  if (!isLoggedIn || stage === "login") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-border shadow-glow">
            <CardHeader>
              <CardTitle className="text-3xl">Driver Portal</CardTitle>
              <CardDescription>
                Sign up to become a rescue driver or log in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signup">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>

                <TabsContent value="signup">
                  <form onSubmit={handleSignUp} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Full Name
                      </Label>
                      <Input
                        id="signup-name"
                        placeholder="John Doe"
                        required
                        className="hover-glow"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email
                      </Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="driver@example.com"
                        required
                        className="hover-glow"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Phone Number
                      </Label>
                      <Input
                        id="signup-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="hover-glow"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-location" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        City/Region
                      </Label>
                      <Input
                        id="signup-location"
                        placeholder="Bangalore, Karnataka"
                        required
                        className="hover-glow"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Register as Driver
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email
                      </Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="driver@example.com"
                        required
                        className="hover-glow"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="hover-glow"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Login to Dashboard
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // DASHBOARD VIEW
  if (stage === "dashboard") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-glow">Driver Dashboard</h1>
            <p className="text-muted-foreground">Manage rescue requests and track your missions</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">2</div>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Completed Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5</div>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Earnings Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold flex items-center gap-1">
                  <IndianRupee className="w-7 h-7" />
                  2,500
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nearby Requests */}
          <Card className="border-border shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl">Nearby Rescue Requests</CardTitle>
              <CardDescription>
                Accept requests to start your rescue mission
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {rescueRequests.map((request) => (
                <div
                  key={request.id}
                  className="bg-secondary/50 rounded-lg p-6 hover-glow hover:scale-[1.02] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{request.name}</h3>
                        <Badge variant="destructive" className="ml-2">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {request.batteryLevel}% Battery
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {request.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Battery className="w-4 h-4 text-primary" />
                          {request.vehicle}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          Distance: {request.distance}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          {request.timestamp}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button 
                        variant="hero"
                        onClick={() => handleAcceptRequest(request)}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Accept Request
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ACCEPTED STAGE
  if (stage === "accepted") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/50 shadow-glow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-20 h-20 text-green-500 animate-scale-in" />
              </div>
              <CardTitle className="text-3xl text-glow">Request Accepted! ✅</CardTitle>
              <CardDescription className="text-lg">
                Preparing to navigate to customer location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg mb-3">Customer Information</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Name</p>
                    <p className="font-semibold">{activeRequest?.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Vehicle</p>
                    <p className="font-semibold">{activeRequest?.vehicle}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-semibold">{activeRequest?.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Battery Level</p>
                    <p className="font-semibold text-destructive">{activeRequest?.batteryLevel}%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // EN ROUTE STAGE
  if (stage === "enroute") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6">
            <Card className="border-primary/50 shadow-glow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Truck className="w-16 h-16 text-primary animate-bounce" />
                </div>
                <CardTitle className="text-3xl text-glow">Navigating to Customer 🚗</CardTitle>
                <CardDescription className="text-lg">
                  Follow the map to reach {activeRequest?.name}
                </CardDescription>
              </CardHeader>
            </Card>

            <MapView
              driverLocation={{ lat: 12.9716, lng: 77.5946 }}
              userLocation={{ lat: 12.9350, lng: 77.6245 }}
              driverName="You"
              animateMovement={true}
            />

            <Card className="border-border">
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Estimated Arrival</p>
                      <p className="text-sm text-muted-foreground">8-12 minutes</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Customer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ARRIVED STAGE
  if (stage === "arrived") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-green-500/50 shadow-glow bg-green-500/5">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
              </div>
              <CardTitle className="text-3xl text-green-500">Arrived at Location! 📍</CardTitle>
              <CardDescription className="text-lg">
                Setting up charging equipment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/50 rounded-lg p-6 text-center space-y-3">
                <p className="text-muted-foreground">
                  Connect the charging cable to the customer's vehicle
                </p>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Customer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // CHARGING STAGE
  if (stage === "charging") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <ChargingProgress
            startBattery={activeRequest?.batteryLevel || 5}
            targetBattery={80}
            chargingSpeed={3}
            onComplete={handleChargingComplete}
          />
        </div>
      </div>
    );
  }

  // COMPLETE STAGE
  if (stage === "complete") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-green-500/50 shadow-glow bg-green-500/5">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-20 h-20 text-green-500 animate-scale-in" />
              </div>
              <CardTitle className="text-3xl text-green-500">Charging Complete! ⚡</CardTitle>
              <CardDescription className="text-lg">
                Customer's vehicle is now charged and ready
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 rounded-lg p-6 text-center">
                <p className="text-muted-foreground">
                  Waiting for payment confirmation...
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // PAYMENT RECEIVED STAGE
  if (stage === "payment") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-green-500/50 shadow-glow bg-green-500/5">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center animate-scale-in">
                  <IndianRupee className="w-12 h-12 text-green-500" />
                </div>
              </div>
              <CardTitle className="text-3xl text-green-500">Payment Received! 💰</CardTitle>
              <CardDescription className="text-lg">
                ₹500 has been credited to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/50 rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Service Charge</p>
                    <p className="font-semibold">₹350</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Charging Fee</p>
                    <p className="font-semibold">₹100</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Platform Fee</p>
                    <p className="font-semibold">-₹50</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Your Earning</p>
                    <p className="font-bold text-green-500">₹400</p>
                  </div>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handlePaymentReceived}
              >
                Continue to Rating
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // RATING STAGE
  if (stage === "rating") {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/50 shadow-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Rate the Customer ⭐</CardTitle>
              <CardDescription className="text-lg">
                How was your experience with {activeRequest?.name}?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center py-6">
                <StarRating
                  rating={rating}
                  onRatingChange={setRating}
                  size="lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Additional Feedback (Optional)</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your experience..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleRatingSubmit}
              >
                Submit Rating
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // THANK YOU STAGE
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-primary/50 shadow-glow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center animate-scale-in">
                <Heart className="w-16 h-16 text-primary fill-primary" />
              </div>
            </div>
            <CardTitle className="text-4xl text-glow">Mission Complete! 🎉</CardTitle>
            <CardDescription className="text-lg">
              Great job! Ready for the next rescue?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-secondary/50 rounded-lg p-6 space-y-3">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">₹400</p>
                  <p className="text-xs text-muted-foreground">Earned</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">6</p>
                  <p className="text-xs text-muted-foreground">Today</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <StarRating rating={rating} readonly size="sm" />
                  <p className="text-xs text-muted-foreground mt-1">Your Rating</p>
                </div>
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={resetToDashboard}
            >
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DriverPortal;
