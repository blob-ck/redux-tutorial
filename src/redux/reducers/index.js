import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";

//각 state에 해당하는 reducer의 결과가 초기화된다.
export const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});
