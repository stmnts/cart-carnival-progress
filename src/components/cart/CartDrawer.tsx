import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X } from "lucide-react";
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
          <div className="flex items-center justify-between">
            <SheetTitle className="text-cart-text text-lg">Your Cart</SheetTitle>
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
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