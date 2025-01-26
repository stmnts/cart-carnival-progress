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
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="space-y-2.5 pb-6 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-cart-text text-xl font-semibold">Your Cart</SheetTitle>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </SheetHeader>

        <div className="space-y-6 py-6">
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