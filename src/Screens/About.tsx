import {FC} from "react";
import ATags from "../Components/Buttons/ATags";
import CircularButton from "../Components/Buttons/CircularButton";

const About:FC = () => {
  return (
    <div className="bg-bgPrimary">
      <div className="bg-bgBrown">
        <div>
          <h1 className="text-5xl font-semibold text-white text-center">
            About Me
          </h1>
          <div className="flex text-white font-semibold justify-center items-center mt-5 gap-5">
            <p className="text-center">Home</p>
            <p>*</p>
            <p className="text-yellow-300">About</p>
          </div>
        </div>
      </div>

      <div className="">
            <div className="mt-14">
                <p className="text-base text-center text-[#ababab]">Popular Services</p>
                <h1 className="text-white text-center text-4xl font-semibold mt-5">My <span className="text-yellow-300">Special Service</span> For your</h1>
                <h1 className="text-white text-center text-4xl font-semibold mt-2">Business Development</h1>
            </div>
            <div className="grid grid-cols-2 gap-6 p-8">
              <div className="group relative flex items-center justify-between rounded-xl bg-gray-800 text-white p-6 hover:border hover:border-lime-400 transition">
                <div>
                  <div className="flex justify-center items-center gap-10">
                    <span className="text-2xl font-bold text-lime-400">01</span>
                    <div className="flex flex-col">
                      <h3 className="mt-4 text-xl font-semibold">Brand Identity Design</h3>
                      <p className="mt-2 text-sm">Dignissimos ducimus blanditiis praesent</p>
                    </div>
                  </div>
                </div>
                <div className="group-hover:bg-lime-400 rounded-full p-3 bg-gray-700 transition cursor-pointer">
                <CircularButton icon={"$"} />
                </div>
              </div>
              <div className="group relative flex items-center justify-between rounded-xl bg-gray-800 text-white p-6 hover:border hover:border-lime-400 transition">
                <div>
                  <span className="text-2xl font-bold text-lime-400">01</span>
                  <h3 className="mt-4 text-xl font-semibold">Brand Identity Design</h3>
                  <p className="mt-2 text-sm">Dignissimos ducimus blanditiis praesent</p>
                </div>
                <div className="group-hover:bg-lime-400 rounded-full p-3 bg-gray-700 transition">
                  <span className="text-white group-hover:text-gray-800">→</span>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
