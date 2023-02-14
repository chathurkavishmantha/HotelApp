import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function Slider() {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
          <div className=" w-[100%] h-[650px] bg-cover relative overflow-hidden bg-black">
            <SwiperSlide>
              <img
                src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/4/D/%7BB4DC25D4-2F83-4133-BE8A-B139CBAD061B%7D200710_slcb_slcares.jpg"
                alt=""
              />
              <div className=" absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t from-[#0000007a] ">
                <div className=" container relative top-[40%]">
                  <div className="container  text-[#fff] text-[40px] leading-11 mb-[10px] truncate text-ellipsis whitespace-nowrap ">
                    Shangri-La Cares
                  </div>
                  <div className="text-[#fff] text-[23px] leading-11 mb-[28px] truncate text-ellipsis whitespace-nowrap">
                    Your well-being in our care - learn more about our safety
                    standards
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/F/A/5/%7BFA599018-DA27-4904-8585-D0B858639D94%7DSEAA%20We%20Are%20Vaccinated_website-home-banner.jpeg"
                alt=""
              />
              <div className=" absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t from-[#0000007a] ">
                <div className=" container relative top-[40%]">
                  <div className="container  text-[#fff] text-[36px] leading-11 mb-[10px] truncate text-ellipsis whitespace-nowrap ">
                    Shangri-La Cares
                  </div>
                  <div className="text-[#fff] text-[20px] leading-11 mb-[28px] truncate text-ellipsis whitespace-nowrap">
                    Your well-being in our care - learn more about our safety
                    standards
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/%7B20B18195-50BE-4993-9CAE-0A141AFD3747%7D201126_slcb_homepage1.jpg"
                alt=""
              />
              <div className=" absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t from-[#0000007a] ">
                <div className=" container relative top-[40%]">
                  <div className="container  text-[#fff] text-[36px] leading-11 mb-[10px] truncate text-ellipsis whitespace-nowrap ">
                    Shangri-La Cares
                  </div>
                  <div className="text-[#fff] text-[20px] leading-11 mb-[28px] truncate text-ellipsis whitespace-nowrap">
                    Your well-being in our care - learn more about our safety
                    standards
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        </Swiper>
      </>
    </div>
  );
}

export default Slider;
