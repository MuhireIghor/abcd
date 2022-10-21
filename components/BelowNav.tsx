import Image from "next/image";
import React, { useEffect, useState } from "react";
import { datas } from "../folder/belowNav";
import ReactPaginate from "react-paginate";
import { Button, IconButton, Rating } from "@mui/material";
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";
import Shake from "react-reveal/Shake";
const BelowNav = () => {
  const [currentPages, setCurrentPages] = useState<number[]>([0, 0]);
  const pageHandler = (page: { selected: number }, index: number): void => {
    currentPages[index] = page.selected * 4;
    setCurrentPages([...currentPages]);
  };
  return (
    <div className="flex flex-col gap-20">
      {datas.map(({ contacts, choose }, index) => (
        <div key={index} className="flex items-center gap-20 py-7 flex-col">
          <div className="w-fit">
            <div className="flex flex-col gap-3 pt-3 pb-10">
              <h1 className="text-[#232A43] font-extrabold text-[2rem]">
                {contacts.title}
              </h1>
              <h2 className="text-[#777A84] text-xl">{contacts.subtitle}</h2>
            </div>
            <div className="flex items-center flex-col gap-10">
              <div className="grid py-4 gap-14 w-full grid-cols-1  md:grid-cols-2">
                {contacts.data
                  .slice(currentPages[index], currentPages[index] + 4)
                  .map((contact, index) => {
                    return (
                      <div
                        key={index}
                        className="flex text-[#232A43] gap-3 max-w-[38rem]"
                      >
                        <img
                          src={contact.profile}
                          alt={contact.id + contact.username}
                          className="object-cover w-[7rem] h-[7rem]"
                        />
                        <div className="flex bg-transparent items-end flex-col gap-5">
                          <div className="flex w-full justify-between">
                            <div className="font-extrabold  text-2xl">
                              {contact.username}
                            </div>
                            <div className="flex  items-center gap-1">
                              <div>
                                <Rating
                                  name="half-rating-read"
                                  defaultValue={
                                    contact.rating.toString().includes(".")
                                      ? contact.rating
                                      : contact.rating - 0.2
                                  }
                                  precision={0.5}
                                  readOnly
                                />
                              </div>
                              <div>
                                {contact.rating.toString().includes(".")
                                  ? contact.rating
                                  : contact.rating + ".0"}
                              </div>
                            </div>
                          </div>
                          <div className="text-lg">{contact.text}</div>
                          <Button
                            variant="contained"
                            style={{ background: "#4B6DF3" }}
                          >
                            Contact agent
                          </Button>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {contacts.data.length > 4 && (
                <ReactPaginate
                  breakLabel="....."
                  previousLabel={
                    <IconButton disabled={currentPages[index] === 0}>
                      <ChevronLeft />
                    </IconButton>
                  }
                  previousClassName="h-full"
                  nextClassName="h-full"
                  nextLinkClassName="h-full items-center flex"
                  previousLinkClassName="h-full items-center flex"
                  pageLinkClassName="h-full w-full border cursor-pointer bg-white font-bold text-[rgba(0,0,0,0.5)] px-3 py-2 rounded-md"
                  pageCount={contacts.data.length / 4}
                  marginPagesDisplayed={3}
                  nextLabel={
                    <IconButton
                      disabled={
                        currentPages[index] + 3 >= contacts.data.length -1
                      }
                    >
                      <ChevronRight />
                    </IconButton>
                  }
                  activeLinkClassName="border-none bg-[#5072f838] text-[#4B6DF3]"
                  onPageChange={(selectedItem) =>
                    pageHandler(selectedItem, index)
                  }
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
            className={`flex items-center justify-center gap-3 mr-10 ${
              index > 0 && "flex-row-reverse"
            }`}
          >
            <div
              style={{ backgroundImage: `url(/images/${index > 0 ? "anothergroup.svg" : "group.svg"})` }}
              className="w-[35rem] bg-cover h-[35rem]"
            ></div>
            <div className="text-[#232A43]  text-xl items-start flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="text-[#4B6DF3] text-lg font-[600]">
                  {choose.subtitle}
                </div>
                <div className="font-bold text-4xl">{choose.title}</div>
              </div>
              <div className="max-w-[40rem]">{choose.desc}</div>
              <div className="flex flex-col font-[500] gap-3">
                {choose.lists.map((list, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-[18px] mt-[0.4rem] w-[18px] bg-[#232a43bd]  rounded-b-md"></div>
                    <div className="text-lg max-w-[40rem]">{list}</div>
                  </div>
                ))}
              </div>
              <Button
                style={{ background: "#4B6DF3" }}
                className="flex text-white gap-2 py-2 px-4 font-semibold items-center justify-center"
              >
                <img src="/images/search.svg"/>
                <span>Find an agent</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BelowNav;
