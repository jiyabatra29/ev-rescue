import { useEffect, useState } from "react";
import { Battery, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChargingProgressProps {
  startBattery: number;
  targetBattery?: number;
  chargingSpeed?: number;
  onComplete?: () => void;
}

const ChargingProgress = ({ 
  startBattery, 
  targetBattery = 80,
  chargingSpeed = 2,
  onComplete 
}: ChargingProgressProps) => {
  const [currentBattery, setCurrentBattery] = useState(startBattery);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    if (currentBattery >= targetBattery) {
      setIsCharging(false);
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
      return;
    }

    const interval = setInterval(() => {
      setCurrentBattery((prev) => {
        const next = prev + chargingSpeed;
        return next >= targetBattery ? targetBattery : next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentBattery, targetBattery, chargingSpeed, onComplete]);

  const progress = ((currentBattery - startBattery) / (targetBattery - startBattery)) * 100;

  return (
    <Card className="border-primary/50 shadow-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary animate-pulse" />
          {isCharging ? "Charging In Progress..." : "Charging Complete!"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Battery Visualization */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <Battery className={`w-32 h-32 ${isCharging ? 'text-primary animate-pulse' : 'text-green-500'}`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{Math.round(currentBattery)}%</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-4" />
        </div>

        {/* Charging Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-primary">{startBattery}%</p>
            <p className="text-xs text-muted-foreground">Start</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-primary">{Math.round(currentBattery)}%</p>
            <p className="text-xs text-muted-foreground">Current</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-green-500">{targetBattery}%</p>
            <p className="text-xs text-muted-foreground">Target</p>
          </div>
        </div>

        {/* Status Message */}
        <div className="bg-secondary/50 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground">
            {isCharging 
              ? `Estimated time: ${Math.ceil((targetBattery - currentBattery) / chargingSpeed)} seconds`
              : "Your vehicle is ready to go! ⚡"
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChargingProgress;
