import { useState } from "react";
import Header from "@/components/Header";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { Package } from "lucide-react";

interface CartProduct {
  id: number;
  name: string;
  image: string;
  size: string;
  color: string;
  productRef: string;
  quantity: number;
  price: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: 1,
      name: "Camisa Oxford Blanca",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=200&fit=crop",
      size: "M",
      color: "Blanco",
      productRef: "10231",
      quantity: 1,
      price: 39.90,
    },
    {
      id: 2,
      name: "Vestido Floral Verano",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
      size: "S",
      color: "Estampado",
      productRef: "20412",
      quantity: 2,
      price: 49.90,
    },
    {
      id: 3,
      name: "Jeans Slim Fit Azul",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop",
      size: "32",
      color: "Azul",
      productRef: "33009",
      quantity: 1,
      price: 59.00,
    },
  ]);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 80 ? 0 : 5.99;
  const taxes = subtotal * 0.10;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-1">Tu Carrito</h1>
                <p className="text-muted-foreground">
                  Revisa tus artículos antes de pagar.
                </p>
              </div>
              <div className="text-sm font-medium text-secondary">
                {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Tu carrito está vacío</p>
                </div>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                    />
                  ))}

                  {shipping === 0 && (
                    <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>Envío gratis en pedidos superiores a S/ 80.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <CartSummary 
              subtotal={subtotal}
              shipping={shipping}
              taxes={taxes}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
