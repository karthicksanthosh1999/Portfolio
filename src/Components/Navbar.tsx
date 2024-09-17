import { FC, useState } from "react";
import CircularButton from "./Buttons/CircularButton";
import { TiSocialFacebook } from "react-icons/ti";
import ATags from "./Buttons/ATags";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const isLocationTrue = useLocation().pathname;

  return (
    <>
      <div className="navbar bg-[#000] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="#000"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#000] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="logo" className="w-auto h-7" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1 bg-[#000]">
            <li>
              <Link
                to={"/"}
                className={`hover:text-yellow-300 text-base ${
                  isLocationTrue === "/" ? "text-yellow-300" : ""
                } `}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`hover:text-yellow-300 text-base ${
                  isLocationTrue === "/about" ? "text-yellow-300" : ""
                } `}>
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/portfolio"}
                className={`hover:text-yellow-300 text-base ${
                  isLocationTrue === "/portfolio" ? "text-yellow-300" : ""
                } `}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={"/blog"}
                className={`hover:text-yellow-300 text-base ${
                  isLocationTrue === "/blog" ? "text-yellow-300" : ""
                } `}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={`hover:text-yellow-300 text-base ${
                  isLocationTrue === "/contact" ? "text-yellow-300" : ""
                } `}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={openNav}>
            &#9776;
          </a>
        </div>
      </div>

      <div
        id="mySidenav"
        style={{
          width: isOpen ? "400px" : "0",
          transition: "0.5s",
          height: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          backgroundColor: "#111",
          overflowX: "hidden",
          paddingTop: "60px",
        }}>
        <a
          href="#"
          className="closebtn"
          onClick={closeNav}
          style={{
            float: "inline-end",
            color: "white",
            padding: "8px 8px 8px 20px",
            display: "block",
          }}>
          &times;
        </a>
        <div>
          <div className="p-5">
            <h4 className="text-white text-3xl">
              Unique Digital Ideas for Successful Business
            </h4>
            <p className="text-[#cbcbcb] mt-5">
              Sed ut perspiciatis unde omnin natus totam rem aperiam eaque.
            </p>
            <p className="text-white text-lg font-semibold mt-5">My Address</p>
            <div className="flex flex-col gap-2 mt-3">
              <ATags title="Madurai, Tamil Nadu" to="#" textSize="text-base" />
              <ATags
                title="karthick.santhosh1999@gmail.com"
                to="#"
                textSize="text-base block"
              />
              <ATags title="8220942384" to="#" textSize="text-base" />
            </div>

            <p className="text-white text-lg font-semibold mt-5">Follow Me</p>
            {/* SOCIAL MEDIA */}
            <div className="flex gap-3 justify-start items-center mt-3">
              <CircularButton icon={TiSocialFacebook} />
              <CircularButton icon={TiSocialFacebook} />
              <CircularButton icon={TiSocialFacebook} />
              <CircularButton icon={TiSocialFacebook} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
