import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-[20vh] w-full bg-[#0c1b3b] text-slate-300  ">
      <div className="h-1/3 w-full flex justify-center items-center">
        <div>Made by Shashank Srivastava.</div>
      </div>
      <div className="h-1/2 w-full flex justify-evenly items-center ">
        <a href="mailto:shashankgamerid@gmail.com">
          <MdOutlineMail size={30} />
        </a>
        <a href="https://www.linkedin.com/in/shashank-srivastava-86a2a4229" target="_blank">
          <CiLinkedin size={30} />
        </a>
        <a href="https://github.com/KKashi-Hatake" target="_blank">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
