import Image from "next/image";
import HouseGrp from "../public/images/Group 1000001996.png";
import agentGrp from "../public/images/Group 1000001997.png";
const links = ["About", "Blog", "Contact", "Contact", "Careers "];
const agentBook = ["Search for agent", "Search for sale", "FAQ"];
const resources = ["Articles", "Guides", "Real Estate News"];
import sideFoot from "../public/images/pexels-timur-saglambilek-87223 2.png";

const Footer = () => {
  return (
    <div className="bg-footerBlue flex flex-col gap-2">
      <div className="flex flex-row p-10">
        <div className="flex flex-col basis-1/4 ">
          <div className="flex flex-row gap-3 ">
            <div className="w-5">
              <Image
                src={HouseGrp}
                width={8}
                height={10}
                layout="responsive"
                alt="HouseVector"
              />
            </div>
            <div className="w-24 h-20 mt-2 ">
              <Image src={agentGrp} layout="responsive" alt="TextVector" />
            </div>
          </div>
          <div className="text-white w-[70%] text-sm font-thin  ">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
          </div>
        </div>
        <div className="flex flex-col basis-1/4">
          <p className="text-white font-bold mb-4">Company</p>
          <div className="flex flex-col gap-[12px]">
            {links.map((link, index) => {
              if (index == 4) {
                return (
                  <p key={index} className="text-white hover:underline hover:decoration-solid hover:decoration-1 hover:cursor-pointer ">
                    {link}
                    <span className="text-orangeFooter font-hiring non-italic">
                     
                      We &apos;re hiring
                    </span>
                  </p>
                );
              } else {
                return (
                  <p key={index} className="text-white  hover:underline hover:decoration-solid hover:decoration-1 hover:cursor-pointer  ">
                    {link}
                  </p>
                );
              }
            })}
          </div>
        </div>
        <div className="flex flex-col basis-1/4">
          <p className="text-white font-bold mb-4">Agentbook</p>
          <div className="flex flex-col gap-[12px]">
            {agentBook.map((book, index) => {
              return (
                <p key={index} className="text-white hover:underline hover:decoration-solid hover:decoration-1 hover:cursor-pointer ">
                  {book}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col basis-1/4">
          <p className="text-white font-bold mb-4">Resources</p>
          <div className="flex flex-col gap-[12px]">
            {resources.map((resource, index) => {
              return (
                <p key={index} className="text-white hover:underline hover:decoration-solid hover:decoration-1 hover:cursor-pointer">
                  {resource}
                </p>
              );
            })}
          </div>
          <Image src={sideFoot} width={5} height={120} />
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
