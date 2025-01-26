import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export const CartShipping = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="p-4 bg-cart-secondary rounded-lg">
      <div className="flex items-start gap-3">
        <Checkbox
          id="shipping-protection"
          checked={checked}
          onCheckedChange={(checked) => setChecked(checked as boolean)}
        />
        <div className="space-y-1">
          <label
            htmlFor="shipping-protection"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Add Shipping Protection For $1.99
          </label>
          <Dialog>
            <DialogTrigger className="text-xs text-cart-primary underline">
              What is Shipping Protection?
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Shipping Protection</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-cart-muted">
                  Shipping protection covers your package against loss, damage, or theft during transit.
                  If anything happens to your order, we'll ship you a replacement at no additional cost.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};