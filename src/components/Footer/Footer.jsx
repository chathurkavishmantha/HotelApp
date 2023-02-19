import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full -top-[99px] mt-[100px]">
        <div className="footer absolute w-[100%] h-[144px]  bg-gradient-to-b from-[#fffdfd00] to-[#e6dff5]  bg-cover">
          <img
            className="w-full"
            src="https://www.cinnamonhotels.com/themes/cinnamon/images/footer-bg.png"
            alt=""
          />
        </div>
        <a className="font-BodoniModa absolute  flex right-[10%]" href="">
          <img
            className="w-[150px] h-[150px] rounded-[50%] "
            src="https://www.cinnamonhotels.com/themes/cinnamon/images/stay-round.png"
            alt=""
          />

          <p className="absolute text-[#ffff] font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Scroll Up
          </p>
        </a>
        <div className="grid grid-cols-4 w-[1180px] m-auto pt-[100px]">
          <div className="">
            <h4 className="text-[#77328b] text-[24px] font-BodoniModa font-600 mt-[50px]">
              About
            </h4>
            <ul className="m-0 p-0">
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                About Cinnamon Hotels & Resorts
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Media & Accolades
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Gallery
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                CSR & Sustainability
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                John Keells Group
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Cinnamon Air
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Nature Trails
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Cinnamon Box Office
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Terms & Conditions
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Privacy Statement
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#77328b] text-[24px] font-BodoniModa font-600 mt-[50px]">
              Get In Touch
            </h4>
            <ul>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Know Sri Lanka
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Know Maldives
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Contact Us
              </li>
            </ul>
            <h4 className="text-[#77328b] text-[24px] font-BodoniModa font-600 mt-[50px]">
              Sections
            </h4>
            <ul>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Careers
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Blog
              </li>
              <li className="text-[15px] text-[#9a9a9a] font-Roboto py-[10px] block">
                Cinnamon Affiliate Programme
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-[#77328b] text-[24px] font-BodoniModa font-600 mt-[50px]">
              Follow Us
            </h4>
            <ul className="flex">
              <li className="text-[24px] mr-[15px] px-[5px] text-[#9a9a9a] font-Roboto py-[10px] block">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="text-[24px] mr-[15px] px-[5px] text-[#9a9a9a] font-Roboto py-[10px] block">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="text-[24px] mr-[15px] px-[5px] text-[#9a9a9a] font-Roboto py-[10px] block">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
              <li className="text-[24px] mr-[15px] px-[5px] text-[#9a9a9a] font-Roboto py-[10px] block">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="text-[24px] mr-[15px] px-[5px] text-[#9a9a9a] font-Roboto py-[10px] block">
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>

            <h4 className="text-[#77328b] text-[24px] font-BodoniModa font-600 mt-[50px]">
              Get Cinnamon in your inbox
            </h4>
            <div
              className=" border-solid border-[1px] border-[#d3d4e4] mt-[20px] w-[75%] relative table border-separate"
              name=""
              id=""
              cols="30"
              rows="1"
            >
              <input
                className="w-[83%] p-[30px] text-[15px] h-[82px] rounded-0 text-[#9a9a9a] border-[#d3d4e4] border-r-0 font-Roboto "
                type="text"
                name=""
                id=""
                placeholder="Email Address"
              />
              <span className="relative whitespace-nowrap w-[1%] align-middle">
                <button className="absolute p-[25px]  bg-[#fffff] border-solid  border-[#d3d4e5] border-l-0 -mr-[1px]">
                  <span>
                    <img
                      className="absolute inline-block top-[60%] h-[20px] "
                      src="https://www.cinnamonhotels.com/themes/cinnamon/images/svg/right-arw.svg"
                      alt=""
                    />
                  </span>
                </button>
              </span>
            </div>
            <div className="mt-[30px] w-[75%] font-Roboto text-[#9a9a9a9a] text-[13px] block relative pl-[20px] mb-[12px] cursor-pointer">
              <label
                className="relative pl-[40px] -ml-[20px] z-1 inline-block max-w-[100%] mb-[5px] font-bold"
                htmlFor="#"
              >
                <input
                  className="opacity-0 -ml-[15px]"
                  type="checkbox"
                  name=""
                  id=""
                />
                By Checking this box, I consent to the processing of my Personal
                Data by Cinnamon for the purpose and within the Conditions set
                out in this form and the
                <a className="text-black ml-1" href="#">
                  Cinnamon Data Protection Policy
                </a>
              </label>
              <span className="absolute top-0 left-0 h-[25px] w-[25px] bg-[#9a9a9a9a] rounded-[50%]"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="top-5">
        <img
          className="relative bg-no-repeat bg-bottom w-full"
          src="https://www.cinnamonhotels.com/themes/cinnamon/images/footer-bg2.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Footer;
