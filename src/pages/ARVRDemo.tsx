import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Zap, Battery, CheckCircle2, AlertTriangle } from "lucide-react";

const ARVRDemo = () => {
  const steps = [
    {
      number: 1,
      title: "Locate the Charging Port",
      description: "Use AR overlay to identify your EV's charging port location. Our app highlights it in real-time.",
      icon: Eye,
      color: "text-blue-500"
    },
    {
      number: 2,
      title: "Safety Check",
      description: "Ensure the vehicle is in park mode and all systems are safely powered down.",
      icon: AlertTriangle,
      color: "text-yellow-500"
    },
    {
      number: 3,
      title: "Connect the Cable",
      description: "Align the charging connector with the port. The AR guide shows the correct angle and orientation.",
      icon: Zap,
      color: "text-primary"
    },
    {
      number: 4,
      title: "Secure Connection",
      description: "Push firmly until you hear a click. The AR interface will confirm a successful connection.",
      icon: CheckCircle2,
      color: "text-green-500"
    },
    {
      number: 5,
      title: "Begin Charging",
      description: "Monitor the charging progress through the AR display showing real-time battery levels.",
      icon: Battery,
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Interactive Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            AR/VR Charging Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how to safely connect your EV to our rescue charging system with augmented reality guidance
          </p>
        </div>

        {/* Main Demo Card */}
        <Card className="border-primary/30 shadow-glow-lg mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Interactive AR Experience</CardTitle>
            <CardDescription>
              Step-by-step visual guide powered by augmented reality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-background rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
              {/* Simulated AR View */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-64 h-64 border-4 border-primary rounded-full animate-pulse"></div>
                  <div className="w-48 h-48 border-4 border-primary/60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <div className="text-center z-10">
                <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">AR Demo Preview</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Use your mobile device to experience the full AR guide
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Real-Time Overlay
                </h3>
                <p className="text-sm text-muted-foreground">
                  See charging port location, cable alignment, and safety indicators overlaid on your camera view
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Battery className="w-4 h-4 text-primary" />
                  Live Monitoring
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track charging progress, voltage, and estimated completion time through AR display
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Guide */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Step-by-Step Guide</h2>
          
          <div className="grid gap-6">
            {steps.map((step) => (
              <Card 
                key={step.number} 
                className="border-border hover-glow hover:scale-[1.02] transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">Step {step.number}</Badge>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Voice Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Audio instructions guide you through each step hands-free
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Safety Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-time warnings for any safety concerns during connection
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Multi-Model Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Works with all major EV brands and charging port types
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ARVRDemo;
