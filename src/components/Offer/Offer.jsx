import { Offers } from "../OurDestinations/DestinationData.js";

const Offer = () => {
  return (
    <div className=" w-[1170px] m-auto ">
        <h2 className="text-center pb-[30px] text-[#333] text-[28px] leading-[37px] font-PlayFair">Offers</h2>
       <div className="flex justify-between ">
       {Offers.map((item, index) => {
        return (          
            <div  key={index} className="cards w-[360px] h-[450px] text-center font-Montserrat shadow-md hover:shadow-lg ">
              <img className="" src={item.img} alt="" />
              <p className="text-[#333] text-[12px] leading-[18px] mt-[4px] ">{item.heading}</p>
              <br/>
              <p className="text-[#333] text-[14px] h-[40px] leading-[20px] mt-[4px] overflow-hidden font-semibold">{item.topic}</p>
              <p className="text-[#666] text-[12px] h-[54px] leading-[18px] mt-[6px] overflow-hidden">{item.para}</p>
              <p className="item-end text-[#333] text-[14px] h-[40px] leading-[20px] mt-[20px] text-center">From <span className="font-bold">{item.price}</span> Average Per Night</p>
              <a className="mt-[12px] border-solid border-[1px] border-[#876a20] text-[#876a20] cursor-pointer inline-block text-[14px] leading-[36px] min-w-[140px] px-[14px] text-center font-semibold hover:text-[#b18b2a]" href="#">View Details</a>
            </div>
        );
      })}
       </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Offer;
