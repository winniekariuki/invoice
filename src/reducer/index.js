
import { combineReducers } from 'redux';
import customers from './getCustomers';
import totalAmount from './getTotalAmount';


const rootReducer = combineReducers({
    customers,
    totalAmount,
 
});
export default rootReducer;

