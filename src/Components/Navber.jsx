import React from "react";

const Navber = () => {
  return (
    <div className=" bg-white">
      <div className="md:max-w-[80%] mx-auto ">
        <div className="navbar flex justify-between items-center flex-col md:flex-row">
          <div className="">
            <a className="font-bold text-xl">CS — Ticket System</a>
          </div>
          <div className="ml-9 md:ml-0">
            <a href="#" className="font-bold mr-3 text-sm">
              Home
            </a>
            <a href="#" className="font-bold mr-3 text-sm">
              FAQ
            </a>
            <a href="#" className="font-bold mr-3 text-sm">
              Changelog
            </a>
            <a href="#" className="font-bold mr-3 text-sm">
              Blog
            </a>
            <a href="#" className="font-bold mr-3 ">
              Download
            </a>
            <a href="#" className="font-bold mr-10">
              Contact
            </a>
            <button className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white ml-35 md:mb-0 md:ml-0">
              <span>+</span>New Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
