import {combineReducers} from 'redux';
import counterReducer from "./counterReducer";
import welcomeReducer from "./welcomeReducer";

const rootReducer = combineReducers({
  counterRdc: counterReducer(),
  welcomeRdc: welcomeReducer,
});


export default rootReducer;

// // var store = Redux.createStore(counterReducer);
