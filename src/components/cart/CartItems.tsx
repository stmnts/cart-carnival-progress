import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export const CartItems = () => {
  const [items, setItems] = React.useState<CartItem[]>([
    {
      id: "1",
      title: "Premium Product",
      price: 29.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex gap-4 py-4 border-b">
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1 space-y-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-cart-text">{item.title}</h3>
              <button
                onClick={() => removeItem(item.id)}
                className="text-cart-muted hover:text-cart-text"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <p className="font-medium text-cart-text">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};