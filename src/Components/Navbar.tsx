import { FC } from "react";
import logo from '../assets/images/home/logoSVG.svg';
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const isLocationTrue = useLocation().pathname;
  return (
    <>
      <div className="navbar bg-[#000] text-white fixed z-50">
        <div className="navbar-start">
          <Link className="btn btn-ghost flex justify-center items-center" to="/">
            <img src={logo} alt="logo" className="w-auto h-10" />
            <h3 className="md:text-2xl text-xl">karthick</h3>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-5 px-1 bg-[#000]">
            <li>
              <Link
                to={"/"}
                className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/" ? "text-yellow-300" : ""
                  } `}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/about" ? "text-yellow-300" : ""
                  } `}>
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/portfolio"}
                className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/portfolio" ? "text-yellow-300" : ""
                  } `}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={"/blog/1"}
                className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/blog" ? "text-yellow-300" : ""
                  } `}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/contact" ? "text-yellow-300" : ""
                  } `}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden flex">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost flex lg:hidden">
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
                <Link
                  to={"/"}
                  className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/" ? "text-yellow-300" : ""
                    } `}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/about" ? "text-yellow-300" : ""
                    } `}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolio"}
                  className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/portfolio" ? "text-yellow-300" : ""
                    } `}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog/1"}
                  className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/blog" ? "text-yellow-300" : ""
                    } `}>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={`hover:text-yellow-300 text-xl  ${isLocationTrue === "/contact" ? "text-yellow-300" : ""
                    } `}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
