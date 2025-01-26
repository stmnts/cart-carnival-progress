import React from "react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/cart/CartDrawer";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Button
        onClick={() => setIsCartOpen(true)}
        className="bg-cart-primary hover:bg-cart-primary/90"
      >
        Open Cart
      </Button>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;