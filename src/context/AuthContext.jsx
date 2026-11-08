import React, { useEffect, useState } from "react";
import { createContext } from "react";

import { getLocalStorage, setLocalStorage } from "../utilities/LocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // localStorage.clear();

  const [employees, setEmployees] = useState([]);
  const [admins, setAdmins] = useState([]);

  //finding and storing loged in user details
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    return savedUser ? savedUser : null;
  });

  useEffect(() => {
    const { employees, admins } = getLocalStorage();

    setEmployees(employees);
    setAdmins(admins);
  }, []);

  // log in function
  const login = (email, password) => {
    //search for admin
    const admin = admins?.find(
      (adm) => adm.email === email && adm.password === password,
    );

    //seting admin as current user
    if (admin) {
      const user = {
        role: "admin",
        data: admin,
      };
      setLoggedInUser(user);

      //saving in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      return user;
    }

    //search for employees
    const employee = employees?.find(
      (emp) => emp.email === email && emp.password === password,
    );

    if (employee) {
      const user = {
        role: "employee",
        data: employee,
      };
      setLoggedInUser(user);

      //saving in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      return user;
    }

    return null;
  };

  // logout Fuction
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  // *************** Add Task Function ***************

  const addTask = (empId, addTaskDesc) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === empId) {
        const newTask = {
          active: false,
          newTask: true,
          completed: false,
          failed: false,

          taskTitle: addTaskDesc.taskTitle,
          taskDescription: addTaskDesc.taskDescription,
          taskDate: addTaskDesc.taskDate,
          category: addTaskDesc.category,
        };

        return {
          ...emp,

          tasks: [...emp.tasks, newTask],

          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
          },
        };
      }
      return emp;
    });

    // updating the Employee List with new Task
    setEmployees(updatedEmployees);

    //updating local storage with the new employee task
    setLocalStorage(updatedEmployees, admins);
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          employees,
          admins,
          loggedInUser,
          login,
          logout,
          addTask,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
