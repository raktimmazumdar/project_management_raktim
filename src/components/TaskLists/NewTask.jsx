import React from "react";

export const NewTask = ({ data }) => {
  return (
    <div className="bg-blue-500 text-white font-bold text-xl p-5 rounded-xl flex flex-col items-center shrink-0 h-full w-75">
      <h1>{data.category}</h1>
      <h2>{data.taskTitle}</h2>
      <h2 className="font-light bg-blue-400 p-5 rounded-xl mt-2">
        {data.taskDescription}
      </h2>
    </div>
  );
};
