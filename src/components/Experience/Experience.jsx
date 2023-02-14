import React from 'react'
import { Experiences } from "../OurDestinations/DestinationData";

const Experience = () => {
  return (
    <div className='p-14'>
    <h2 className="mb-2 text-4xl text-[#104C97] font-[730]">Offers that bring you peace of mind</h2>
    <div className="pr-8  py-2 text-xl">
        <p>Find the perfect stay with our exclusive deals.</p>
    </div>
      <div className="grid grid-cols-3 gap-12">
        {
            Experiences.map((item,index)=>{
                return(                    
                    <div key={index} className="p-8 bg-cyan-400 relative w-full h-[280px] justify-center items-center">
                        <img className='absolute top-0 left-0 right-0 bottom-0' src={item.img} alt="" />
                        <div className='mx-auto text-[#FFFFFF] w-full font-bold uppercase leading-tight py-5 text-2xl absolute left-0 right-0 top-[70%] text-center '>
                            <p>{item.para}</p>
                        </div>
                    </div>
                )
            })
        }
       
        
      </div>
    </div>
  )
}

export default Experience
