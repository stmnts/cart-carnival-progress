import React, { createContext, useContext, useState, useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartTotal: number;
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateCart: (items: CartItem[]) => void;
}

export const CartContext = createContext<CartContextType>({
  cartTotal: 0,
  items: [],
  addItem: () => {},
  updateCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartItems = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Premium Product",
      price: 29.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
  ]);

  const { updateCart } = useCart();

  useEffect(() => {
    updateCart(items);
  }, [items, updateCart]);

  const updateQuantity = (id: string, change: number) => {
    const newItems = items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter((item) => item.quantity > 0);
    setItems(newItems);
  };

  const removeItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex gap-3 py-3 border-b">
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1 space-y-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-sm text-cart-text">{item.title}</h3>
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
                className="h-7 w-7"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="w-6 text-center text-sm">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            <p className="font-medium text-sm text-cart-text">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};