import { combineReducers } from "redux";
import { SetEmployeesReducer } from "./employeesReducer";

const reducer = combineReducers({
  allEmployees: SetEmployeesReducer,
});

export default reducer;
