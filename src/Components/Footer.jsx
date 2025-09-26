import React from "react";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-[80%] mx-auto grid  grid-cols-1 md:grid-cols-5 gap-2 mt-2 py-20  ">
        <div className="text-white space-y-2 text-center md:text-left">
          <h1>CS — Ticket System</h1>
          <p className="text-[10px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="text-white space-y-2 md:ml-10 text-center md:text-left">
          <h2>Company</h2>
          <p className="text-[10px]">About Us</p>
          <p className="text-[10px]">Our Mission</p>
          <p className="text-[10px]">Contact Saled</p>
        </div>
        <div className="text-white space-y-2 text-center md:text-left">
          <h2>Services</h2>
          <p className="text-[10px]">Products & Services</p>
          <p className="text-[10px]">Customer Stories</p>
          <p className="text-[10px]">Download Apps</p>
        </div>
        <div className="text-white space-y-2 text-center md:text-left">
          <h2>Information</h2>

          <p className="text-[10px]">Privacy Policy</p>
          <p className="text-[10px]">Terms & Conditions</p>
          <p className="text-[10px]">Join Us</p>
        </div>
        <div className="text-white space-y-2 text-center md:text-left">
          <h2>Social Links</h2>
          <div className="flex items-center ">
            <img src="https://i.ibb.co.com/JWdx4RYV/fi-5969020.png" alt="" className="w-[12px] h-[12px] ml-23 md:ml-0"/>
            <p className="text-[10px] ml-1"> @CS — Ticket System</p>
          </div>
          <div className="flex items-center">
            <img src="https://i.ibb.co.com/BHy55cFV/fi-145807.png" alt="" className="w-[12px] h-[12px] ml-23 md:ml-0" />
            <p className="text-[10px] ml-1"> @CS — Ticket System</p>
          </div>
          <div className="flex items-center">
            <img src="https://i.ibb.co.com/h1rJ5bRT/fi-5968764.png" alt="" className="w-[12px] h-[12px] ml-23 md:ml-0"/>
            <p className="text-[10px] ml-1"> @CS — Ticket System</p>
          </div>
          <div className="flex items-center">
            <img src="https://i.ibb.co.com/2rnyJP1/fi-6244710.png" alt=""  className="bg-black w-[12px] h-[12px] ml-23 md:ml-0"/>
            <p className="text-[10px] ml-1 "> @CS — Ticket System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
