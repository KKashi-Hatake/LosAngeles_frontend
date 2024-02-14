import React from "react";
import img1 from "../assets/image5.jpg";

const Header = () => {
  return (
    <header className="h-[60vh] w-full  md:h-screen md:w-full">
      <div className="h-full w-full">
        <img
          className="bg-contain bg-center w-full h-full md:w-full md:h-screen"
          src={img1}
          alt=""
        />
        <h1 className="absolute top-1/4 left-[45%]    md:top-[40%] md:left-[45%] -translate-x-1/2 -translate-y-1/2 text-3xl md:text-[3rem] lg:text-[5rem] font-bold text-wrap uppercase w-2/5 tracking-widest leading-none text-[#323e50d8]">
          LOSANGELES{" "}
          <span className="tracking-[0.16em] text-[#2f3761]">MOUNTAINS</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
