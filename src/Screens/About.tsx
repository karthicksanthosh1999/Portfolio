import { FC } from "react";
import CircularButton from "../Components/Buttons/CircularButton";
import aboutPng from "../assets/images/about/about-page.jpg";
import Pagination from "../Components/Pagination";

const About: FC = () => {
  return (
    <div className="bg-bgPrimary">
      <Pagination maintitle="About Me" title1="Home" title2="About" />

      <img src={aboutPng} alt="aboutpng" className="w-auto h-[100%] p-5" />

      <div className="">
        <div className="mt-14">
          <p className="text-base text-center text-[#ababab]">
            Popular Services
          </p>
          <h1 className="text-white text-center text-4xl font-semibold mt-5">
            My <span className="text-yellow-300">Special Service</span> For your
          </h1>
          <h1 className="text-white text-center text-4xl font-semibold mt-2">
            Business Development
          </h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-8">
          <div className="grid sm:grid-cols-3 grid-rows-3 bg-bgBrown group relative rounded-xl bg-gray-800 text-white p-6 hover:border hover:border-lime-400 transition">
            <div>
              <span className="text-2xl font-bold text-lime-400">01</span>
            </div>
            <div className="flex flex-col sm:grid sm:justify-start">
              <h3 className="mt-2 text-xl font-semibold">
                Brand Identity Design
              </h3>
              <p className="mt-2 text-sm">
                Dignissimos ducimus blanditiis praesent
              </p>
            </div>
            <div className="sm:grid sm:justify-center group-hover:bg-lime-400 rounded-full p-3 bg-gray-700 transition cursor-pointer">
              <CircularButton icon={"$"} cls="group-hover: bg-bg-bgYellow" />
            </div>
          </div>
          <div className="group relative flex items-center justify-between rounded-xl bg-gray-800 text-white p-6 hover:border hover:border-lime-400 transition">
            <div>
              <div className="flex justify-center items-center gap-10">
                <span className="text-2xl font-bold text-lime-400">01</span>
                <div className="flex flex-col">
                  <h3 className="mt-4 text-xl font-semibold">
                    Brand Identity Design
                  </h3>
                  <p className="mt-2 text-sm">
                    Dignissimos ducimus blanditiis praesent
                  </p>
                </div>
              </div>
            </div>
            <div className="group-hover:bg-lime-400 rounded-full p-3 bg-gray-700 transition cursor-pointer">
              <CircularButton icon={"$"} cls="group-hover: bg-bg-bgYellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
