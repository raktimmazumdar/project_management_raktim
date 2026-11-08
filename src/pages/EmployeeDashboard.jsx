import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { setLocalStorage } from "../utilities/LocalStorage";
import { TaskList } from "../components/TaskLists/TaskList";

export const EmployeeDashboard = ({ props }) => {
  const { loggedInUser } = useContext(AuthContext);
  // setLocalStorage();
  // console.log(userData);

  console.log("logged in users:", loggedInUser?.data);
  return (
    <div id="admin" className="p-4">
      <h1>
        Hello <br />{" "}
        <span className="font-bold text-2xl">
          {loggedInUser?.data?.firstName} 🙍🏻‍♂️
        </span>
      </h1>

      {/* task summary  */}
      <div
        id="taskSummary"
        className="flex gap-4 p-4 mt-4 rounded-xl 
        bg-slate-700 overflow-x-auto scrollbar-none "
      >
        <div
          id="newTask"
          className="h-30 w-36 bg-blue-400 p-4
        flex items-center justify-center font-bold rounded-2xl shrink-0 text-white"
        >
          New: {loggedInUser?.data?.taskCounts.newTask}
        </div>
        <div
          id="newTask"
          className="h-30 w-36 bg-green-600 p-4
        flex items-center justify-center font-bold rounded-2xl shrink-0"
        >
          Completed: {loggedInUser?.data?.taskCounts.completed}
        </div>
        <div
          id="newTask"
          className="h-30 w-36 bg-yellow-300 p-4
        flex items-center justify-center font-bold rounded-2xl shrink-0 text-black"
        >
          Accepted: {loggedInUser?.data?.taskCounts.active}
        </div>
        <div
          id="newTask"
          className="h-30 w-36 bg-red-500 p-4
        flex items-center justify-center font-bold rounded-2xl shrink-0"
        >
          Failed: {loggedInUser?.data?.taskCounts.failed}
        </div>
      </div>
      {/* current task list  */}
      <TaskList data={loggedInUser?.data} />
    </div>
  );
};
