import { useCartContextContainer } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartContainer = () => {
  const { clearCart, totalCart } = useCartContextContainer();

  return (
    <div className="flex flex-col gap-8 py-20 px-12 md:max-w-4xl mx-auto">
      <h2 className="my-6 text-center text-4xl uppercase">Your cart</h2>
      <CartItem />
      <div className="flex justify-between items-center mt-8 pt-8 border-t border-purple-600">
        <div className="text-2xl flex gap-4 items-center">
          <h3>Total:</h3> <span>${totalCart.toFixed(2)}</span>
        </div>
        <button
          className="px-4 py-2 rounded-lg bg-purple-600 text-white uppercase font-semibold transition-all duration-200 hover:bg-purple-700"
          onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
