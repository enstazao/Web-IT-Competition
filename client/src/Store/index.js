import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import AuthReducer from "./Reducers/AuthReducer";
import { addProfileReducer } from "./Reducers/ProfileReducer";

const rootReducers = combineReducers({
  AuthReducer,
  addProfileReducer
});

const middlewares = [thunkMiddleware];
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;
