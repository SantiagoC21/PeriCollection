import { Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary">
                <span className="text-sm font-semibold">G</span>
              </div>
              <span className="text-lg font-light tracking-wider">PERI-COLLECTION</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-secondary transition-colors">
                CATÁLOGO
              </a>
              <a href="#" className="text-sm font-medium hover:text-secondary transition-colors">
                MUJER
              </a>
              <a href="#" className="text-sm font-medium hover:text-secondary transition-colors">
                HOMBRE
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-[10px] font-semibold text-secondary-foreground flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
