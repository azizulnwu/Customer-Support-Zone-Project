import React, { use, useState } from "react";
import CardDiv from "./CardDiv";
import Taskstatus from "../Taskstatus";
import Resolvedtask from "../Resolvedtask";

const Mainbody = ({ newPromise,setProgress,progress,taskStatus,setTaskStatus,completeValue,setcompleteValue,resolvedTask,setresolvedTask }) => {
  const promiseValue = use(newPromise);
 const [promiseValuestate,setpromiseValuestate]=useState(promiseValue )
  return (
    <div>
      <div
        className="bg-[#43ff64d9
] flex justify-between  md:max-w-[80%] mx-auto mb-5 flex-col md:flex-row "
      >
        <div className="pt-10">
          <div>
            <h1 className="font-bold text-lg mb-2">Customer Tickets</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 ">
            {promiseValuestate.map((promiseData) => (
              <CardDiv progress={progress} setProgress={setProgress} key={promiseData.id} promiseData={promiseData} 
              setTaskStatus={setTaskStatus}
              taskStatus={taskStatus}
             
              />
            ))}
          </div>
        </div>

        <div className="md:w-[25%] mt-10">
          <Taskstatus 
          setProgress={setProgress}
          progress={progress}
          taskStatus={taskStatus}
          completeValue={completeValue}
          setcompleteValue={setcompleteValue}
          setTaskStatus={setTaskStatus}
          setresolvedTask={setresolvedTask}
          resolvedTask={resolvedTask}
          promiseValuestate={promiseValuestate}
          setpromiseValuestate={setpromiseValuestate}
          />
          <Resolvedtask resolvedTask={resolvedTask}/>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
