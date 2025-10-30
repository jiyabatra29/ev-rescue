import { useEffect, useState } from "react";
import { MapPin, Navigation, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MapViewProps {
  driverLocation: { lat: number; lng: number };
  userLocation: { lat: number; lng: number };
  driverName?: string;
  animateMovement?: boolean;
}

const MapView = ({ 
  driverLocation, 
  userLocation, 
  driverName = "Driver",
  animateMovement = false 
}: MapViewProps) => {
  const [currentDriverPos, setCurrentDriverPos] = useState(driverLocation);

  useEffect(() => {
    if (!animateMovement) return;

    // Simulate driver movement towards user
    const steps = 20;
    const latStep = (userLocation.lat - driverLocation.lat) / steps;
    const lngStep = (userLocation.lng - driverLocation.lng) / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(interval);
        return;
      }

      setCurrentDriverPos({
        lat: driverLocation.lat + latStep * currentStep,
        lng: driverLocation.lng + lngStep * currentStep,
      });
      currentStep++;
    }, 500);

    return () => clearInterval(interval);
  }, [animateMovement, driverLocation, userLocation]);

  // Calculate distance percentage for visual representation
  const totalDistance = Math.sqrt(
    Math.pow(userLocation.lat - driverLocation.lat, 2) +
    Math.pow(userLocation.lng - driverLocation.lng, 2)
  );
  
  const currentDistance = Math.sqrt(
    Math.pow(userLocation.lat - currentDriverPos.lat, 2) +
    Math.pow(userLocation.lng - currentDriverPos.lng, 2)
  );

  const progressPercent = Math.max(0, Math.min(100, ((totalDistance - currentDistance) / totalDistance) * 100));

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10 border-primary/20">
      {/* Map Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Map Content */}
      <div className="relative p-8 min-h-[400px] flex flex-col justify-between">
        {/* Route Visualization */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Route Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/30 -translate-y-1/2">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* User Location (Right) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-background rounded-full p-3 border-2 border-primary shadow-glow animate-pulse">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <span className="mt-2 text-sm font-medium">You</span>
            </div>

            {/* Driver Location (Animated) */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 flex flex-col items-center"
              style={{ 
                left: `${progressPercent}%`,
                transform: `translate(-50%, -50%)`
              }}
            >
              <div className="bg-background rounded-full p-3 border-2 border-green-500 shadow-lg animate-bounce">
                <Navigation className="w-8 h-8 text-green-500" />
              </div>
              <span className="mt-2 text-sm font-medium">{driverName}</span>
            </div>
          </div>
        </div>

        {/* Status Info */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Distance Progress:</span>
            <span className="font-bold text-primary">{Math.round(progressPercent)}%</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>Live tracking active</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MapView;
