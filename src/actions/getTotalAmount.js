import { GET_TOTAL_AMOUNT_SUCCESS,GET_TOTAL_AMOUNT_REQUEST, GET_TOTAL_AMOUNT_FAILURE } from "./types";
import axios from 'axios';

export const getTotalAmountRequest = () => ({
    type: GET_TOTAL_AMOUNT_REQUEST
});

export const getTotalAmountSuccess = data => ({
  type:  GET_TOTAL_AMOUNT_SUCCESS,
  data
});
export const getTotalAmountFailure = error => ({
  type: GET_TOTAL_AMOUNT_FAILURE,
  payload: error
});


  
const getTotalAmount= (cartId) => dispatch => {
    dispatch(getTotalAmountRequest());
      const url = `http://www.mocky.io/v2/5e3f0e723300005e008b0afc`;
    return axios.get(url)
      .then(response => dispatch(getTotalAmountSuccess(response.data)))
      .catch(error => dispatch(getTotalAmountFailure(error)))
  }


export default getTotalAmount;
