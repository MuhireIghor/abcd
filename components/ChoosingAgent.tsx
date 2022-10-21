import Image from "next/image";
import React, { useEffect, useState } from "react";
import { datas } from "../data/belowNav";
import arrowVect from '../public/images/direct.png';
import { data } from "../data/house";
import ReactPaginate from "react-paginate";
const BelowNav = () => {
  const [currentPages, setCurrentPages] = useState<number[]>([0, 0]);
  const pageHandler = (page: { selected: number }, index: number): void => {
    currentPages[index] = page.selected;
    setCurrentPages(currentPages);
  };
  return (
    <div className="flex flex-col">
      {datas.map(({ contacts, choose }, index) => (
        <div key={index} className="flex gap-20 py-5 flex-col">
          <div className="px-24">
            <div className="flex flex-col gap-3 pt-3 pb-10">
              <h1 className="text-[#232A43] font-extrabold text-[2rem]">
                {contacts.title}
              </h1>
              <h2 className="text-[#777A84] text-xl">{contacts.subtitle}</h2>
            </div>
            <div className="flex items-center flex-col gap-3">
              <div className="grid py-4 gap-20 w-full grid-cols-1  md:grid-cols-2">
                {contacts.data
                  .slice(currentPages[index], currentPages[index] + 4)
                  .map((contact, index) => {
                    return (
                      <div
                        key={index}
                        className="flex text-[#232A43] gap-10 max-w-[40rem]"
                      >
                        <img
                          src={contact.profile}
                          alt={contact.id + contact.username}
                          className="object-cover w-[7rem] h-[7rem]"
                        />
                        <div className="flex bg-transparent items-end flex-col gap-1">
                          <div className="flex w-full justify-between">
                            <div className="font-bold  text-2xl">
                              {contact.username}
                            </div>
                            <div>{ }</div>
                          </div>
                          <div className="text-md">{contact.text}</div>
                          <button
                            type="button"
                            className="bg-[#4B6DF3] text-white p-3  rounded-md"
                          >
                            Contact agent
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {contacts.data.length > 4 && (
                <ReactPaginate
                  breakLabel="....."
                  previousLabel={
                    <Image height={40} width={40} src="/Previous.svg" />
                  }
                  pageCount={contacts.data.length / 4}
                  nextLabel={<Image height={40} width={40} src="/Next.svg" />}
                  pageClassName="border cursor-pointer px-3 py-2 rounded-md"
                  activeClassName="bg-[blue] text-white"
                  onPageChange={(selectedItem) => pageHandler(selectedItem, index)}
                  className="bg-transparent flex items-center font-bold gap-5"
                />
              )}
            </div>
          </div>
          {index === 1 && (
            <div className="w-full bg-[#12182D] flex py-12 px-24 items-center justify-between">
              <div className="flex gap-3 flex-col text-white">
                <h1 className="text-4xl font-bold">
                  Connect with an expert local agent
                </h1>
                <h2 className="max-w-[30rem]">
                  Our agents are here to help you. Let's make your home search
                  or sale easier.
                </h2>
              </div>
              <div className="flex h-14 w-[30rem] rounded-md">
                <input
                  placeholder="Search by name or location"
                  type="text"
                  className="w-full border-none rounded-l-md outline-none p-4"
                />
                <button className="bg-[#4B6DF3] rounded-r-md px-5 flex items-center justify-center ">
                  <img src="/images/Vector(8).png" alt="search" />
                </button>
              </div>
            </div>
          )}
          <div
            className={`flex items-center justify-center gap-10 ${index > 0 && "flex-row-reverse"
              }`}
          >
            <div
              style={{ backgroundImage: `url(/images/chooseAgent.png)` }}
              className="w-[35rem] bg-cover h-[35rem]"
            ></div>
            <div className="text-[#232A43] text-xl items-start flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-[#4B6DF3] text-base font-bold">
                  {choose.subtitle}
                </div>
                <div className="font-extrabold text-4xl">{choose.title}</div>
              </div>
              <div className="max-w-[35rem]">{choose.desc}</div>
              <div className="flex flex-col font-[600] gap-3">
                {choose.lists.map((list, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-[18px] w-[18px] bg-[#232a43bd]  rounded-b-md"></div>
                    <div className="max-w-[45rem]">{list}</div>
                  </div>
                ))}
              </div>
              <button className="bg-[#4B6DF3] py-3 px-4 gap-2 rounded-md text-white flex items-center">
                <img src="/images/Vector(8).png" />
                <span>Find an agent</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className='flex flex-col gap-4'>
     {data.map((house,index)=>(
      <>
      <div >
{house.title}
      </div>
      <div className="flex gap-2">
        {house.data.map((info,index)=>{
          return(
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p>{info.date}</p>
                <p>{info.time}</p>
              </div>
              <div className="">
                <img src={info.houseImg} alt={info.name} />
              </div>
              <div>
                {info.subtitle}
              </div>
              <div className="flex justify-between">
<div className="flex ">
  <img  src={info.profile} alt={info.option}/>
  <p>{info.name}</p>
</div>
<div className="flex">
  {/* <img src= /> */}
            
</div>
              </div>

            </div>
          )
        })}
      </div>
      </>
     ))}

      </div>
    </div>
  );
};
export default BelowNav;
