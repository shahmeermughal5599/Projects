import { combineReducers, createStore } from "redux";
import CounterReducer from "./duck/counter";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  counter: CounterReducer,
});

export default createStore(reducer, composeWithDevTools());
