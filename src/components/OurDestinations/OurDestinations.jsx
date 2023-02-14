import React, { CSSProperties, useState } from "react";

import Select from "react-select";

import { DestinationData } from "./DestinationData";

console.log(DestinationData);

const OurDestinations = () => {

const [data, setData] = useState(DestinationData);

const setValues = (index = null) =>{
   DestinationData.forEach(item =>{
    if(item.id == index){
        
        setData(item);        
    }
    
   })
}

console.log(data);

  return (
    <div className="w-[1170px] m-auto">
      <div className="text-center ">
        {" "}
        {/*topic-name */}
        <h3 className="font-BodoniModa tracking-normal text-[#7c3091] italic text-[70px]">
          Our Destinations
        </h3>
      </div>
      <div className="w-[50%] m-auto border-solid border border-gray-400 py-[19px] px-[30px] ">
        <select className="border-none border-0 w-[100%] bg-white text-[20px] italic text-[#313496]">
          {DestinationData.map((item, index) => {
            return (
              <option
                className="w-[50%] text-[20px] font-BodoniModa"
                key={index}
                onClick={()=>{setValues(item.id)} }
              >
                <span>{item.topic}</span>
              </option>
            );
          })}
        </select>
      </div>

      <div className="mt-[70px] relative min-h-[550px]">
        <div className="absolute top-[30px] left-[70px] z-">
          <img src={data.island}/>
        </div>
        <div className="w-[715px] h-[550px] m-auto">
          <img className="" src={data.imgMain} />
        </div>
          
          <div className="bg-[#FFFFFF] pb-[90px] pt-[60px] px-[40px] text-[17px] w-[340px] shadow-card absolute right-0 top-[85px]">
            <div className="heading"><h5 className="font-BodoniModa tracking-normal text-[#77328b] italic text-[30px]">{data.topic}</h5></div>
            <div className="para"><br />{data.description}</div>
            <div className="mt-[20px]">
              <a className="px-[30px] py-[13px] text-[20px] border-0 relative overflow-hidden bg-[#252776] text-[#FFFFFF] font-BodoniModa italic ">Discvover More</a>
            </div>
          </div>
        
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OurDestinations;
