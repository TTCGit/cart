import { createContext, useContext, useReducer, useState } from "react";
import cartItems from "../data/data";
import reducer from "../reducer/reducer";
const CartContextContainer = createContext();

export const useCartContextContainer = () => useContext(CartContextContainer);

const initialState = {
  loading: false,
  cart: new Map(),
};

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(cartItems);
  const totalItems = cart.reduce((sum, i) => sum + i.amount, 0);
  const totalCart = cart.reduce((sum, i) => sum + i.price * i.amount, 0);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInc = (cartItem) => {
    const arr = cart.map((item) =>
      item.title === cartItem.title
        ? { ...item, amount: item.amount + 1 }
        : item
    );

    setCart(arr);
  };

  const handleDec = (cartItem) => {
    const arr = cart
      .map((item) =>
        item.title === cartItem.title
          ? { ...item, amount: item.amount - 1 }
          : item
      )
      .filter((item) => item.amount > 0);

    setCart(arr);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleDelete = (cartItem) => {
    const arr = cart.filter((item) => item.title !== cartItem.title);
    setCart(arr);
  };

  return (
    <CartContextContainer.Provider
      value={{
        ...state,
      }}>
      {children}
    </CartContextContainer.Provider>
  );
};

export default CartContext;
