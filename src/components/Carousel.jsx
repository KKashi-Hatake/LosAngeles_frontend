import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import carousel from "../assets/carousel.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/image2.jpg";
import carousel4 from "../assets/image3.jpg";
import carousel5 from "../assets/image4.jpg";
import carousel6 from "../assets/image6.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img1: carousel,
      img2: carousel1,
      img3: carousel2,
      img4: carousel3,
    },
    {
      img1: carousel4,
      img2: carousel5,
      img3: carousel6,
      img4: carousel2,
    },
    {
      img1: carousel6,
      img2: carousel4,
      img3: carousel,
      img4: carousel5,
    },
  ];

  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(slides.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };
  const nextSlide = () => {
    currentSlide === slides.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };
  const goto = (i) => {
    setCurrentSlide(i);
  };

  return (
    <section className=" h-full w-full md:w-3/5 flex  pt-5 group ">
      <div className='relative h-full w-full'>

      <div className='h-[95%] w-full flex  flex-wrap justify-around md:justify-evenly  '>
        <div className="h-[48%] w-[48%] md:h-4/5 md:w-[22%] ">
          <img
            className="bg-center bg-cover h-full w-full"
            src={slides[currentSlide].img1}
            alt=""
          />
        </div>
        <div className="h-[48%] w-[48%] md:h-4/5 md:w-[22%]  ">
          <img
            className="bg-center bg-cover h-full w-full"
            src={slides[currentSlide].img2}
            alt=""
          />
        </div>
        <div className="h-[48%] w-[48%] md:h-4/5 md:w-[22%] ">
          <img
            className="bg-center bg-cover h-full w-full"
            src={slides[currentSlide].img3}
            alt=""
          />
        </div>
        <div className="h-[48%] w-[48%] md:h-4/5 md:w-[22%]  ">
          <img
            className="bg-center bg-cover h-full w-full"
            src={slides[currentSlide].img4}
            alt=""
          />
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[40%] translate-x-0 translate-y-[-50%] left-0  text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      <div className="hidden group-hover:block absolute top-[40%] translate-x-0 translate-y-[-50%] right-0  text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
      <div className=" absolute bottom-0 translate-x-[-50%] translate-y-[0] right-[35%] md:right-[42%]  text-xl  text-gray-500 cursor-pointer flex justify-end ">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goto(index)}
            className={`${
              currentSlide === index ? "text-white" : "text-gray-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Carousel;

