import { FC } from 'react';
import aws from '../assets/images/home/aws.png'
import reactimg from '../assets/images/home/reactjs.png'
import express from '../assets/images/home/express.png'
import js from '../assets/images/home/javascript.png'
import typescript from '../assets/images/home/typescript.png'
import mongoDB from '../assets/images/home/mongoDB.png'
import redux from '../assets/images/home/redux.png'
import nodejs from '../assets/images/home/nodejs.png'
import OuterButton from '../Components/Buttons/OuterButton';
import logo from '../assets/images/home/logoPng.png';
import resume from '../assets/images/Karthick_Resume-16-08-2024.pdf';
import CircularButton from '../Components/Buttons/CircularButton';
import { faChevronRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { blogs, projects } from '../data/Data';
import { Link } from 'react-router-dom';

const Home: FC = () => {

  const skils = [
    {
      icon: reactimg,
      percentage: "95%"
    },
    {
      icon: js,
      percentage: "90%"
    },
    {
      icon: typescript,
      percentage: "90%"
    },
    {
      icon: mongoDB,
      percentage: "80%"
    },
    {
      icon: express,
      percentage: "95%"
    },
    {
      icon: nodejs,
      percentage: "80%"
    },
    {
      icon: redux,
      percentage: "90%"
    },
    {
      icon: aws,
      percentage: "40%"
    },
  ]

  return (
    <>
      {/* Home */}
      <section className='bg-bgBrown'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="h-auto overflow-hidden rounded-lg lg:order-last order-first lg:h-full">
              <img
                alt=""
                src={logo}
                className=" h-auto w-full object-cover mt-5"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-base text-[#cbcbcb]">Hi am</h2>
              <h2 className="text-4xl font-bold sm:text-4xl text-[#fff]">Karthick</h2>
              <h2 className="text-3xl text-yellow-300 font-bold sm:text-4xl">Software Engineering</h2>

              <p className="mt-4 text-[#fff]">
                Full stack developer with 1.2 Year of experience in
                working with HTML5, CSS3, JavaScript, TypeScript and its
                modernES6+ syntax and features to deliver exceptional
                client experience.
              </p>

              <a
                download={resume}
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-[#000] transition hover:bg-bgPrimary cursor-pointer hover:text-yellow-300 bg-bgYellow border hover:border-yellow-300"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MY RESUME */}
      <div className="grid md:grid-cols-4 bg-bgPrimary py-10">
        <div className="bg-bgPrimary max-w-xl col-span-1">
          <img src={logo} alt="" className='md:block hidden object-fill' loading='lazy' />
          <div className="rounded-full bg-bgBrown max-w-lg h-auto"><div className="h-34 w-34 bg-bgYellow rounded-full"></div></div>
        </div>
        <div className='col-span-3 bg-bgPrimary'>
          <div className="space-y-2 p-5">
            <p className='text-[#cbcbcb] text-base'>My Resume</p>
            <h3 className='text-5xl font-semibold text-white tracking-wide'>Real Problem Solutions</h3>
            <h3 className='text-5xl font-semibold text-yellow-300 tracking-wide'>Experience</h3>
          </div>
          <div className="bg-bgBrown rounded-xl me-4 mt-5">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              <div className="flex gap-5 flex-wrap col-span-2 p-5">
                <div>
                  <CircularButton to='#' icon={faChevronRight} />
                </div>
                <div className=''>
                  <p className='text-[#cbcbcb] text-base'>2021-2022</p>
                  <h5 className='text-2xl text-white whitespace-pre-wrap'>Software Test Engineer</h5>
                  <p className='text-[#6d6859] text-base'>Graspear</p>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap col-span-2 p-5">
                <div>
                  <CircularButton to='#' icon={faChevronRight} />
                </div>
                <div className=''>
                  <p className='text-[#cbcbcb] text-base'>2022-2023</p>
                  <h5 className='text-2xl text-white whitespace-pre-wrap'>Software Test Engineer</h5>
                  <p className='text-[#6d6859] text-base'>Inmakes</p>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap col-span-2 p-5">
                <div>
                  <CircularButton to='#' icon={faChevronRight} />
                </div>
                <div className=''>
                  <p className='text-[#cbcbcb] text-base'>2023-2024</p>
                  <h5 className='text-2xl text-white whitespace-pre-wrap'>Software Development Engineer</h5>
                  <p className='text-[#6d6859] text-base'>Wizinoa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILS */}
      <div className="grid md:grid-cols-2 grid-cols-1 h-auto bg-[#111308] px-5 py-10">
        <div className=''>
          <p className='text-base text-[#cbcbcb]'>My Skills</p>
          <div className='mt-5 space-y-2'>
            <h3 className='text-5xl font-semibold text-white tracking-wide'>Let's Explore Popular</h3>
            <h3 className='text-5xl font-semibold text-yellow-300 tracking-wide'>Skills & Experience</h3>
          </div>
          <div className="mt-5">
            <p className='text-sm text-[#cbcbcb] pr-5'>The list out tools are am using for web development, Here I list out few tools only. </p>
            <div className="mt-10">
              <OuterButton title='Contact Me' to='/contact' />
            </div>
          </div>
        </div>
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 grid-cols-2 mt-10 sm:mt-0 '>
          {
            skils && skils.map((item, i) => (
              <div key={i} className='flex flex-col gap-3 items-center justify-center bg-[#1f1f1f] h-auto w-32 p-5 rounded-lg group hover:ring-2 hover:ring-yellow-300 transition duration-300'>
                <img src={item.icon} alt="react" className='w-auto h-full group-hover:animate-pulse' />
                <button className='group-hover:bg-bgYellow bg-[#131313] text-[#cbcbcb] rounded-lg transition duration-300 py-1 px-10 group-hover:text-black font-semibold'>{item.percentage}</button>
              </div>
            ))
          }
        </div>
      </div>

      {/* LATEST WORK */}
      <div className="bg-bgBrown p-10 flex flex-col gap-5 justify-center items-center">
        <p className='text-center'>Latest Works</p>
        <div className='mt-5'>
          <h3 className='text-5xl font-semibold text-white tracking-wide text-center text-wrap'>Explore My Popular Projects</h3>
        </div>

        {
          projects && projects.map((item, i) => (
            item._id > "3" ? (
              <div className="grid md:grid-cols-2 grid-cols-1 mt-10" key={i}>
                <div>
                  <img src={item.pic} alt="project1" />
                </div>
                <div className='flex flex-col gap-10 justify-center items-start md:pl-10 pt-5 pl-0'>
                  <p className='text-yellow-300 font-semibold'>{item.title}</p>
                  <h1 className='text-5xl text-white font-semibold tracking-wide'>{item.subTitle}</h1>
                  <p className='text-[#cbcbcb] font-semibold'>{item.content}</p>
                  <CircularButton to='#' icon={faShare} />
                </div>
              </div>
            ) : ("")
          ))
        }
        <div className="flex justify-center items-center mt-5">
          <OuterButton title='View More Projects' to='/portfolio' icon={faChevronRight} />
        </div>
      </div>

      {/* LATEST NEWS */}
      <div className="bg-bgPrimary">
        <p className='text-center pt-5'>New & Blog</p>
        <div className='mt-5'>
          <h3 className='text-5xl font-semibold text-white tracking-wide text-center text-wrap'>Latest News & Blog</h3>
        </div>
        <section className="container px-6 py-4 mx-auto">
          <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">

            {
              blogs && blogs.map((item, i) => (

                <div key={i} className="flex items-center p-4 bg-white border-2 hover:border-yellow-300 rounded-lg shadow-sm dark:bg-gray-800 my-5 flex-wrap">
                  <img alt="mountain" className="w-60 rounded-md border-2 border-gray-300" src={item.pic} />
                  <div id="body" className="flex flex-col ml-5">
                    <Link to={`/blog/${item._id}`} id="name" className="text-xl font-semibold mb-2 text-white hover:text-yellow-300 cursor-pointer md:mt-0 mt-3">{item.title}</Link>
                    <p id="job" className="mt-2 text-[#cbcbcb]">{item.subTitle}</p>
                    <div className="flex mt-5">
                      <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                      <p className="ml-3">Karthick</p>
                    </div>
                  </div>
                </div>
              ))
            }

            {/* <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
              <div id="body" className="flex flex-col ml-5">
                <h4 id="name" className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <p id="job" className="text-gray-800 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="flex mt-5">
                  <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                  <p className="ml-3">John Doe</p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div >
    </>
  )
}

export default Home