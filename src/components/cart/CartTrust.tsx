import React from "react";
import { Shield } from "lucide-react";

export const CartTrust = () => {
  return (
    <div className="flex items-center justify-center gap-6 py-4 border-t border-b">
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-cart-primary" />
        <span className="text-xs text-cart-muted">Secure Payment</span>
      </div>
      <img src="/placeholder.svg" alt="Visa" className="h-6" />
      <img src="/placeholder.svg" alt="Mastercard" className="h-6" />
    </div>
  );
};