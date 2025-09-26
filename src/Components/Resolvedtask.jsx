import React from 'react';

const Resolvedtask = ({resolvedTask}) => {
  return (
    <div>
       <div className='mt-2'>
            <h1 className="font-bold text-lg">Resolved Task</h1>
            <p className="text-[10px]">{resolvedTask.length === 0?"No resolved tasks yet.":""}</p>
          </div>

          {resolvedTask.map((resolvedTaskValue) => (
        <div className="bg-green-200 w-[100%]">
          <h4 className="font-semibold  mb-2 p-1">{resolvedTaskValue.title}</h4>
          
        </div>
      ))}


    </div>
  );
};

export default Resolvedtask;