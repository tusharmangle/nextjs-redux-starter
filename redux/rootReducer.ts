import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import  postReducer  from './post/postReducers';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  post: postReducer
});

export default rootReducer;
