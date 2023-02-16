import Logo from "../../imgs/logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#f4f5f6] color-[#000] border-b-[#e8e8e8] h-[60px] z-9">
        {" "}
        {/* Main header */}
        <div className="flex justify-between items-center w-[1200px] m-auto h-[60px] text-[14px]">
          {" "}
          {/* Header Content */}
          <div className="leading-[4px] ">
            {" "}
            {/* Header Logo */}
            <img className="w-[175px] h-[40px]" src={Logo} alt="" />
          </div>
          {/* Header Menu */}
          <div className="flex p-[0px 12px] font-bold tracking-normal">
            {" "}
            {/* Menu Item */}
            <div className="text-[#333] inline-block mr-[12px] align-top">
              {" "}
              {/* Header SignIn */}
              <span className="flex">
                {" "}
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center ">
                  <IoPersonOutline className="mr-[12px] text-[16px]" />
                  Sign In
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {" "}
              {/* Header SignIn */}
              <span className="flex">
                {" "}
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px]">
                  Join Now
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {" "}
              {/* Header SignIn */}
              <span className="flex">
                {" "}
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  Find Reservations
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {" "}
              {/* Header SignIn */}
              <span className="flex">
                {" "}
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  <IoGlobeOutline className="mr-[12px] text-[16px]" />
                  English
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {" "}
              {/* Header SignIn */}
              <span className="flex">
                {" "}
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  LKR
                </span>
              </span>
            </div>
            <div className="text-[#333] flex pr-[12px]  align-top before:border-r-[1px] before:border-r-[#999]">
              {" "}
              {/* Header SignIn */}
              <span className="flex">
                {" "}
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
      <div className=" flex bg-[#333] ">
        <nav className=" uppercase  font-bold justify-between items-center  w-[1200px] m-auto text-[14px] text-[#fff] ">
          <div className=" justify-between ">
            <div className="nav-items font-Montserrat  flex ">
              <div className="group ">
                <li className="list-none mr-[0px]inline-block items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px]  font-[14px] inline-block items-center"
                    href="#"
                  >
                    About
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700  group-hover:block w-[100%] left-0">
                  <li class="">
                    <a
                      class="bg-white hover:bg-white py-2 px-4 block whitespace-no-wrap pl-[185px]"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    rooms & suites
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    Dinning
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    Experience
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    Events
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    More
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    Gallery
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    Offers
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group">
                <li className="list-none mr-[0px]inline-block  items-center hover:bg-white hover:text-black">
                  <a
                    className="p-[8.1px] font-[14px] inline-block items-center"
                    href="#"
                  >
                    More
                    <IoChevronDown className=" inline-block ml-[4px] text-[18px]" />
                  </a>
                </li>
                <ul class="z-10 absolute hidden text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      One
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
