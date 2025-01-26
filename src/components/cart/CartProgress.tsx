import React from "react";
import { Truck, Gift, Percent } from "lucide-react";

export const CartProgress = () => {
  const cartValue = 85; // This would come from your cart state
  const maxValue = 150;
  const progress = (cartValue / maxValue) * 100;

  const milestones = [
    { value: 50, icon: Truck, label: "Free Shipping", reached: cartValue >= 50 },
    { value: 100, icon: Percent, label: "15% Off", reached: cartValue >= 100 },
    { value: 150, icon: Gift, label: "Free Gift", reached: cartValue >= 150 },
  ];

  return (
    <div className="p-4 bg-cart-secondary rounded-lg">
      <div className="space-y-4">
        <div className="flex justify-between">
          {milestones.map(({ label, reached }) => (
            <span
              key={label}
              className={`text-sm font-medium ${
                reached ? "text-cart-primary" : "text-cart-muted"
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="relative h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-full bg-cart-primary rounded-full transition-all duration-500 ease-out animate-progress-fill"
            style={{ width: `${progress}%` }}
          />
          {milestones.map(({ value, icon: Icon, reached }, index) => {
            const position = (value / maxValue) * 100;
            return (
              <div
                key={value}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${position}%` }}
              >
                <div
                  className={`-ml-3 w-6 h-6 rounded-full flex items-center justify-center ${
                    reached ? "bg-cart-primary" : "bg-gray-300"
                  }`}
                >
                  <Icon className="w-3 h-3 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-cart-muted text-center">
          {cartValue < maxValue
            ? `Add $${(maxValue - cartValue).toFixed(2)} to unlock all rewards!`
            : "You've unlocked all rewards!"}
        </p>
      </div>
    </div>
  );
};