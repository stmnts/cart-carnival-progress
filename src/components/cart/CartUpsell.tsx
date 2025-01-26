import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartItems";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CartUpsell = () => {
  const [showVariants, setShowVariants] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addItem({
      id: "upsell-1",
      title: "Related Product",
      price: 29.99,
      quantity: 1,
      image: "/placeholder.svg",
    });
  };

  return (
    <div className="p-3 bg-cart-secondary rounded-lg">
      <h3 className="font-medium text-sm text-cart-text mb-3">Frequently Bought Together</h3>
      <div className="flex items-center gap-3">
        <img
          src="/placeholder.svg"
          alt="Related Product"
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h4 className="font-medium text-sm text-cart-text">Related Product</h4>
          <div className="flex items-center gap-2 my-1">
            <span className="text-xs text-cart-muted line-through">$39.99</span>
            <span className="text-sm text-cart-primary font-medium">$29.99</span>
          </div>
          <div className="flex items-center gap-2">
            <Select 
              open={showVariants} 
              onOpenChange={setShowVariants}
              value={selectedSize}
              onValueChange={setSelectedSize}
            >
              <SelectTrigger className="h-7 text-xs min-w-[80px] flex-grow-0">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s">Small</SelectItem>
                <SelectItem value="m">Medium</SelectItem>
                <SelectItem value="l">Large</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              className="h-7 text-xs bg-cart-primary hover:bg-cart-primary/90 ml-auto"
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};