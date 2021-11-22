import axios from "axios";
import { API_URL } from "utils/consts";

export default async function getData() {
  const data = await axios({
    url: API_URL,
    method: 'post',
    data: {
      query: `
        query {
          getProducts {
            _id
            category
            name
            imgUrl
            price
            discounts
            popular
          }
      }
        `
    }
  }).then((result) => {
      return result.data.data.getProducts;
  });

  return data;
}
