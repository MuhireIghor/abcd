import React from "react";
import searchIcon from "../public/images/Vector(8).png";
import circle2 from "../public/images/Ellipse 2.png";
import circle3 from "../public/images/Ellipse 3.png";
import messageIcon from "../public/images/Message.png";
import avat1 from "../public/images/Photo - 4.png";
import avat2 from "../public/images/Group 304.png";
import avat3 from "../public/images/Group 305.png";
import avat4 from "../public/images/Group 306.png";
import Image from "next/image";

const AgentSearch = () => {
  const services = [
    "Search for an agent by name or location",
    "Filter the results base on your interests",
    "Select and contact your best match agent",
  ];
  return (
    <div className="flex flex-row bg-white p-12">
      <div className="flex flex-col  ">
        <h3 className="text-xl  text-mainblue">CHAT WITH AN AGENT</h3>
        <h1 className="text-3xl font-bold">Real Time Conversation</h1>
        <p className="text-sm text-textGray w-[40.7%]">
          You should choose an agent you are comfortable working with and who
          you feel has your best interests at heart. you should be able to get
          your best agent by considering the following simple steps:
        </p>
        <div className="flex flex-col mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-row    ">
              {" "}
              <div className="w-[16px] h-[14px] bg-optGray  rounded-b-[4px] rounded-l-[4px] mr-4 mt-2  ">
                <div className="w-[16px] h-[14px] bg-optGray rounded-b-[4px] rounded-l-[4px] opacity-[80%]   "></div>
              </div>
              <span className="text-textGray text-[16px] pb-4">{service}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center w-fit h-[51px] bg-mainblue p-[12px]  rounded-[5px] mt-8">
          <button className="text-white flex flex-row  items-center justify-between ">
            <span>
              <Image src={searchIcon} className="basis-1/2" />
            </span>
            <span>Find an agent</span>
          </button>
        </div>
      </div>
      <div className="absolute">
        <div>
          <Image src={circle2} />
          <Image src={avat1} />
          <Image src={avat2} />
          <Image src={avat3} />
          <Image src={avat4} />
        </div>
        <div className="absolute -bottom-52 right-24">
          <Image src={circle3} />
          <div className="absolute top-16 right-4">
            <Image src={messageIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSearch;
