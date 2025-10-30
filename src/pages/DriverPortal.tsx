import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Battery, 
  Clock, 
  CheckCircle2,
  AlertCircle 
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DriverPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock rescue requests data
  const rescueRequests = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "123 Oak Street, Downtown",
      vehicle: "Tesla Model 3",
      batteryLevel: 3,
      distance: "2.5 km",
      timestamp: "5 minutes ago",
      status: "pending"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "456 Pine Avenue, Northside",
      vehicle: "Nissan Leaf",
      batteryLevel: 8,
      distance: "4.1 km",
      timestamp: "12 minutes ago",
      status: "pending"
    },
  ];

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
    toast({
      title: "Welcome back! ⚡",
      description: "You're now logged in to the Driver Portal.",
    });
  };

  const handleAcceptRequest = (id: number) => {
    toast({
      title: "Request Accepted! ⚡",
      description: "Navigate to the location and start the rescue mission.",
    });
  };

  if (isLoggedIn) {
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
                  Total Rescues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">147</div>
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
                        onClick={() => handleAcceptRequest(request.id)}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Accept Request
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {rescueRequests.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Battery className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No active rescue requests in your area</p>
                </div>
              )}
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

              {/* Sign Up Form */}
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
                      placeholder="+1 (555) 000-0000"
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
                      placeholder="San Francisco, CA"
                      required
                      className="hover-glow"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Register as Driver
                  </Button>
                </form>
              </TabsContent>

              {/* Login Form */}
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
};

export default DriverPortal;
