import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, CreditCard, Package, CheckCircle2, Truck, Calendar, Home, Store } from "lucide-react";

const Confirmation = () => {
  const navigate = useNavigate();

  const orderDetails = {
    orderNumber: "PEC-2024-001234",
    orderDate: new Date().toLocaleDateString('es-PE', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }),
    estimatedDelivery: "2-4 días hábiles",
    items: 4,
    subtotal: 198.70,
    shipping: 15.00,
    taxes: 12.40,
    total: 226.10,
    deliveryMethod: "Envío a domicilio",
    deliveryAddress: "Av. Principal 123, Dpto. 4B, Lima",
    paymentMethod: "Visa •••• 4242",
  };

  const products = [
    {
      id: 1,
      name: "Camiseta Premium",
      size: "M",
      color: "Negro",
      quantity: 2,
      price: 49.90,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Pantalón Casual",
      size: "32",
      color: "Azul",
      quantity: 1,
      price: 79.90,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Zapatillas Deportivas",
      size: "42",
      color: "Blanco",
      quantity: 1,
      price: 149.90,
      image: "/placeholder.svg"
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
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">Entrega</span>
                </div>
                
                <div className="flex items-center gap-2 p-2 rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">Pago</span>
                </div>
                
                <div className="flex items-center gap-2 p-2 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <Package className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-accent">Confirmación</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs font-semibold mb-1">Ayuda</p>
                <p className="text-xs text-muted-foreground">
                  ¿Dudas con tu pedido? Contáctanos.
                </p>
              </div>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-6">
            {/* Mensaje de éxito */}
            <Card className="p-6 mb-4 bg-accent/5 border-accent">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-1">¡Pedido confirmado!</h1>
                  <p className="text-sm text-muted-foreground mb-3">
                    Gracias por tu compra. Te hemos enviado un correo con los detalles.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Número de pedido: </span>
                      <span className="font-semibold">{orderDetails.orderNumber}</span>
                    </div>
                    <div className="h-4 w-px bg-border"></div>
                    <div>
                      <span className="text-muted-foreground">Fecha: </span>
                      <span className="font-medium">{orderDetails.orderDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Información de entrega */}
            <Card className="p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="h-5 w-5 text-accent" />
                <h2 className="text-base font-semibold">Información de entrega</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Método de entrega</p>
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <p className="text-sm font-medium">{orderDetails.deliveryMethod}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Entrega estimada</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <p className="text-sm font-medium">{orderDetails.estimatedDelivery}</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs text-muted-foreground mb-1">Dirección</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium">{orderDetails.deliveryAddress}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Método de pago */}
            <Card className="p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="h-5 w-5 text-accent" />
                <h2 className="text-base font-semibold">Método de pago</h2>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Pagado con</p>
                <p className="text-sm font-medium">{orderDetails.paymentMethod}</p>
              </div>
            </Card>

            {/* Productos */}
            <Card className="p-4 mb-4">
              <h2 className="text-base font-semibold mb-3">Productos</h2>
              
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.id} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md bg-muted"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium truncate">{product.name}</h3>
                      <div className="flex gap-2 text-xs text-muted-foreground mt-0.5">
                        <span>Talla: {product.size}</span>
                        <span>•</span>
                        <span>{product.color}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Cantidad: {product.quantity}
                      </p>
                    </div>
                    <div className="text-sm font-semibold">
                      S/ {product.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Botones de acción */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="flex-1"
              >
                Seguir comprando
              </Button>
              <Button 
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => navigate("/")}
              >
                Ver mis pedidos
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
                  <span className="font-medium">{orderDetails.items}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">S/ {orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="font-medium">S/ {orderDetails.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Impuestos</span>
                  <span className="font-medium">S/ {orderDetails.taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-border mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold">Total</span>
                  <span className="text-xl font-bold text-accent">S/ {orderDetails.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold mb-0.5">Pago confirmado</p>
                    <p className="text-xs text-muted-foreground">
                      Recibirás actualizaciones por correo
                    </p>
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

export default Confirmation;
