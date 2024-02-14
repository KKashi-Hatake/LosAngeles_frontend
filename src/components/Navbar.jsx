import React from "react";
import img from "../assets/mountain2.jpg";

const Navbar = () => {
  return (
    <nav className="h-32 md:h-16 w-full flex flex-col md:flex-row ">
      <section className="flex h-1/2 md:h-full w-full md:w-1/2 justify-center md:justify-center items-center p-2  space-x-1 md:space-x-0">
        <div className="h-full w-12  border-2 border-gray-400 rounded-[50%] ">
          <img className="h-full rounded-[50%]  " src={img} alt="" />
        </div>
        <p className="font-bold text-wrap uppercase w-[35%] h-full text-xl tracking-widest leading-none text-[#323e50d8] p-[0.35rem]">
          LOSANGELES{" "}
          <span className="tracking-[0.16em] text-[#2f3761]">MOUNTAINS</span>
        </p>
      </section>
      <section className="flex h-1/2 md:h-full w-full md:w-1/2 justify-center items-center md:p-2  ">
        <div className=" w-full md:w-1/2 h-full flex  text-xs md:text-base lg:text-xl font-bold justify-evenly items-center md:space-x-10 uppercase italic  tracking-widest text-[#2f3761] ">
          <div className="cursor-pointer   ">
            <p className="leading-none">01. History</p>
            <hr className="h-1 w-[5rem] md:w-[7.75rem] bg-[#2f3761] mt-1" />
          </div>
          <div className="cursor-pointer  ">
            <p className="leading-none">02. Team</p>
            <hr className="h-1 w-[4.25rem] md:w-[6.5rem] bg-[#2f3761] mt-1" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;


