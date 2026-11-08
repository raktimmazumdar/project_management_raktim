import { AcceptTask } from "./AcceptTask";
import { CompleteTask } from "./CompleteTask";
import { NewTask } from "./NewTask";
import { FailedTask } from "./FailedTask";

export const TaskList = ({ data }) => {
  // console.log(data);

  return (
    <div id="currTaskList" className="flex gap-4 p-4 mt-14 bg-slate-700">
      {data?.tasks?.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} data={task} />;
        }
        if (task.newTask) {
          return <NewTask key={index} data={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={index} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={index} data={task} />;
        }
        return null;
      })}
    </div>
  );
};
