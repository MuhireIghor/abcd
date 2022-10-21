import { FC, useState } from "react";
import { latest } from "../folder/latest";
import { users } from "../folder/users";
import BelowNav from "./BelowNav";
import ReactPaginate from "react-paginate";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const Latest: FC = () => {
  const [currentPage, setcurrentPage] = useState<number>(0);
  const pageHandler = (page: { selected: number }): void => {
    setcurrentPage(page.selected * 3);
  };
  return (
    <div className="flex flex-col pb-14 pt-10 gap-10 w-fit mx-auto">
      <h1 className="font-extrabold text-[2rem]">Latest Articles by Agents</h1>
      <div className="flex flex-col items-center gap-10">

      <div className="grid grid-cols-3 gap-[5rem] justify-center">
        {latest.slice(currentPage, currentPage + 3).map((latest, index) => {
          return (
            <div key={index} className="flex max-w-[25rem] flex-col gap-3">
              <div className="flex text-[#62616F] justify-between">
                <div className="flex gap-1 items-center">
                  <img
                    className="w-[1.2rem] h-[1.2rem]"
                    src="/images/Calendar.svg"
                  />
                  <div>{latest.date}</div>
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    className="w-[1.2rem] h-[1.2rem]"
                    src="/images/Book.svg"
                  />
                  <div>{latest.readby} MIN READ</div>
                </div>
              </div>
              <img
                src={latest.coverPhoto}
                className="object-cover h-[17rem] w-full"
                alt=""
              />
              <h1 className="font-bold text-2xl text-[#232A43]">
                {latest.title}
              </h1>
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img
                      src={
                        users.find((user) => user.id === latest.uploader)
                          .profile
                      }
                      className="w-10 h-10"
                      alt="profile"
                    />
                    <span className="text-[#62616F] font-medium text-lg">
                      {
                        users.find((user) => user.id === latest.uploader)
                          .username
                      }
                    </span>
                  </div>
                  <div className="flex gap-2  items-center">
                    <img src="/images/Status.svg" alt="status" />
                    <span className="text-[#62616F]">{latest.status}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {latest.length > 3 && (
        <ReactPaginate
          breakLabel="....."
          previousLabel={
            <IconButton disabled={currentPage === 0}>
              <ChevronLeft />
            </IconButton>
          }
          previousClassName="h-full"
          nextClassName="h-full"
          nextLinkClassName="h-full items-center flex"
          previousLinkClassName="h-full items-center flex"
          pageLinkClassName="h-full w-full border cursor-pointer bg-white font-bold text-[rgba(0,0,0,0.5)] px-3 py-2 rounded-md"
          pageCount={latest.length / 3}
          marginPagesDisplayed={3}
          nextLabel={
            <IconButton disabled={currentPage + 3 >= latest.length}>
              <ChevronRight />
            </IconButton>
          }
          activeLinkClassName="border-none bg-[#5072f838] text-[#4B6DF3]"
          onPageChange={pageHandler}
          className="bg-transparent flex items-center font-bold gap-5"
        />
      )}
      </div>

    </div>
  );
};
export default Latest;
