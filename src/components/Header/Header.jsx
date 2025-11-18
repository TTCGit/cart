import { ShoppingCart } from "lucide-react";
import { useCartContextContainer } from "../../context/CartContext";

const Header = () => {
  const { totalAmount } = useCartContextContainer();

  return (
    <div className="flex justify-between items-center py-8 px-12 bg-white shadow-lg mt-6">
      <h2>useReducer</h2>
      <div className="relative">
        <ShoppingCart className="w-10 h-10" />
        <span className="absolute -top-2 -right-2 bg-purple-400 text-white rounded-full w-7 h-7 flex items-center justify-center">
          {totalAmount}
        </span>
      </div>
    </div>
  );
};

export default Header;
