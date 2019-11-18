import { combineReducers } from "redux";
import backLogsReducer from "./backLogs";
import inProgressReducer from "./inProgress"

export default combineReducers({
  backLogs: backLogsReducer,
  inProgress: inProgressReducer
});
