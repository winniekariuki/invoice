import {
    GET_TOP_CUSTOMERS_SUCCESS,
    GET_TOP_CUSTOMERS_REQUEST,
    GET_TOP_CUSTOMERS_FAILURE
} from "../actions/types";

export const initialState = {customers :[]};

export default function getTopCustomers(state = {}, action) {
    switch (action.type) {
    case GET_TOP_CUSTOMERS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case   GET_TOP_CUSTOMERS_FAILURE:
        return {
          ...state,
          message: action.errors,
          loading: false
        };
        case  GET_TOP_CUSTOMERS_SUCCESS:
        return {
            ...state,
          customers: action.data,
          loading: false
        };
    default:
      return state;

  }
 
}
