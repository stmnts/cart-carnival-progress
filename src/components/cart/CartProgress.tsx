import React from "react";
import { Truck, Gift, Percent } from "lucide-react";
import { useCart } from "./CartItems";

export const CartProgress = () => {
  const { cartTotal } = useCart();
  const maxValue = 150;
  const progress = (cartTotal / maxValue) * 100;

  const milestones = [
    { value: 50, icon: Truck, label: "Free Shipping", reached: cartTotal >= 50 },
    { value: 100, icon: Percent, label: "15% Off", reached: cartTotal >= 100 },
    { value: 150, icon: Gift, label: "Free Gift", reached: cartTotal >= 150 },
  ];

  return (
    <div className="p-3 bg-cart-secondary rounded-lg">
      <div className="space-y-3">
        <div className="flex justify-between">
          {milestones.map(({ label, reached }) => (
            <span
              key={label}
              className={`text-xs font-medium ${
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
          {milestones.map(({ value, icon: Icon, reached }) => {
            const position = (value / maxValue) * 100;
            return (
              <div
                key={value}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${position}%` }}
              >
                <div
                  className={`-ml-2.5 w-5 h-5 rounded-full flex items-center justify-center ${
                    reached ? "bg-cart-primary" : "bg-gray-300"
                  }`}
                >
                  <Icon className="w-3 h-3 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-cart-muted text-center">
          {cartTotal < maxValue
            ? `Add $${(maxValue - cartTotal).toFixed(2)} to unlock all rewards!`
            : "You've unlocked all rewards!"}
        </p>
      </div>
    </div>
  );
};