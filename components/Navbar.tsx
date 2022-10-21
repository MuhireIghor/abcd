import Link from "next/link";
import Image from "next/image";
import HouseGrp from "../public/images/Group 1000001996.png";
import agentGrp from "../public/images/Group 1000001997.png";
import canadaFlag from "../public/images/flag.png";
import menu from "../public/images/Vector(7).png";
import accImg from "../public/images/Ellipse 110.png";
import search from "../public/images/Vector(7).png";
import { FC, useState } from "react";
const Navbar: FC = () => {
  const [bg, setBg] = useState<Boolean>(false);
  if (process.browser) {
    document.onscroll = (e) => {
      if (window.scrollY > 140) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
  }
  return (
    <div className="p-8 bg-cover bg-[linear-gradient(0deg,rgba(18,24,45,0.5),rgba(18,24,45,0.5)),url(/images/bg1.png)] opacity-90 flex flex-col h-[80vh]">
      <div
        className={`flex fixed right-0 top-0 p-3 left-0 justify-between items-center ${
          bg ? "bg-[black]" : "bg-transparent"
        }`}
      >
        <div className="flex gap-4 items-center ">
          <div className="w-10  ">
            <Image
              src={HouseGrp}
              width={20}
              height={20}
              layout="responsive"
              alt="HouseVector"
            />
          </div>
          <div className="w-20">
            <Image src={agentGrp} layout="responsive" alt="TextVector" />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div className="border-[2px] border-white flex items-center justify-center w-[60px] h-[60px] rounded-[5px] p-2 ">
            <img src="/images/flag.png" className="" alt="canada flag" />
          </div>
          <div className="border-[2px] border-white  rounded-[5px] flex flex-row p-2 items-center gap-10 justify-between">
            <Image src={menu} />
            <Image
              src={accImg}
              className="object-cover "
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-center items-center ">
        <p className="text-4xl text-white font-bold tracking-wider">
          Find The Perfect Real Estate Agent
        </p>
        <p className="text-white text-md font-medium w-[35%] text-center mt-4">
          Make your search and sale easier and faster by connecting with one of
          our expert local agent in your neighborhood
        </p>
        <div className="bg-white w-[80%] h-20 mt-4 rounded-[5px] flex flex-row p-8 justify-between  items-center">
          <div className="basis-3/4">
            <Image src={search} className="p-10 w-20 h-20 " />
            <input
              type="text"
              placeholder="search..."
              className=" w-[80%]  p-1 mx-4 outline-none border-none"
            />
          </div>
          <div className="bg-mainblue w-[179px] h-[60px] rounded-[5px] text-center flex flex-col justify-center text-white  ">
            <button>Search Agents</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
