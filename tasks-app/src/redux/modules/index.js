import { combineReducers } from "redux";
import backLogsReducer from "./backLogs";

export default combineReducers({
  backLogs: backLogsReducer
});
