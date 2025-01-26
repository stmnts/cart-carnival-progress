import React from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartItems";

export const CartTotal = () => {
  const { items } = useCart();
  const shippingProtectionPrice = 1.99;
  
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = subtotal * 0.15; // 15% discount
  const total = subtotal - discount + shippingProtectionPrice;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-cart-muted">Subtotal</span>
          <span className="font-medium text-cart-text">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-cart-muted">Discount</span>
          <span className="font-medium text-cart-accent">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-cart-muted">Shipping Protection</span>
          <span className="font-medium text-cart-text">${shippingProtectionPrice.toFixed(2)}</span>
        </div>
        <div className="pt-4 border-t flex justify-between">
          <span className="font-medium text-cart-text">Total</span>
          <span className="font-medium text-cart-text">${total.toFixed(2)}</span>
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