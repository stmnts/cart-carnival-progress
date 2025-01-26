import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CartProgress } from "./CartProgress";
import { CartTimer } from "./CartTimer";
import { CartItems } from "./CartItems";
import { CartFreeGift } from "./CartFreeGift";
import { CartTrust } from "./CartTrust";
import { CartShipping } from "./CartShipping";
import { CartUpsell } from "./CartUpsell";
import { CartTotal } from "./CartTotal";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto p-4">
        <SheetHeader className="space-y-2 pb-4 border-b">
          <SheetTitle className="text-cart-text text-lg">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 py-4">
          <CartTimer />
          <CartProgress />
          <CartItems />
          <CartFreeGift />
          <CartTrust />
          <CartShipping />
          <CartUpsell />
          <CartTotal />
        </div>
      </SheetContent>
    </Sheet>
  );
};