import React from "react";
import { Button } from "@/components/ui/button";

export const CartTotal = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-cart-muted">Subtotal</span>
          <span className="font-medium text-cart-text">$85.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-cart-muted">Discount</span>
          <span className="font-medium text-cart-accent">-$12.75</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-cart-muted">Shipping Protection</span>
          <span className="font-medium text-cart-text">$1.99</span>
        </div>
        <div className="pt-4 border-t flex justify-between">
          <span className="font-medium text-cart-text">Total</span>
          <span className="font-medium text-cart-text">$74.24</span>
        </div>
      </div>
      <p className="text-xs text-cart-muted text-center">
        Taxes included. Discount and shipping calculated at checkout.
      </p>
      <Button className="w-full bg-cart-primary hover:bg-cart-primary/90 text-white">
        Checkout
      </Button>
    </div>
  );
};