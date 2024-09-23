import { FC } from "react";
import aboutPng from "../assets/images/about/about-page.jpg";
import Pagination from "../Components/Pagination";
import faqImg from "../assets/images/about/fqa.png"
import about_man from "../assets/images/about/about-man.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import OuterButton from "../Components/Buttons/OuterButton";
import PopularCard from "../Components/Cards/PopularCard";
import { faqs } from "../data/Data";

export interface IFaq {
  question: string,
  answer: string
}

const About: FC = () => {
  return (
    <>
      <div className="bg-bgPrimary">
        <Pagination maintitle="About Me" title1="Home" title2="About" />
        <img src={aboutPng} alt="aboutpng" className="w-auto h-[100%] p-5" />
        {/* About Me */}
        <div className=" grid md:grid-cols-4 grid-cols-1 p-5 justify-center">
          <div className="col-span-2 flex flex-col gap-5 space-y-6">
            <p className="text-base text-[#cbcbcb] text-left">About Me</p>
            <h3 className="text-4xl font-semibold text-white">Professional Problem Solutions For Digital Products</h3>
            <h5 className="text-base text-[#cbcbcb]">At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum</h5>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <p className="text-white text-xl font-semibold"><FontAwesomeIcon icon={faCheck} className="text-yellow-300 pr-2" fontSize={20} />Branding & Design</p>
              <p className="text-white text-xl font-semibold"><FontAwesomeIcon icon={faCheck} className="text-yellow-300 pr-2" fontSize={20} />
                Web Development</p>
              <p className="text-white text-xl font-semibold"><FontAwesomeIcon icon={faCheck} className="text-yellow-300 pr-2" fontSize={20} />
                Digital Marketing</p>
              <p className="text-white text-xl font-semibold"><FontAwesomeIcon icon={faCheck} className="text-yellow-300 pr-2" fontSize={20} />
                Product Design</p>
            </div>
            <div className="py-5">
              <OuterButton title="Learn More" icon={faChevronRight} to="#" />
            </div>
          </div>
          <div className="col-span-2 relative">
            <img src={about_man} alt="aboutMan" className="h-auto w-auto" />
            <div className="rounded-full xl:h-48 xl:w-48 lg:h-36 lg:w-36 md:h-32 md:w-32 hidden md:flex flex-col justify-center items-center bg-bgYellow absolute 2xl:top-32 2xl:left-96 xl:top-32 xl:right-28 lg:top-32 lg:right-9 md:top-28 md:right-0 ">
              <h1 className="text-[#000] lg:text-5xl md:text-3xl font-bold">1+</h1>
              <h1 className="text-[#000] lg:text-xl md:text-base font-semibold">Years of</h1>
              <h1 className="text-[#000] lg:text-xl md:text-base font-semibold">Experience</h1>
            </div>
          </div>
        </div>
      </div>
      {/* popular Services */}
      <div className="pt-14 p-5 bg-bgBrown">
        <p className="text-base text-center text-[#ababab]">
          Popular Services
        </p>
        <h1 className="text-white text-center text-4xl font-semibold mt-5">
          My <span className="text-yellow-300">Special Service</span> For your
        </h1>
        <h1 className="text-white text-center text-4xl font-semibold mt-2">
          Business Development
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <PopularCard title="Web Development" subTitle="MERN Stack Application" no="01" icon={faArrowUpRightFromSquare} />
          <PopularCard title="React Navite" subTitle="Mobile App Development" no="02" icon={faArrowUpRightFromSquare} />
          <PopularCard title="Aws" subTitle="EC2, S3, IAM" no="03" icon={faArrowUpRightFromSquare} />
          <PopularCard title="Ubuntu" subTitle="Ubuntu OS with Apache server" no="04" icon={faArrowUpRightFromSquare} />
          <PopularCard title="Programming Language" subTitle="JavaScript, TypeScript and Python" no="05" icon={faArrowUpRightFromSquare} />
          <PopularCard title="Testing Experience" subTitle="Develop a application without bugs" no="06" icon={faArrowUpRightFromSquare} />
        </div>
      </div>
      {/* FAQ */}
      <div className="text-center tracking-wider bg-bgPrimary pt-10">
        <p className="text-base text-[#cbcbcb]">FAQ'S</p>
        <h1 className="text-4xl font-semibold text-[#fff]">This FAQ section showcases</h1>
        <h1 className="text-4xl font-semibold text-[#fff]">My <span className="text-yellow-300">Technical</span> expertise</h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 px-5 bg-bgPrimary">
        <div className="space-y-4 my-5 flex flex-col justify-center">
          {
            faqs && faqs.map((item, i) => (
              <details className="group [&_summary::-webkit-details-marker]:hidden bg-bgPrimary rounded-xl" key={i}>
                <summary
                  className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-yellow-300"
                >
                  <h2 className="text-xl">{item.question}</h2>
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <p className="p-4 leading-relaxed ttext-white">
                  {item.answer}
                </p>
              </details>
            ))
          }
        </div>
        <div className="flex justify-center items-center">
          <img src={faqImg} alt="faqimg" loading="lazy" className="h-auto w-fit" />
        </div>
      </div>
    </>
  );
};

export default About;
