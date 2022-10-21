import Image from "next/image";
import searchIcon from "../public/images/Vector(8).png";
const Search = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-darkBlue h-44 relative ">
      <div className="flex flex-col px-16 ">
        <h1 className="text-white text-2xl font-bold tracking-wide mb-8 ">
          Connect with an expert local agent
        </h1>
        <p className="text-white text-sm w-[75%] mb-4">
          Our agents are here to help you. Let's make your home search or sale
          easier.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center bg-white h-[56px] w-[528px] absolute right-12 rounded-[4px]">
        <input
          type="text"
          placeholder="Search By Name or location"
          className="p-4 w-[75%] h-[50px] outline-none border-none"
        />
        <div className="w-[80px] h-[56px] bg-mainblue flex flex-col justify-center">
          <button>
            <Image src={searchIcon} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
