import React from "react";
import heroAudioTrack from "../assets/images/hero/audio-track-img.png";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto px-3 xl:px-0 pt-[102px] pb-24 lg:pb-[152px]">
      <div className="flex justify-between gap-[106px] flex-col   lg:flex-row ">
        <div className="max-w-[466px]">
          <h2 className="heading-1 mb-8">Become The Hero Of Your Story</h2>
          <p className="body-text leading-8 mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <div className=" flex ">
            <input
              type="email"
              className="w-[60%] sm:w-[332px] bg-[#F4F2FF] border-0 focus:outline-none pl-4 placeholder:text-[#AFB0B9]"
              placeholder="Enter Your Email Id"
            />
            <div>
              {" "}
              <button
                type="submit"
                className=" primary-btn text-[#F4F2FF] py-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src={heroAudioTrack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
