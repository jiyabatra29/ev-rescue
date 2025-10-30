import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Battery, Zap, MapPin, Bot, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-ev-rescue.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Your EV's Hero on Wheels ⚡
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Fast, Smart & Sustainable Rescue
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Emergency charging help when you need it most. AI-powered rescue vans positioned perfectly to save your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate("/request-rescue")}
              >
                <Battery className="w-5 h-5" />
                Request Rescue
              </Button>
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => navigate("/driver-portal")}
              >
                <Zap className="w-5 h-5" />
                Join as Driver
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">Why Choose EV RESQ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border border-border rounded-lg p-6 hover-glow hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Our rescue vans are strategically positioned using AI to reach you in minutes, not hours.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-lg p-6 hover-glow hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-muted-foreground">
                Smart prediction of battery-drain zones ensures our fleet is always where you need it.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-lg p-6 hover-glow hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable</h3>
              <p className="text-muted-foreground">
                100% electric rescue fleet. We practice what we preach - zero emissions, maximum impact.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card border border-border rounded-lg p-6 hover-glow hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
              <p className="text-muted-foreground">
                Know exactly where your rescue van is and when it will arrive with live tracking.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card border border-border rounded-lg p-6 hover-glow hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
              <p className="text-muted-foreground">
                24/7 availability with certified technicians trained to handle all EV models.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card border border-border rounded-lg p-6 hover-glow hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Battery className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Capacity</h3>
              <p className="text-muted-foreground">
                Our vans carry enough power to get you to the nearest charging station or home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-hero border border-primary/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of EV owners who trust EV RESQ for their emergency charging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/request-rescue")}
              >
                Get Started Now
              </Button>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
