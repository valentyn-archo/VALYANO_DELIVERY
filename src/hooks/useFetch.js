import { useState } from "react";
import {
  EMPTY_CART,
  GET_DATA,
  ORDER_STATUS,
  POST_DATA,
  SET_DATA,
} from "utils/consts";
import getData from "API/getData";
import postData from "API/postData";

export default function useFetch(dispatch) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async (type, url, data) => {
    try {
      setLoading(true);

      if (type === GET_DATA) {
        const products = await getData();

        dispatch({ type: SET_DATA, payload: { products } });
      }

      if (type === POST_DATA) {
        const response = await postData(url, data);

        if (response.status === 200) {
          dispatch({ type: ORDER_STATUS, payload: { orderStatus: true } });
          dispatch({ type: EMPTY_CART });
        }
      }
    } catch (e) {
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { fetching, loading, error };
}
