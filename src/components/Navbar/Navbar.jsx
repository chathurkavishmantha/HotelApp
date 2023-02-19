import Logo from "../../imgs/logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#f4f5f6] color-[#000] border-b-[#e8e8e8] h-[60px] z-9">
        <div className="flex justify-between items-center lg:w-[1200px] sm:w-[390px] lg:m-auto sm:mx-[15px] h-[60px] text-[14px]">
          <div className="leading-[4px] sm:relative">
            <img
              className="lg:w-[175px] h-[40px] sm:w-[33%] sm:h-auto sm:pl-[px]"
              src={Logo}
              alt=""
            />
          </div>
          <div className="lg:flex p-[0px 12px] font-bold tracking-normal">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="sm:text-[#A8964E] sm:font-extrabold  sm:absolute sm:inline-flex sm:right-2 items-center p-0 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="text-[#333] lg:inline-flex sm:inline-flex lg:mr-[12px] sm:mr-10 lg:align-top sm:align-top ">
              <span className="flex">
                <span className="lg:text-[#333] sm:text-[#928244] sm:font-extrabold font-Montserrat flex items-center ">
                  <IoPersonOutline className="mr-[12px] lg:text-[16px] sm:text-[18px] lg:mt-0 sm:mt-[2px] sm:p-0 " />
                  <div className="lg:block sm:hidden">Sign In</div>
                </span>
              </span>
            </div>
            <div className="text-[#333] lg:flex pr-[12px]  align-top lg:before:border-r-[1px] before:border-r-[#999]  sm:hidden">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px]">
                  <div className="lg:block sm:hidden">Join Now</div>
                </span>
              </span>
            </div>
            <div className="text-[#333] lg:flex pr-[12px]  align-top lg:before:border-r-[1px] before:border-r-[#999] sm:hidden">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  <div className="lg:block sm:hidden">Find Reservations</div>
                </span>
              </span>
            </div>
            <div className="text-[#333] lg:flex pr-[12px]  align-top lg:before:border-r-[1px] before:border-r-[#999] sm:hidden">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  <IoGlobeOutline className="mr-[12px] text-[16px] sm:hidden lg:block" />
                  <div className="lg:block sm:hidden">English</div>
                </span>
              </span>
            </div>
            <div className="text-[#333] lg:flex pr-[12px]  align-top lg:before:border-r-[1px] before:border-r-[#999]  sm:hidden">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  <div className="lg:block sm:hidden">LKR</div>
                </span>
              </span>
            </div>
            <div className="text-[#333] lg:flex pr-[12px]  align-top lg:before:border-r-[1px] before:border-r-[#999] sm:hidden">
              {/* Header SignIn */}
              <span className="flex">
                {/* header-login-react-wrapper */}
                <span className="color-[#333] font-Montserrat flex items-center pl-[9px] ">
                  <IoPhonePortraitSharp className="mr-[12px] text-[16px] sm:hidden lg:block" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Display navbar items */}
      <NavItems />
    </>
  );
};

export default Navbar;
