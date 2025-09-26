import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Mainbody from "./Components/Mainbody/Mainbody";
import Navber from "./Components/Navber";

const getPromise=async()=>{
const res=await fetch("/JsonData.json");
return res.json()
}
const newPromise=getPromise()
console.log(newPromise)


function App() {
const [progress,setProgress]=useState(0)
const [taskStatus,setTaskStatus]=useState([])
const [completeValue,setcompleteValue]=useState(0)
const [resolvedTask,setresolvedTask]=useState([])

  return (
    <div className="bg-gray-200">
      {/* heared section */}

      <Navber />

      {/* banner section */}

      <Banner progress={progress} completeValue={completeValue}/>

      {/* body section */}
      <Suspense fallback={"Loading......."}>
        <Mainbody progress={progress} setProgress={setProgress} newPromise={newPromise}
        taskStatus={taskStatus}
        setTaskStatus={setTaskStatus}
        completeValue={completeValue}
        setcompleteValue={setcompleteValue}
        resolvedTask={resolvedTask}
        setresolvedTask={setresolvedTask}
        
        />
      </Suspense>
      

      {/* footer section */}

      <Footer />
    </div>
  );
}

export default App;
