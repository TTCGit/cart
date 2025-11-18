import {
  CLEAR_CART,
  DECREASE,
  DISPLAY_ITEMS,
  INCREASE,
  LOADING,
  REMOVE,
} from "../actions/actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const cartItem = newCart.get(action.payload);

    newCart.set(action.payload, {
      ...cartItem,
      amount: cartItem.amount + 1,
    });

    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const cartItem = newCart.get(action.payload);

    if (cartItem.amount === 1) {
      newCart.delete(action.payload);
    } else {
      newCart.set(action.payload, {
        ...cartItem,
        amount: cartItem.amount - 1,
      });
    }

    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newCart };
  }

  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
