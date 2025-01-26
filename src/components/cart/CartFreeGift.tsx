import React from "react";
import { Gift } from "lucide-react";

export const CartFreeGift = () => {
  const cartValue = 85; // This would come from your cart state
  const threshold = 150;
  const remaining = threshold - cartValue;

  return (
    <div className="p-4 bg-cart-secondary rounded-lg">
      <div className="flex gap-4">
        <img
          src="/placeholder.svg"
          alt="Free Gift"
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-medium text-cart-text mb-1">Mystery Gift Box</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-cart-muted line-through">$25.00</span>
            <span className="text-cart-accent font-medium">Free</span>
          </div>
          <p className="text-sm text-cart-muted">
            Add ${remaining.toFixed(2)} to unlock your free gift!
          </p>
        </div>
        <Gift className="w-5 h-5 text-cart-primary self-start" />
      </div>
    </div>
  );
};