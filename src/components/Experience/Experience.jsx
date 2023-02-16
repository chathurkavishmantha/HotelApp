import React from "react";
import { Experiences } from "../OurDestinations/DestinationData";

const Experience = () => {
  return (
    <div className="p-14">
      <h2 className="mb-2 text-4xl text-[#104C97] font-[730]">
        Offers that bring you peace of mind
      </h2>
      <div className="pr-8  py-2 text-xl">
        <p>Find the perfect stay with our exclusive deals.</p>
      </div>
      <div className="grid grid-cols-3 gap-12 ">
        {Experiences.map((item, index) => {
          return (
            <div
              key={index}
              className="p-8 relative w-full h-[282px] justify-center items-center "
            >
              <img
                className="absolute  left-0 right-0 bottom-0 w-[100%]"
                src={item.img}
                alt=""
              />
              <div className="bg-gradient-to-t from-[#000000e7] text-[#FFFFFF]  font-bold uppercase  py-5 text-[21px] absolute left-0 right-0 top-0 text-center ">
                <p className="mt-[210px] tracking-[0.3px]">{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
