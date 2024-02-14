import React, { useState } from "react";
import img1 from "../assets/image3.jpg";
import img2 from "../assets/image6.jpg";

const Main = () => {
  const card = [
    {
      img: img1,
      data: [
        {
          date: "25 Nov 2016",
          text: "Vestibulum viverra",
        },
        {
          date: "28 Nov 2016",
          text: "Vestibulum viverra",
        },
        {
          date: "",
          text: "",
        },
        {
          date: "18 Dec 2016",
          text: "Vestibulum viverra",
        },
        {
          date: "",
          text: "",
        },
        {
          date: "7 Jan 2017",
          text: "Vestibulum viverra",
        },
      ],
    },
    {
      img: img2,
      data: [
        {
          date: "25 Nov 2023",
          text: "Vestibulum viverra",
        },
        {
          date: "28 Nov 2023",
          text: "Vestibulum viverra",
        },
        {
          date: "18 Dec 2023",
          text: "Vestibulum viverra",
        },
        {
          date: "7 Jan 2024",
          text: "Vestibulum viverra",
        },
      ],
    },
  ];
  const [currecntCard, setCurrentCard] = useState(0);

  return (
    <main className="h-[110vh] w-full">
      <header className="h-24 md:h-40 w-full flex flex-col justify-between  items-center pt-2 md:pt-0">
        <section className="h-16 md:h-full flex justify-center md:items-center md:pt-2 -mt-2 md:mt-0">
          <div className="w-full md:w-auto h-full flex justify-center md:justify-start ">
            <h1 className="text-6xl md:text-9xl font-extrabold text-[#424b578f] md:text-[#424b575c]">
              02
            </h1>
            <div className="pt-[0.65rem] flex flex-col justify-center mb-3 md:-mb-6">
              <p className="text-2xl  md:text-4xl font-bold text-[#232e4bb9] uppercase">
                Climb
              </p>
              <div className="h-2 w-2 md:h-4 md:w-4 bg-[#424b578f] md:bg-[#424b575c]"></div>
            </div>
          </div>
          <div className="hidden md:block w-full text-sm  md:h-3/4 p-1 md:w-[45%] text-wrap md:p-5  ">
            <p className="text-[#232e4b]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              numquam sapiente amet quia delectus error tempora, nemo in iure
              doloremque vitae quaerat dolor beatae consectetur.
            </p>
          </div>
        </section>
        <nav className="h-8 w-full bg-[#232e4b] ">
          <div className="w-full md:w-1/2 h-full flex justify-center">
            <div className="h-full flex justify-center items-center space-x-5">
              <h1 onClick={()=>setCurrentCard(0)} className={`${currecntCard===0?"text-[#232e4b] bg-gray-300 underline underline-offset-2":"bg-[#232e4b] text-gray-300"} h-full p-1 text-xl font-semibold cursor-pointer  uppercase`}>
                Mountain 1
              </h1>
              <h1 onClick={()=>setCurrentCard(1)} className={`${currecntCard===1?"text-[#232e4b] bg-gray-300 underline underline-offset-2":"bg-[#232e4b] text-gray-300"} h-full p-1 text-xl font-semibold  cursor-pointer uppercase`}>Mountain 2</h1>
            </div>
          </div>
        </nav>
      </header>
      <section className="relative h-[calc(100vh-2.1rem)] md:h-[calc(100vh-6rem)] top-0 md:top-[0.52rem] ">
        <div className="h-full w-full">
          <img
            className="bg-contain bg-center z-5 w-full h-full md:w-full md:h-full"
            src={card[currecntCard].img}
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:top-[30%] md:left-[30%] h-2/5 md:h-[35vh] lg:h-[30vh] w-[40vh] z-10 bg-white/60">
            <h1 className=" w-4/5  pt-2 pl-5 text-xl md:text-3xl uppercase font-bold text-[#232e4be2] ">
              Schedule
            </h1>
            <div className='h-full w-full felx flex-col items-center'>

            {card[currecntCard].data.map((elem, index) => {
              return (
                <div className='h-auto w-11/12 pl-5 p-[0.4rem] flex justify-between ' key={index}>
                    
                      <h1 className="text-sm  font-light">{elem.date}</h1>
                      <h1 className="text-sm  font-light">{elem.text}</h1>
                    
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
// border-2 border-red-700
