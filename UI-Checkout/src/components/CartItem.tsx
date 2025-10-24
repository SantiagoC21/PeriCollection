import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  id: number;
  image: string;
  name: string;
  size: string;
  color: string;
  productRef: string;
  quantity: number;
  price: number;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({
  id,
  image,
  name,
  size,
  color,
  productRef,
  quantity,
  price,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 py-6 border-b border-border">
      <div className="w-24 h-24 bg-muted rounded overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
          <p>Talla {size} · {color} · Ref. {productRef}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 border border-border rounded px-2 py-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 hover:bg-transparent"
          onClick={handleDecrease}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <span className="w-8 text-center font-medium">{quantity}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 hover:bg-transparent"
          onClick={handleIncrease}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      <div className="w-20 text-right font-semibold">
        S/ {price.toFixed(2)}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 hover:bg-transparent"
        onClick={() => onRemove(id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
