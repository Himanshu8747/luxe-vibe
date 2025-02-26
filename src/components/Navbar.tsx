import { ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-playfair font-medium">
          LuxeVibe
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <Link to="/new-in" className="hover:text-gray-500 transition-colors">NEW IN</Link>
          <Link to="/women" className="hover:text-gray-500 transition-colors">WOMEN</Link>
          <Link to="/men" className="hover:text-gray-500 transition-colors">MEN</Link>
          <Link to="/accessories" className="hover:text-gray-500 transition-colors">ACCESSORIES</Link>
          <Link to="/collections" className="hover:text-gray-500 transition-colors">COLLECTIONS</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:text-gray-500">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-gray-500">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};