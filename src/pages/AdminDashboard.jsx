import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const AdminDashboard = () => {
  const { admins, employees, loggedInUser, addTask } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignto, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = employees.find(
      (emp) => emp.firstName.toLowerCase() === assignto.toLowerCase(),
    );

    if (!employee) {
      alert("Employee not found");
      return;
    }

    //creating taskDetails for addTask function
    const taskDetails = {
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      category: category,
    };

    addTask(employee.id, taskDetails);

    console.log(taskDetails);
    // clearing inputs
    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div id="admin" className="p-4">
      <h1>
        Hello <br />{" "}
        <span className="font-bold text-2xl">
          {loggedInUser?.data?.firstName} 🙍🏻‍♂️
        </span>
      </h1>

      <div
        id="add_task"
        className="flex gap-4 justify-end bg-slate-700 p-4 mt-4 rounded-xl h-100"
      >
        <form
          action=""
          className="flex flex-col w-full"
          onSubmit={handleSubmit}
        >
          {/* // Task Title label and input */}
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Task Name"
            className="border border-amber-50 rounded-sm p-0.5"
          />
          {/* // Date label and input */}
          <label htmlFor="title" className="mt-2">
            Date
          </label>
          <input
            type="date"
            placeholder="Input Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="border border-amber-50 rounded-sm p-0.5"
          />
          {/* // Assign to label and input */}
          <label htmlFor="assignto" className="mt-2">
            Asign to
          </label>
          <input
            type="text"
            value={assignto}
            onChange={(e) => {
              setAssignTo(e.target.value);
            }}
            placeholder="Employee Name"
            className="border border-amber-50 rounded-sm p-0.5"
          />
          {/* // category label and input */}
          <label htmlFor="taskName" className="mt-2">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="design, dev, etc.."
            className="border border-amber-50 rounded-sm p-0.5"
          />
          {/* // Description label and input */}
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border border-white rounded-sm"
          ></textarea>
          {/* Submit Button */}
          <button
            id="createTask"
            type="submit"
            className="bg-green-600 p-1 mt-4 rounded-sm"
          >
            Create Task
          </button>
        </form>
      </div>

      <div
        id="taskList"
        className="flex flex-col gap-4 bg-slate-700 p-4 mt-4 rounded-xl h-100"
      >
        <div className="flex text-4xl font-bold">
          <div className="w-1/5 text-center text-amber-200">Name</div>
          <div className="w-1/5 text-center text-amber-200">Active Task</div>
          <div className="w-1/5 text-center text-amber-200">New Task</div>
          <div className="w-1/5 text-center text-amber-200">Completed Task</div>
          <div className="w-1/5 text-center text-amber-200">Failed Task</div>
        </div>
        <div className="flex flex-col overflow-y-auto scrollbar-none gap-4">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="flex justify-between text-center text-2xl border-2 border-amber-300 bg-stone-700 rounded-2xl"
            >
              <div className="p-4 w-1/5 font-bold">{emp.firstName}</div>
              <div className="p-4 w-1/5">{emp.taskCounts.active}</div>
              <div className="p-4 w-1/5">{emp.taskCounts.newTask}</div>
              <div className="p-4 w-1/5">{emp.taskCounts.completed}</div>
              <div className="p-4 w-1/5">{emp.taskCounts.failed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
