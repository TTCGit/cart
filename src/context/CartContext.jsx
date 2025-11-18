import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import cartItems from "../data/data";
import reducer from "../reducer/reducer";
const CartContextContainer = createContext();
const url = "https://www.course-api.com/react-useReducer-cart-project";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "../actions/actions";
import { getTotals } from "../utils/utils";

export const useCartContextContainer = () => useContext(CartContextContainer);

const initialState = {
  loading: false,
  cart: new Map(),
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const handleDelete = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };

  const handleInc = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };
  const handleDec = (id) => {
    dispatch({ type: DECREASE, payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });

    const res = await fetch(url);
    const cart = await res.json();

    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    console.log(cart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContextContainer.Provider
      value={{
        ...state,
        clearCart,
        handleDelete,
        handleDec,
        handleInc,
        totalAmount,
        totalCost,
      }}>
      {children}
    </CartContextContainer.Provider>
  );
};

export default CartContext;
