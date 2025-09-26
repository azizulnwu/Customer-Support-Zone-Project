import React from "react";

const Taskstatus = ({
  setTaskStatus,
  taskStatus,
  progress,
  setProgress,
  completeValue,
  setcompleteValue,
  resolvedTask,
  setresolvedTask,
  setpromiseValuestate,
  promiseValuestate,
}) => {
  const completeHandeler = (id, taskStatusValueParameter) => {
    alert("Complete");
    if (progress === 0) {
      return;
    }
    if (progress > 0) {
      const newProgressValue = progress - 1;
      setProgress(newProgressValue);
    }

    const newCompleteValue = completeValue + 1;
    setcompleteValue(newCompleteValue);
    const newTaskArryValue = taskStatus.filter(
      (arryValue) => arryValue.id !== id
    );

    setTaskStatus(newTaskArryValue);

    const newResolvedTaskArry = [...resolvedTask, taskStatusValueParameter];
    setresolvedTask(newResolvedTaskArry);

    const newpromiseValuestate = promiseValuestate.filter(
      (value) => value.id !== id
    );

    setpromiseValuestate(newpromiseValuestate);
  };

  console.log(taskStatus);
  return (
    <div className="max-w-full">
      <div className="mb-4">
        <h1 className="font-bold text-lg">Task Status</h1>
        <p className="text-[10px]">{taskStatus.length===0?"Select a ticket to add to Task Status":""}</p>
      </div>

      {taskStatus.map((taskStatusValue) => (
        <div className="bg-white mb-2 p-2">
          <h1 className="font-bold mb-2">{taskStatusValue.title}</h1>
          <button
            onClick={() =>
              completeHandeler(taskStatusValue.id, taskStatusValue)
            }
            className="btn text-white cursor-pointer bg-[#02A53B] w-[100%]"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Taskstatus;
