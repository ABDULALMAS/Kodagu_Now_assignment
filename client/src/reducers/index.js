import { combineReducers } from "redux";
import auth from "./auth"
import tasks from "./Task";
export default combineReducers({
   auth, tasks
})