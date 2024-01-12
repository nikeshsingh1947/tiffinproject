import { legacy_createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import  handleReducer  from "./reducer";
import OrderReducer from "./OrderRedux/reducer";
import { AuthReducer } from "./AuthRedux/reducer";
import { AdminAuthReducer } from "./adminredux/reducer";
const rootReducer = combineReducers({ imageData: handleReducer,userData:AuthReducer,orderData:OrderReducer ,admindata:AdminAuthReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
