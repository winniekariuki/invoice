import { GET_TOP_CUSTOMERS_SUCCESS,GET_TOP_CUSTOMERS_REQUEST, GET_TOP_CUSTOMERS_FAILURE } from "./types";
import axios from 'axios';

export const getTopCustomersRequest = () => ({
    type: GET_TOP_CUSTOMERS_REQUEST
});

export const getTopCustomersSuccess = data => ({
  type:  GET_TOP_CUSTOMERS_SUCCESS,
  data
});
export const getTopCustomersFailure = error => ({
  type: GET_TOP_CUSTOMERS_FAILURE,
  payload: error
});


  
const getTopCustomers= (cartId) => dispatch => {
    dispatch(getTopCustomersRequest());
      const url = `http://www.mocky.io/v2/5e3f6bd43300004200b04be5`;
    return axios(url)
        .then(response => {
         dispatch(getTopCustomersSuccess(response.data))
        })
      .catch(error => dispatch(getTopCustomersFailure(error)))
  }


export default getTopCustomers;
