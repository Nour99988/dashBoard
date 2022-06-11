import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../../redux/action/employeesAction";

const Home = () => {
  const dispatch = useDispatch();
  const employeesFromRed = useSelector((state) => state.allEmployees);
  const fetchEmployees = async () => {
    await axios
      .get("https://immense-shelf-33121.herokuapp.com/v1/users")
      .then((res) => dispatch(setEmployees(res.data)))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
  const employees = employeesFromRed.filter((emp) => emp.isEmployee === true);
  const inters = employeesFromRed.filter((inters) => inters.isIntern === true);
  console.log("emp", employees);
  console.log("int", inters);

  return <div>Home</div>;
};

export default Home;
