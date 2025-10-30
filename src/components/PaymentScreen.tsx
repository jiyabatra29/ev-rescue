import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Check, IndianRupee } from "lucide-react";

interface PaymentScreenProps {
  amount: number;
  onPaymentComplete: () => void;
}

const PaymentScreen = ({ amount, onPaymentComplete }: PaymentScreenProps) => {
  const [isPaying, setIsPaying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handlePayment = () => {
    setIsPaying(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsPaying(false);
      setIsComplete(true);
      
      // Call completion callback after showing success
      setTimeout(() => {
        onPaymentComplete();
      }, 2000);
    }, 2000);
  };

  if (isComplete) {
    return (
      <Card className="border-green-500/50 shadow-glow bg-green-500/5">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-scale-in">
            <Check className="w-12 h-12 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-green-500">Payment Successful!</h3>
          <p className="text-muted-foreground">Thank you for using EV RESQ</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/50 shadow-glow">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <IndianRupee className="w-6 h-6 text-primary" />
          Payment Required
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Amount Display */}
        <div className="bg-secondary/50 rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
          <p className="text-5xl font-bold text-primary flex items-center justify-center gap-1">
            <IndianRupee className="w-10 h-10" />
            {amount}
          </p>
        </div>

        {/* Payment Breakdown */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Emergency Rescue Service</span>
            <span className="font-semibold">₹350</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Charging (per kWh)</span>
            <span className="font-semibold">₹100</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service Fee</span>
            <span className="font-semibold">₹50</span>
          </div>
          <div className="border-t border-border pt-3 flex justify-between font-bold text-base">
            <span>Total</span>
            <span className="text-primary">₹{amount}</span>
          </div>
        </div>

        {/* Payment Button */}
        <Button 
          variant="hero" 
          size="lg" 
          className="w-full"
          onClick={handlePayment}
          disabled={isPaying}
        >
          {isPaying ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Processing Payment...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Pay ₹{amount} Now
            </>
          )}
        </Button>

        {/* Payment Info */}
        <p className="text-xs text-center text-muted-foreground">
          Secure payment powered by EV RESQ. All transactions are encrypted.
        </p>
      </CardContent>
    </Card>
  );
};

export default PaymentScreen;
