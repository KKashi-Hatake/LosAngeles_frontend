import React from "react";
import img from "../assets/img4.jpg";
import Carousel from "./Carousel";


const Hero = () => {
  return (
    <main className="h-[120vh] w-full relative md:h-screen">
      <div className="h-[60vh] w-full absolute z-5 bg-[#0000000b]"></div>
      <header className="h-[60vh] md:h-1/3 w-full flex flex-col items-center absolute z-10  ">
        <div className="w-3/5 h-1/4 md:h-full flex justify-start items-center mt-8  ">
          <h1 className="text-6xl md:text-9xl font-extrabold text-[#424b578f] md:text-[#424b575c]">01</h1>
          <div className=' md:-mb-7'>
            <p className="text-2xl font-semibold text-[#232e4bb9] uppercase">
              History
            </p>
            <div className='h-2 w-2 md:h-6 md:w-6 bg-[#424b578f] md:bg-[#424b575c]'></div>
          </div>
        </div>
        <div className='w-full h-3/4 p-2 md:p-0 text-center md:w-[55%] md:ml-10 text-wrap'>
          <p className="text-[#232e4b]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem numquam sapiente amet quia delectus error tempora, nemo in iure doloremque vitae quaerat dolor beatae consectetur. Ut amet obcaecati neque doloribus.
           Iure reprehenderit eos consequatur delectus, tempora non nemo aspernatur?</p>
        </div>
      </header>
      <img
        className="bg-contain bg-center w-full h-[60vh] md:w-full md:h-screen "
        src={img}
        alt=""
      />
      <div className=" h-[60vh] md:h-1/4 w-full md:absolute  md:bottom-0 z-10 bg-[#1b203fd9] md:bg-[#232e4bec] flex justify-center  " >
        <Carousel/>
      </div>
      
    </main>
  );
};

export default Hero;
