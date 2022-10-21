import Image from "next/image";
import React from "react";

const TopRatedAgent = ({ agent }) => {
  const star = (
    <svg
      width="17"
      height="17"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1461_210)">
        <path
          d="M17.8972 6.88296C17.7797 6.51962 17.4574 6.26155 17.0762 6.22719L11.897 5.75692L9.84908 0.963463C9.69808 0.612165 9.35417 0.384766 8.97207 0.384766C8.58997 0.384766 8.24606 0.612165 8.09506 0.964285L6.04709 5.75692L0.867154 6.22719C0.486558 6.26237 0.165105 6.51962 0.0469562 6.88296C-0.0711929 7.24631 0.0379204 7.64484 0.325832 7.89606L4.24063 11.3294L3.08625 16.4144C3.00178 16.7883 3.1469 17.1748 3.45712 17.3991C3.62387 17.5195 3.81896 17.5809 4.0157 17.5809C4.18532 17.5809 4.35358 17.5351 4.50458 17.4448L8.97207 14.7747L13.4379 17.4448C13.7647 17.6414 14.1767 17.6234 14.4862 17.3991C14.7966 17.1741 14.9415 16.7875 14.8571 16.4144L13.7027 11.3294L17.6175 7.89675C17.9054 7.64484 18.0153 7.24699 17.8972 6.88296V6.88296Z"
          fill="#FFC107"
        />
      </g>
      <defs>
        <clipPath id="clip0_1461_210">
          <rect width="17.944" height="17.944" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const starWhite = (
    <svg
      className="fill-white stroke-gray-500"
      width="17"
      height="17"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1461_210)">
        <path
          d="M17.8972 6.88296C17.7797 6.51962 17.4574 6.26155 17.0762 6.22719L11.897 5.75692L9.84908 0.963463C9.69808 0.612165 9.35417 0.384766 8.97207 0.384766C8.58997 0.384766 8.24606 0.612165 8.09506 0.964285L6.04709 5.75692L0.867154 6.22719C0.486558 6.26237 0.165105 6.51962 0.0469562 6.88296C-0.0711929 7.24631 0.0379204 7.64484 0.325832 7.89606L4.24063 11.3294L3.08625 16.4144C3.00178 16.7883 3.1469 17.1748 3.45712 17.3991C3.62387 17.5195 3.81896 17.5809 4.0157 17.5809C4.18532 17.5809 4.35358 17.5351 4.50458 17.4448L8.97207 14.7747L13.4379 17.4448C13.7647 17.6414 14.1767 17.6234 14.4862 17.3991C14.7966 17.1741 14.9415 16.7875 14.8571 16.4144L13.7027 11.3294L17.6175 7.89675C17.9054 7.64484 18.0153 7.24699 17.8972 6.88296V6.88296Z"
          fill="#FFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1461_210">
          <rect width="17.944" height="17.944" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  let stars = [];
  for (let i = 0; i < agent.rating; i++) {
    stars.push(star);
  }
  let whiteStars = [];
  for (let i = 0; i < 5 - agent.rating; i++) {
    whiteStars.push(starWhite);
  }

  return (
    <div className="relative w-[500px] h-[190px] py-2">
      <div className="flex gap-4">
        <div className="mt-2">
          <Image
            src={agent.image}
            alt={agent.name}
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
        <div className="">
          <h1 className="text-[#232A43] font-bold text-lg">{agent.name}</h1>
          <div className="mt-3">
            <p className="text-[#232A43] font-normal text-sm">
              {agent.description}
              <button className="underline text-gray-900 font-medium ml-1">
                More
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-100 mt-2"></div>
      <button className="text-sm font-light bg-[#4B6DF3] text-gray-100 py-[7px] px-[8px] rounded-[4px] float-right active:scale-[.99] mr-2 mt-3">
        Contact agent
      </button>
      <div className="rating flex gap-1 absolute top-3 right-2 items-center">
        {stars.map((star) => {
          return star;
        })}
        {whiteStars.map((star) => {
          return star;
        })}
        <span className="text-xs mt-1 ml-1">{agent.rating}.0</span>
      </div>
    </div>
  );
};

export default TopRatedAgent;
