import React from "react";

export const AcceptTask = ({ data }) => {
  // console.log(data);

  return (
    <div className="bg-yellow-400 text-black font-bold text-xl p-5 rounded-xl flex flex-col items-center shrink-0 h-full w-75">
      <h1>{data.category}</h1>
      <h2>{data.taskTitle}</h2>
      <h2 className="font-light bg-amber-200 p-5 rounded-xl mt-2">
        {data.taskDescription}
      </h2>
    </div>
  );
};
