import {
    GET_TOTAL_AMOUNT_SUCCESS,
    GET_TOTAL_AMOUNT_REQUEST,
    GET_TOTAL_AMOUNT_FAILURE
} from "../actions/types";

export const initialState = {totalAmount:[]};

export default function getTotalAmount(state = {}, action) {
    switch (action.type) {
    case GET_TOTAL_AMOUNT_REQUEST:
        return {
          ...state,
          loading: true
        };
      case   GET_TOTAL_AMOUNT_FAILURE:
        return {
          ...state,
          message: action.errors,
          loading: false
        };
        case  GET_TOTAL_AMOUNT_SUCCESS:
        return {
            ...state,
          totalAmount: action.data,
          loading: false
        };
    default:
      return state;

  }
 
}
