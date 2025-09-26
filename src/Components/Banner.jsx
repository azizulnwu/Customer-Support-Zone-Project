import React from "react";
import BgimageOne from "../assets/vector1.png";
import BgimageTwo from "../assets/vector2.png";
const Banner = ({progress,completeValue}) => {
  return (
    <div className="flex justify-between gap-6 max-w-[80%] mx-auto mt-7">
      <div className="w-[50%]    h-[200px] rounded-2xl  text-white flex items-center justify-center flex-col bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
      >
 
        {/* <img src={BgimageOne} alt="" className="object-right -z-10 "/> */}
         <h1>In-Progress</h1>
        <p>{progress}</p>
          
    
      
      </div>
      <div className="w-[50%] bg-[linear-gradient(90deg,rgba(84,207,104,1),rgba(0,130,122,1)_100%)]  h-[200px] rounded-2xl flex items-center justify-center flex-col text-white">
        <h1>Resolved</h1>
        <p>{completeValue}</p>
      </div>
    </div>
  );
};

export default Banner;
