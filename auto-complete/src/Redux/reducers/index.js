import { combineReducers } from "redux";
import cityReducer from "./city";
import booksReducer from "./books"

export default combineReducers({
  cities: cityReducer,
  books:booksReducer
});
