import { combineReducers } from "redux";
import { authReducer } from "./Auth/auth-reducer";

import shoppingReducer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
  auth:authReducer
});

export default rootReducer;
