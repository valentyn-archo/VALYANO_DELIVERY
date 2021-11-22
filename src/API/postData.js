import axios from "axios";
import { API_URL } from "utils/consts";

export default async function postData(url, data) {
  return await axios.post(API_URL + url, {
    orderList: data.cartProductList,
    totalPrice: data.totalPrice,
  });
}
