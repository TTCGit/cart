import { Minus, Plus } from "lucide-react";
import { useCartContextContainer } from "../../context/CartContext";

const CartItem = () => {
  const { cart, handleInc, handleDec, handleDelete } =
    useCartContextContainer();
  return (
    <div className="mt-8 w-full flex flex-col gap-8">
      {cart.map((cartItem) => {
        const { id, title, price, img, amount } = cartItem;

        return (
          <div
            className="flex justify-between items-center"
            key={id}>
            <div className="flex items-center gap-4">
              <img
                src={img}
                alt={title}
                width={120}
              />
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>${price}</p>
                <button
                  className="text-sm text-purple-600/50"
                  onClick={() => handleDelete(cartItem)}>
                  remove
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                className="stepper"
                onClick={() => handleInc(cartItem)}>
                <Plus
                  size={18}
                  strokeWidth={3}
                />
              </button>
              <span>{amount}</span>
              <button
                className="stepper"
                onClick={() => handleDec(cartItem)}>
                <Minus
                  size={18}
                  strokeWidth={3}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
