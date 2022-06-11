import { employeesType } from "../contants/employeesType";

const allEmployees = [];

export const SetEmployeesReducer = (
  state = allEmployees,
  { type, payload }
) => {
  switch (type) {
    case employeesType.SET_EMPLOYEES:
      return [...payload];

    default:
      return state;
  }
};
