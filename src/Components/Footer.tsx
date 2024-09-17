import { FC } from "react";
import ATags from "./Buttons/ATags";
import logo from '../assets/images/logo.png'

const Footer: FC = () => {
  return (
    <>
      <div className="bg-bgPrimary grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-0 gap-10 p-5 py-10">
        <div>
          <img src={logo} alt="logo" className="w-auto h-10"/>
        </div>
        <div>
          <div>
            <h3 className="text-white text-2xl font-semibold">Quick Links</h3>
          </div>
          <div className="grid sm:grid-cols-4 mt-5">
            <ATags title="Service" to="/service" />
            <ATags title="Projects" to="/Projects" />
            <ATags title="Faqs" to="/Faqs" />
            <ATags title="Contacts" to="/Contacts" />
          </div>
          <div className="mt-5 flex gap-2 flex-wrap">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="px-4 py-3 bg-bgYellow hover:bg-bgPrimary hover:text-yellow-300 rounded-lg hover:ring-2 hover:ring-yellow-300 transition duration-300">
              SignUp
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-white text-2xl font-semibold">Address</h3>
          <div className="grid grid-rows-3 gap-3 mt-5">
            <ATags title="Madurai, Tamil Nadu" to="#" />
            <ATags title="karthck.sathosh1999@gmail.com" to="#" />
            <ATags title="8220942384" to="#" />
          </div>
        </div>
      </div>


      <div className="grid sm:grid-flow-col  pt-5 justify-between  p-5 bg-bgBrown text-white">
        <div>
          <h1 className="text-xl font-semibold">Copyright @2023, Karthick All Rights Reserved</h1>
        </div>
        <div className="flex gap-5 flex-wrap sm:pt-0 pt-5">
          <ATags title="Facebook" to="#" />
          <ATags title="Twitter" to="#" />
          <ATags title="Instagram" to="#" />
          <ATags title="Linkedin" to="#" />
        </div>
      </div>
    </>
  );
};

export default Footer;
