import { saveStorage } from "./localStorage";
import {
  ADD_TO_CART,
  EMPTY_CART,
  ORDER_STATUS,
  REMOVE_FROM_CART,
  SET_DATA,
  UPDATE_CART,
} from "./consts";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_DATA: {
      const { products } = action.payload;

      return { ...state, products };
    }
    case ORDER_STATUS: {
      const { orderStatus } = action.payload;

      return { ...state, orderStatus };
    }
    case ADD_TO_CART: {
      const cartProductList = [
        ...state.cartProductList,
        action.payload.product,
      ];

      saveStorage("cart", cartProductList);

      return { ...state, cartProductList };
    }
    case UPDATE_CART: {
      const { _id, amount } = action.payload;
      const cartProductList = [...state.cartProductList];
      const productIndex = cartProductList.findIndex(
        (item) => item._id === _id
      );

      cartProductList[productIndex].amount = amount;

      saveStorage("cart", cartProductList);

      return { ...state, cartProductList };
    }
    case REMOVE_FROM_CART: {
      const { itemID } = action.payload;
      const cartProductList = state.cartProductList.filter(
        (item) => item._id !== itemID
      );

      saveStorage("cart", cartProductList);

      return { ...state, cartProductList };
    }
    case EMPTY_CART: {
      const cartProductList = [];

      saveStorage("cart", cartProductList);

      return { ...state, cartProductList };
    }
    default:
      throw new Error("Unknown action");
  }
}
