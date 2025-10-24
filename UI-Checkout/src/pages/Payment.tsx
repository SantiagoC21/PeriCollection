import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, CreditCard, Package, Check, Building2, Banknote, Calendar, User, Shield } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">("card");
  const [useSameAddress, setUseSameAddress] = useState(true);

  const orderSummary = {
    items: 4,
    subtotal: 198.70,
    shipping: 15.00,
    taxes: 12.40,
    total: 226.10,
  };

  const savedCards = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "08/27"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Sidebar de navegación */}
          <div className="lg:col-span-3">
            <Card className="p-4 sticky top-6">
              <h2 className="text-base font-semibold mb-4">Checkout</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Entrega</span>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <CreditCard className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-accent">Pago</span>
                </div>
                
                <div className="flex items-center gap-2 p-2 opacity-50">
                  <Package className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Confirmación</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs font-semibold mb-1">Ayuda</p>
                <p className="text-xs text-muted-foreground">
                  ¿Problemas con tu pago? Estamos aquí para ayudarte.
                </p>
              </div>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-1">Pago</h1>
              <p className="text-sm text-muted-foreground">
                Elige tu método de pago y completa los datos.
              </p>
            </div>

            {/* Método de pago */}
            <Card className="p-4 mb-4">
              <h2 className="text-base font-semibold mb-3">Método de pago</h2>
              
              <div className="grid md:grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    paymentMethod === "card"
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <CreditCard className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold mb-0.5">Tarjeta</div>
                      <div className="text-xs text-muted-foreground mb-0.5">
                        Visa, Mastercard, Amex
                      </div>
                      {paymentMethod === "card" && (
                        <div className="text-xs text-accent font-medium">Recomendado</div>
                      )}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod("transfer")}
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    paymentMethod === "transfer"
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <Banknote className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold mb-0.5">Transferencia</div>
                      <div className="text-xs text-muted-foreground mb-0.5">
                        Pago por banco
                      </div>
                      {paymentMethod === "transfer" && (
                        <div className="text-xs text-accent font-medium">1-2 días</div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            </Card>

            {/* Formulario de tarjeta */}
            {paymentMethod === "card" && (
              <Card className="p-4 mb-4">
                <h2 className="text-base font-semibold mb-3">Tarjeta de crédito o débito</h2>
                
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Número de tarjeta" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Nombre en la tarjeta" className="pl-10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="MM / AA" className="pl-10" />
                    </div>
                    <div className="relative">
                      <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="CVV" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1 text-accent">
                    <Shield className="h-3 w-3" />
                    <span>Pago seguro</span>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <Check className="h-3 w-3" />
                    <span>Datos cifrados</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Facturación */}
            <Card className="p-4 mb-4">
              <h2 className="text-base font-semibold mb-3">Facturación</h2>
              
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox 
                  id="sameAddress" 
                  checked={useSameAddress}
                  onCheckedChange={(checked) => setUseSameAddress(checked as boolean)}
                />
                <label
                  htmlFor="sameAddress"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Usar misma dirección que entrega
                </label>
              </div>

              {!useSameAddress && (
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Dirección de facturación" className="pl-10" />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Código postal" />
                  </div>
                  <div>
                    <Input placeholder="Ciudad" />
                  </div>
                  <div>
                    <Input placeholder="País" />
                  </div>
                </div>
              )}
            </Card>

            {/* Botones de navegación */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/checkout")}
                className="flex-1"
              >
                Volver a Entrega
              </Button>
              <Button 
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => navigate("/confirmation")}
              >
                Revisar Pedido
              </Button>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-3">
            <Card className="p-4 sticky top-6">
              <h2 className="text-base font-semibold mb-4">Resumen del pedido</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Artículos</span>
                  <span className="font-medium">{orderSummary.items}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">S/ {orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="font-medium">S/ {orderSummary.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Impuestos</span>
                  <span className="font-medium">S/ {orderSummary.taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-border mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold">Total</span>
                  <span className="text-xl font-bold">S/ {orderSummary.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Tarjetas guardadas */}
              {paymentMethod === "card" && savedCards.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Tarjetas guardadas</h3>
                  {savedCards.map((card) => (
                    <div key={card.id} className="border border-border rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        <div>
                          <div className="text-sm font-medium">{card.type} •••• {card.last4}</div>
                          <div className="text-xs text-muted-foreground">Vence {card.expiry}</div>
                        </div>
                      </div>
                      <Button variant="link" className="h-auto p-0 text-xs text-accent">
                        Usar
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {/* Protección al comprador */}
              <div className="border border-border rounded-lg p-3">
                <div className="flex items-start gap-2 mb-1">
                  <Shield className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold mb-0.5">Protección al comprador</div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Reembolsos fáciles si algo sale mal
                    </div>
                    <div className="text-xs text-accent font-medium">Incluido</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
