"use client";
import { useState } from "react";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    setToggle(e.target.checked);
    console.log(e.target.checked);
  };

  return (
      <div className="relative h-full w-full ">
      <div className="flex flex-col flex-wrap items-center overflow-x-hidden ">
        {/* background images */}
        <div className="absolute max-lg:right-[-194px] max-lg:top-[-23px] lg:right-0 lg:top-0 ">
          <img
            src="/images/bg-top.svg"
            alt=""
            className="max-lg:w-auto lg:2xl:w-[450px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 ">
          <img
            src="/images/bg-bottom.svg"
            alt=""
            className="max-lg:hidden 2xl:w-[450px]"
          />
        </div>
        {/* header  */}
        <h1 className="mb-12 text-[#6e718c] max-lg:mt-20 max-lg:text-3xl lg:mt-24 lg:text-4xl">
          Our Pricing
        </h1>
        {/* toggle bar */}
        <div className="toggleBar  flex items-center max-lg:mb-20 lg:mb-24">
          <span className="text-[#b3b5c6]">Annually</span>
          <label className="relative mx-6 inline-block h-[34px] w-[60px] transition-all hover:opacity-50">
            <input
              type="checkbox"
              name="toggle"
              checked={toggle}
              onChange={handleToggle}
              className="h-0 w-0 opacity-0"
            />
            <span className="slider slider-before"></span>
          </label>
          <span className="text-[#b3b5c6]">Monthly</span>
        </div>
        {/* pricing */}
        <div className="grid text-center max-lg:mb-[85px] max-lg:grid-rows-3 max-lg:gap-y-8 lg:grid-cols-3 max-lg:px-4">
          {/* first */}
          <div className="pricing-container  max-lg:rounded-lg lg:mb-[85px] lg:ml-[15px] lg:mr-[-15px] lg:rounded-l-lg">
            <h3 className="pricing-head">Basic</h3>
            {!toggle ? (
              <p className="pricing-value ">
                <span className="pricing-dollar">$</span>
                199.99
              </p>
            ) : (
              <p className="pricing-value px-[4.38rem]">
                <span className="pricing-dollar max-lg:left-[40px] lg:left-[35px]">
                  $
                </span>
                19.99
              </p>
            )}
            <p className="pricing-features">500 GB Storage</p>
            <p className="pricing-features">2 Users Allowed</p>
            <p className="pricing-features">send up to 3 GB</p>
            <a href="" className=" pricing-learn pricing-learn-hover ">
              learn more
            </a>
          </div>
          {/* second */}
          <div className="pricing-container  z-[1] justify-self-center rounded-lg bg-gradient-to-br from-[#a3a8f0] to-[#696fdd] px-7 lg:mt-[-25px] lg:h-[520px] lg:w-[370px] lg:pt-12">
            <h3 className="pricing-head text-white">Professional</h3>
            {!toggle ? (
              <p className="pricing-value border-[#a3a8f0] text-white">
                <span className="pricing-dollar left-[7px] border-[#a3a8f0] text-white">
                  $
                </span>
                249.99
              </p>
            ) : (
              <p className="pricing-value border-[#a3a8f0] text-white">
                <span className="pricing-dollar border-[#a3a8f0] text-white max-lg:left-[9px] max-lg:top-[18px] lg:left-[15px] ">
                  $
                </span>
                24.99
              </p>
            )}
            <p className="pricing-features border-[#a3a8f0] text-white">
              1TB Storage
            </p>
            <p className="pricing-features border-[#a3a8f0] text-white">
              5 Users Allowed
            </p>
            <p className="pricing-features border-[#a3a8f0] text-white">
              send up to 10 GB
            </p>
            <a
              href=""
              className="  mb-3 mt-8  block w-full rounded-md bg-white py-3 text-sm uppercase tracking-widest text-[#696fdd] transition-all hover:bg-gradient-to-br hover:from-[#8a90e8] hover:to-[#6e74df] hover:text-white hover:outline hover:outline-[1px] hover:outline-white hover:duration-300  "
            >
              learn more
            </a>
          </div>
          {/* third */}
          <div className="pricing-container max-lg:rounded-lg lg:mb-[85px] lg:ml-[-15px] lg:mr-[15px] lg:rounded-r-lg">
            <h3 className="pricing-head ">Master</h3>
            {!toggle ? (
              <p className="pricing-value ">
                <span className="pricing-dollar">$</span>399.99
              </p>
            ) : (
              <p className="pricing-value ">
                <span className="pricing-dollar max-lg:left-[10px] lg:left-[30px]">
                  $
                </span>
                39.99
              </p>
            )}
            <p className="pricing-features">2 TB Storage</p>
            <p className="pricing-features">10 Users Allowed</p>
            <p className="pricing-features">send up to 20 GB</p>
            <a href="" className="pricing-learn  pricing-learn-hover">
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
