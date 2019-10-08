import { combineReducers } from "redux";
import errors from "./errors";
import messages from "./message";

export default combineReducers({
  errors,
  messages
});
