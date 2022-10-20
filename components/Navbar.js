import Link from "next/link";
import Image from "next/image";
import HouseGrp from "../public/images/Group 1000001996.png";
import agentGrp from "../public/images/Group 1000001997.png";
import canadaFlag from "../public/images/flag.png";
import menu from "../public/images/Vector(7).png";
import accImg from "../public/images/Ellipse 110.png";
import search from "../public/images/Vector(8).png";

const Navbar = () => {
  return (
    <div
      style={{ backgroundImage: `url('../public/images/bg1.png')` }}
      className="bg-black py-8"
    >
      <div className="w-screen flex flex-row justify-between items-center  px-4">
        <div className="flex flex-row ">
          <div className="w-10 h-20 mt-6 ">
            <Image
              src={HouseGrp}
              width={20}
              height={20}
              layout="responsive"
              alt="HouseVector"
            />
          </div>
          <div className="w-20 h-20 absolute top-4 left-16 top-10">
            <Image src={agentGrp} layout="responsive" alt="TextVector" />
          </div>
        </div>
        <div className="flex flex-row justify-center absolute right-20 gap-4">
          <div className="border-[2px] border-white w-[46px] h-[44px] rounded-[5px] p-2 ">
            <Image
              src={canadaFlag}
              layout="responsive"
              width={30}
              height={30}
            />
          </div>
          <div className="border-[2px] border-white w-[95px] h-[44px] rounded-[5px] flex flex-row p-2 items-start items-center justify-between">
            <Image src={menu} />
            <Image src={accImg} height={25} />
          </div>

          <div></div>
        </div>

        <div></div>
      </div>
      <div className="flex flex-col  justify-center items-center ">
        <p className="text-4xl text-white font-black tracking-wider">
          Find The Perfect Real Estate Agent
        </p>
        <p className="text-white text-md w-[35%] text-center mt-4">
          Make your search and sale easier and faster by connecting with one of
          our expert local agent in your neighborhood
        </p>
        <div className="bg-white w-[80%] h-20 mt-4 rounded-[5px] flex flex-row p-8 justify-between  items-center">
          <div className="basis-3/4">
            <Image src={search} className="p-10 w-20 h-20 " />
            <input
              type="text"
              className=" w-[80%]  p-1 mx-4 outline-none border-none"
            />
          </div>
          <div className="bg-mainblue w-[179px] h-[60px] rounded-[5px] h-[58px] absolute left-[75.9%] right-[1.23%] text-center flex flex-col justify-center text-white bottom-[56%]  ">
            <button>Search Agents</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
