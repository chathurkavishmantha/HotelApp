import React, { useState } from "react";

import { DestinationData } from "./DestinationData";

console.log(DestinationData[0].id);

const OurDestinations = () => {
  
  const [data, setData] = useState(DestinationData);

  const setValues = (index = null) => {
    DestinationData.forEach((item) => {
      if (item.id == index) {
        setData(item);
      }
    });
  };

  console.log(data);

  return (
    <div className="lg:w-[1170px] sm:w-[390px] m-auto">
      <div className="text-center  ">
        {" "}
        {/*topic-name */}
        <h3 className="font-BodoniModa tracking-normal text-[#7c3091] italic lg:text-[70px] sm:text-[35px] sm:mt-[20px]">
          Our Destinations
        </h3>
      </div>
      <div className="lg:w-[50%]  sm:w-[90%] m-auto border-solid border border-gray-400 py-[19px] px-[30px] ">
        <select className="border-none border-0 w-[100%] bg-white text-[20px] italic text-[#313496]">
          {DestinationData.map((item, index) => {
            return (
              <option
                className="lg:w-[50%] lg:text-[20px] sm:text-[15px] font-BodoniModa"
                key={index}
                onClick={() => {
                  setValues(item.id);
                }}
              >
                <span>{item.topic}</span>
              </option>
            );
          })}
        </select>
      </div>

      <div className="mt-[70px] relative lg:min-h-[550px] ">
        <div className="lg:absolute sm:absolute lg:top-[30px] sm:left-[60%] sm:top-[25%] sm:w-[30%] lg:left-[70px] sm:z-[99]">
          <img src={!data.island ? DestinationData[0].island : data.island} />
        </div>
        <div className="lg:w-[715px]  sm:relative sm:mt-[20px] lg:h-[550px] sm:h-[300px]  lg:m-auto sm:mx-4">
          <img
            className=""
            src={!data.imgMain ? DestinationData[0].imgMain : data.imgMain}
          />
        </div>

        <div className="bg-[#FFFFFF] pb-[90px] pt-[60px] px-[40px] text-[17px] lg:w-[340px] shadow-card lg:absolute right-0 lg:top-[85px] sm:mx-4">
          <div className="heading">
            <h5 className="font-BodoniModa tracking-normal text-[#77328b] italic text-[30px]">
              {!data.topic ? DestinationData[0].topic : data.topic}
            </h5>
          </div>
          <div className="para">
            <br />
            {!data.description
              ? DestinationData[0].description
              : data.description}
          </div>
          <div className="mt-[20px]">
            <a className="px-[30px] py-[13px] text-[20px] border-0 relative overflow-hidden bg-[#252776] text-[#FFFFFF] font-BodoniModa italic ">
              Discvover More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDestinations;
