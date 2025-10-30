import { Card, CardContent } from "@/components/ui/card";
import { Battery, Zap, Leaf, Bot, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            About EV RESQ
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing roadside assistance for the electric vehicle era with AI-powered, sustainable rescue solutions
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="border-primary/30 shadow-glow mb-12">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At EV RESQ, we're committed to promoting sustainable mobility by ensuring electric vehicle owners never feel stranded. 
                  Our mission is to provide fast, reliable emergency charging services powered by cutting-edge AI technology and a 
                  100% electric rescue fleet. We believe in a future where clean transportation is accessible, convenient, and worry-free.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border hover-glow hover:scale-105 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Positioning</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI algorithms predict battery-drain zones by analyzing traffic patterns, weather conditions, 
                    and charging station locations. This ensures our rescue vans are always positioned where they're needed most.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border hover-glow hover:scale-105 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">100% Electric Fleet</h3>
                  <p className="text-muted-foreground">
                    Every rescue van in our fleet is fully electric, powered by renewable energy. We don't just talk about 
                    sustainability – we live it. Our operations produce zero direct emissions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border hover-glow hover:scale-105 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                  <p className="text-muted-foreground">
                    With strategically positioned vans and real-time routing, we guarantee response times under 30 minutes 
                    in urban areas. Your journey continues with minimal interruption.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border hover-glow hover:scale-105 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                  <p className="text-muted-foreground">
                    Our network of trained rescue drivers are passionate EV advocates. They're not just technicians – 
                    they're part of the community helping accelerate the transition to electric mobility.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Section */}
        <Card className="border-primary/30 shadow-glow mb-12">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Battery className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Cutting-Edge Technology</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  EV RESQ leverages state-of-the-art technology to deliver unparalleled service:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">
                      <strong>Machine Learning:</strong> Predictive analytics identify high-demand areas before emergencies occur
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">
                      <strong>Real-Time Tracking:</strong> GPS-enabled dispatch system ensures optimal routing and transparency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">
                      <strong>AR/VR Integration:</strong> Interactive guides help users safely connect charging equipment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">
                      <strong>High-Capacity Batteries:</strong> Each van carries enough power for multiple rescues without recharging
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-hero rounded-lg border border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Rescues Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-hero rounded-lg border border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Active Drivers</div>
          </div>
          <div className="text-center p-6 bg-gradient-hero rounded-lg border border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Available Service</div>
          </div>
          <div className="text-center p-6 bg-gradient-hero rounded-lg border border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
