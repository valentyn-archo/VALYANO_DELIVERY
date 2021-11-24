import axios from "axios";
import { API_URL } from "utils/consts";

export default async function postData(data) {
  const body = {
    query: `
      mutation Mutation($orderInput: OrderInput!) {
        createNewOrder(orderInput: $orderInput) {
          _id
          date
          orderList {
            popular
            _id
            category
            imgUrl
            name
            price
            discounts
          }
          totalPrice
        }
      }`,
    variables: {
      orderInput: {
        orderList: data.cartProductList,
        totalPrice: parseFloat(data.totalPrice)
      }
    }
  }

  return await axios({
    url: API_URL,
    method: 'post',
    data: body
  }).then((response) => {
    return response;
});;
}
