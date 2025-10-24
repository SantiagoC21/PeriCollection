import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, CreditCard, Package, Home, Store, Search, Zap } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState<"home" | "store">("home");
  const [searchStore, setSearchStore] = useState("");

  // Mock data - en producción vendría del estado global o props
  const orderSummary = {
    items: 4,
    subtotal: 198.70,
    shipping: "Calculado según método",
    total: 198.70,
  };

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
                <div className="flex items-center gap-2 p-2 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-accent">Entrega</span>
                </div>
                
                <div className="flex items-center gap-2 p-2 opacity-50">
                  <CreditCard className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Pago</span>
                </div>
                
                <div className="flex items-center gap-2 p-2 opacity-50">
                  <Package className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Confirmación</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs font-semibold mb-1">Ayuda</p>
                <p className="text-xs text-muted-foreground">
                  ¿Dudas con tu entrega? Estamos aquí para ayudarte.
                </p>
              </div>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-1">Entrega</h1>
              <p className="text-sm text-muted-foreground">
                Elige como quieres recibir tus productos.
              </p>
            </div>

            {/* Método de entrega */}
            <Card className="p-4 mb-4">
              <h2 className="text-base font-semibold mb-3">Método de entrega</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setDeliveryMethod("home")}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    deliveryMethod === "home"
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Envío a domicilio</div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Entrega estimada: 2-4 días
                      </div>
                      {deliveryMethod === "home" && (
                        <div className="text-xs text-accent font-medium">Recomendado</div>
                      )}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setDeliveryMethod("store")}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    deliveryMethod === "store"
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Store className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Recojo en tienda</div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Listo en 24-48 horas
                      </div>
                      {deliveryMethod === "store" && (
                        <div className="text-xs text-accent font-medium">Gratis</div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            </Card>

            {/* Formulario de dirección o selección de tienda */}
            {deliveryMethod === "home" ? (
              <Card className="p-4 mb-4">
                <h2 className="text-base font-semibold mb-3">Dirección de entrega</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Nombre" />
                  </div>
                  <div>
                    <Input placeholder="Apellido" />
                  </div>
                  <div className="md:col-span-2">
                    <Input type="email" placeholder="Correo electrónico" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Teléfono" />
                  </div>
                  <div>
                    <Input placeholder="Empresa (opcional)" />
                  </div>
                  <div className="md:col-span-2">
                    <Input placeholder="Calle y número" />
                  </div>
                  <div>
                    <Input placeholder="Departamento / Piso / Referencia" />
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
                  <div className="md:col-span-2">
                    <Input placeholder="Indicaciones para el repartidor (opcional)" />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Package className="h-3 w-3" />
                  <span>Envío gratis en pedidos superiores a S/ 80.</span>
                </div>
              </Card>
            ) : (
              <Card className="p-4 mb-4">
                <h2 className="text-base font-semibold mb-3">Recoger en tienda</h2>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar tienda por ciudad o código postal"
                    value={searchStore}
                    onChange={(e) => setSearchStore(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button className="p-4 rounded-lg border border-border text-left hover:border-accent transition-colors">
                    <div className="flex items-start gap-3">
                      <Store className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Tienda Centro</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Av. Principal 123, Centro
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Retiro en 24h
                        </div>
                        <Button variant="link" className="h-auto p-0 text-accent mt-2">
                          Seleccionar
                        </Button>
                      </div>
                    </div>
                  </button>

                  <button className="p-4 rounded-lg border border-border text-left hover:border-accent transition-colors">
                    <div className="flex items-start gap-3">
                      <Store className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">Tienda Norte</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Calle Lago 45, Urb. Norte
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Retiro en 24-48h
                        </div>
                        <Button variant="link" className="h-auto p-0 text-accent mt-2">
                          Seleccionar
                        </Button>
                      </div>
                    </div>
                  </button>
                </div>
              </Card>
            )}

            {/* Botones de navegación */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="flex-1"
              >
                Volver al carrito
              </Button>
              <Button 
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => navigate("/payment")}
              >
                Continuar a Pago
              </Button>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-3">
            <Card className="p-4 sticky top-6">
              <h2 className="text-base font-semibold mb-4">Resumen del pedido</h2>

              <div className="space-y-3 mb-6">
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
                  <span className="font-medium text-xs">{orderSummary.shipping}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total estimado</span>
                  <span className="text-2xl font-bold">S/ {orderSummary.total.toFixed(2)}</span>
                </div>
              </div>

              {deliveryMethod === "home" && (
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <Zap className="h-5 w-5 text-secondary flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm mb-1">Express 24h</div>
                      <div className="text-xs text-muted-foreground mb-1">
                        Disponible en zonas seleccionadas
                      </div>
                    </div>
                    <div className="ml-auto font-semibold">S/ 9.90</div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
