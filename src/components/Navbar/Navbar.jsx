import Logo from "../../imgs/logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#f4f5f6] color-[#000] border-b-[#e8e8e8] h-[60px] z-9">
        {/* Main header */}
        <div className="flex justify-between items-center w-[1200px] m-auto h-[60px] text-[14px]">
          {/* Header Content */}
          <div className="leading-[4px] ">
            {/* Header Logo */}
            <img className="w-[175px] h-[40px]" src={Logo} alt="" />
          </div>
          {/* Header Menu */}
          <div className="flex p-[0px 12px] font-bold tracking-normal">
            {/* Menu Item */}
            <div className="text-[#333] inline-block mr-[12px] align-top">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center ">
                  <IoPersonOutline className="mr-[12px] text-[16px]" />
                  Sign In
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px]">
                  Join Now
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  Find Reservations
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  <IoGlobeOutline className="mr-[12px] text-[16px]" />
                  English
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  LKR
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  <IoPhonePortraitSharp className="mr-[12px] text-[16px]" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar Wrapper */}

      <NavItems />
    </>
  );
};

export default Navbar;
