import axios from "axios";
import { API_URL } from "utils/consts";

const foodCategories = ['pizza', 'salads', 'burgers', 'drinks', 'desserts'];
export default async function getData(category) {
  let data;

  if (foodCategories.includes(category)) {
    let body =  { 
      query: `
            query Query($category: String!) {
              getProductsByCategory(category: $category) {
                _id
                category
                name
                imgUrl
                price
                discounts
                popular
              }
            }
          `,
      variables: {category: category}
  }
    data = await axios({
      url: API_URL,
      method: 'post',
      data: body
    }).then((result) => {
        return result.data.data.getProductsByCategory;
    });
  } else if (category === 'discounts') {
    data = await axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
          query GetProductsWithDiscount {
            getProductsWithDiscount {
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
        return result.data.data.getProductsWithDiscount;
    });
  } else if (category === 'popular') {
    data = await axios({
      url: API_URL,
      method: 'post',
      data: {
        query: `
          query GetPopularProducts {
            getPopularProducts {
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
        return result.data.data.getPopularProducts;
    });
  } else {
    data = await axios({
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
  }

  return data;
}
