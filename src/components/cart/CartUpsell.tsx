import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CartUpsell = () => {
  const [showVariants, setShowVariants] = useState(false);

  return (
    <div className="p-4 bg-cart-secondary rounded-lg">
      <h3 className="font-medium text-cart-text mb-4">Frequently Bought Together</h3>
      <div className="flex gap-4">
        <img
          src="/placeholder.svg"
          alt="Related Product"
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h4 className="font-medium text-cart-text mb-1">Related Product</h4>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-cart-muted line-through">$39.99</span>
            <span className="text-cart-primary font-medium">$29.99</span>
          </div>
          <button
            onClick={() => setShowVariants(!showVariants)}
            className="text-sm text-cart-primary underline mb-2"
          >
            Show Details
          </button>
          {showVariants && (
            <div className="space-y-2 mb-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s">Small</SelectItem>
                  <SelectItem value="m">Medium</SelectItem>
                  <SelectItem value="l">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <Button className="w-full bg-cart-primary hover:bg-cart-primary/90">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};