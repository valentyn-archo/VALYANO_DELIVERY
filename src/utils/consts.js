export const API_URL =
  process.env.REACT_APP_SERVER_URL || "http://localhost:4000/graphql/";
export const CDN_URL =
  process.env.REACT_APP_SERVER_URL + "/static/good-fast-food";

export const GET_DATA = "get-data";
export const POST_DATA = "post-data";
export const SET_DATA = "set-data";
export const ADD_TO_CART = "add-to-cart";
export const UPDATE_CART = "update-cart";
export const REMOVE_FROM_CART = "remove-cart";
export const EMPTY_CART = "empty-cart";
export const ORDER_STATUS = "order-status";

export const LINK_HOME = "/";
export const LINK_CART = "/cart";
export const LINK_CATEGORY = "/category/";
export const LINK_FILTER = "/filter/";
export const LINK_PAGE = "/category/:page";
export const LINK_DISCOUNTS = "discounts";
export const LINK_POPULAR = "popular";
export const LINK_ALL_PRODUCTS = "/products";
export const LINK_NEW_ORDER = "/new-order";
