import React from "react";

const CardDiv = ({ promiseData,setProgress,progress,taskStatus,setTaskStatus}) => {
 
const divHandeler=(cardData)=>{

   alert("In Progress")
   let inProgressValue= progress+1;
   setProgress(inProgressValue)
   console.log(cardData)
   const taskstatusArr=[...taskStatus,cardData]
   setTaskStatus(taskstatusArr)



}

  return (
   <>
  
     <div onClick={()=>divHandeler(promiseData)}  className="bg-white p-10">
            <div className="flex justify-between gap-4  flex-col md:flex-row ">
              <h1 className="font-bold">{promiseData.title}</h1>
              <div className="bg-green-400 flex items-center rounded-full px-1">
                <img src="https://i.ibb.co.com/wh5rxbKg/Ellipse-22.png" alt="" className="mr-1 ml-20 md:ml-0"/>
                <span>
                  open
                </span>
              </div>
            </div>
            <p className="text-[10px] my-2 text-gray-400">{promiseData.description}</p>

            <div  className="flex justify-between gap-2 items-center mt-1">
              <div className="flex items-center justify-between gap-2">
              <p className="text-gray-400">#{promiseData.id}</p>
              <p className="text-sm">{promiseData.priority}</p>

              </div>
              <div className="flex items-center justify-between gap-2"> 
                <p className="text-gray-400">{promiseData.custome}</p>
                <div className="flex items-center">
                 <img src="https://i.ibb.co.com/gbvN1pGX/ri-calendar-line.png" alt="" className=" w-[10px] h-[10px]"/>
                <p className="ml-1 text-gray-400">{promiseData.createdAt}</p>
                </div>
              </div>
            </div>
          </div>

   </>
       
    
  );
};

export default CardDiv;
