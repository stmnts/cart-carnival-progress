import React from "react";
import { Gift } from "lucide-react";
import { useCart } from "./CartItems";

export const CartFreeGift = () => {
  const { cartTotal } = useCart();
  const threshold = 150;
  const remaining = threshold - cartTotal;
  const isUnlocked = cartTotal >= threshold;

  return (
    <div className="p-3 bg-cart-secondary rounded-lg">
      <div className="flex gap-3">
        <img
          src="/placeholder.svg"
          alt="Free Gift"
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-medium text-sm text-cart-text">Mystery Gift Box</h3>
          <div className="flex items-center gap-2 my-1">
            <span className="text-xs text-cart-muted line-through">$25.00</span>
            <span className="text-sm text-cart-accent font-medium">Free</span>
          </div>
          <p className="text-xs text-cart-muted">
            {isUnlocked ? (
              <span className="text-cart-accent font-medium">Unlocked!</span>
            ) : (
              `Add $${remaining.toFixed(2)} to unlock your free gift!`
            )}
          </p>
        </div>
        <Gift className={`w-4 h-4 ${isUnlocked ? 'text-cart-accent' : 'text-cart-primary'} self-start`} />
      </div>
    </div>
  );
};