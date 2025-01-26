import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CartTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-4 bg-cart-secondary rounded-lg">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-cart-primary" />
        <p className="text-sm text-cart-text">
          Your items are reserved for{" "}
          <span className="font-semibold">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </p>
      </div>
    </div>
  );
};