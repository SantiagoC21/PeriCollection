import { Lock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  taxes: number;
}

const CartSummary = ({ subtotal, shipping, taxes }: CartSummaryProps) => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const total = subtotal + shipping + taxes;

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-6">
      <h2 className="text-xl font-semibold mb-6">Resumen</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">S/ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Envío</span>
          <span className="font-medium">S/ {shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Impuestos</span>
          <span className="font-medium">S/ {taxes.toFixed(2)}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-border mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">S/ {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mb-4">
        <button className="flex items-center gap-2 text-sm text-secondary hover:underline mb-3">
          <Tag className="h-4 w-4" />
          Agregar cupón
        </button>
        <div className="flex gap-2">
          <Input
            placeholder="Código de cupón"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Seguir Comprando
        </Button>
        <Button 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => navigate("/checkout")}
        >
          Ir a Pagar
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Lock className="h-3 w-3" />
        <span>Pagos seguros y encriptados.</span>
      </div>
    </div>
  );
};

export default CartSummary;
