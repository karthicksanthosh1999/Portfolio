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
import resume from '../assets/images/karthick_mern.pdf';
import CircularButton from '../Components/Buttons/CircularButton';
import { faChevronRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { blogs, projects } from '../data/Data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const text = " Full stack developer with 1.3 Year of experience in working with HTML5, CSS3, JavaScript, TypeScript and its modernES6 + syntax and features to deliver exceptional client experience.".split(" ");

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

            <div className="lg:py-24 space-y-5">
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-base text-[#cbcbcb]">Hi am</motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold sm:text-7xl text-[#fff]">Karthick</motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-3xl text-yellow-300 font-bold sm:text-4xl">Software Engineering</motion.h2>

              <div className="">
                {text.map((el, i) => (
                  <motion.span className=''
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </div>
              <motion.a
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                href={resume}
                download='karthick-MERN.pdf'
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-[#000] transition hover:bg-bgPrimary cursor-pointer hover:text-yellow-300 bg-bgYellow border hover:border-yellow-300"
              >
                Resume
              </motion.a>
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
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
            className="space-y-2 p-5">
            <p className='text-[#cbcbcb] text-base'>My Resume</p>
            <h3 className='text-5xl font-semibold text-white tracking-wide'>Real Problem Solutions</h3>
            <h3 className='text-5xl font-semibold text-yellow-300 tracking-wide'>Experience</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
            className="bg-bgBrown rounded-xl me-4 mt-5">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              <div className="flex gap-5 flex-wrap col-span-2 p-5">
                <CircularButton to='#' icon={faChevronRight} cls="border border-yellow-300" />
                <div className=''>
                  <p className='text-[#cbcbcb] text-base'>2021-2022</p>
                  <h5 className='text-2xl text-white whitespace-pre-wrap'>Software Test Engineer</h5>
                  <p className='text-[#6d6859] text-base'>Graspear</p>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap col-span-2 p-5">
                <CircularButton to='#' icon={faChevronRight} cls="border border-yellow-300" />
                <div className=''>
                  <p className='text-[#cbcbcb] text-base'>2022-2023</p>
                  <h5 className='text-2xl text-white whitespace-pre-wrap'>Software Test Engineer</h5>
                  <p className='text-[#6d6859] text-base'>Inmakes</p>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap col-span-2 p-5">
                <CircularButton to='#' icon={faChevronRight} cls="border border-yellow-300" />
                <div className=''>
                  <p className='text-[#cbcbcb] text-base'>2023-2024</p>
                  <h5 className='text-2xl text-white whitespace-pre-wrap'>Software Development Engineer</h5>
                  <p className='text-[#6d6859] text-base'>Wizinoa</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SKILS */}
      <div className="grid md:grid-cols-2 grid-cols-1 h-auto bg-[#111308] px-5 py-10">
        <div className=''>
          <p className='text-base text-[#cbcbcb]'>My Skills</p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
            className='mt-5 space-y-2'>
            <h3 className='text-5xl font-semibold text-white tracking-wide'>Let's Explore Popular</h3>
            <h3 className='text-5xl font-semibold text-yellow-300 tracking-wide'>Skills & Experience</h3>
          </motion.div>
          <div className="mt-5">
            <p className='text-sm text-[#cbcbcb] pr-5'>The list out tools are am using for web development, Here I list out few tools only. </p>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
              className="mt-10">
              <OuterButton title='Contact Me' to='/contact' />
            </motion.div>
          </div>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-2 mt-10 sm:mt-0 justify-items-center'>
          {
            skils && skils.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 items-center justify-center bg-[#1f1f1f] h-auto w-32 p-5 rounded-lg group hover:ring-2 hover:ring-yellow-300 transition duration-300"
                // whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: .5, ease: 'easeIn' }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={item.icon}
                  alt='item.iconAlt'
                  className="w-auto h-full group-hover:animate-pulse"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, delay: .5, ease: 'easeIn' }}
                />
                <motion.button
                  className="group-hover:bg-bgYellow bg-[#131313] text-[#cbcbcb] rounded-lg transition duration-300 py-1 px-10 group-hover:text-black font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.percentage}
                </motion.button>
              </motion.div>
            ))
          }
        </div>
      </div>

      {/* LATEST WORK */}
      <div className="bg-bgBrown p-10 flex flex-col gap-5 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, ease: 'easeIn' }}>
          <p className='text-center'>Latest Works</p>
          <div className='mt-5'>
            <h3 className='md:text-5xl text-4xl font-semibold text-white tracking-wide text-center text-wrap'>Explore My Popular <span className='text-yellow-300'>Projects</span></h3>
          </div>
        </motion.div>
        {projects && projects.map((item, i) => (
          item._id > "3" ? (
            <div className="grid md:grid-cols-2 grid-cols-1 mt-10" key={i}>
              {/* Left to Right or Right to Left animation */}
              <motion.div
                initial={{ x: i % 2 === 0 ? -200 : 200, opacity: 0 }}  // Left to Right for even index, Right to Left for odd
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img src={item.pic} alt={item.title} />
              </motion.div>

              <motion.div
                className='flex flex-col gap-10 justify-center items-start md:pl-10 pt-5 pl-0'
                initial={{ x: i % 2 === 0 ? 200 : -200, opacity: 0 }}  // Opposite of image's animation
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <p className='text-yellow-300 font-semibold'>{item.title}</p>
                <h1 className='text-3xl text-white font-semibold tracking-wide'>{item.subTitle}</h1>
                <p className='text-[#cbcbcb] font-semibold'>{item.content}</p>
                <CircularButton to='#' icon={faShare} />
              </motion.div>
            </div>
          ) : ("")
        ))}
        <div className="flex justify-center items-center mt-5">
          <OuterButton title='View More Projects' to='/portfolio' icon={faChevronRight} />
        </div>
      </div>

      {/* LATEST NEWS */}
      <div className="bg-bgPrimary overflow-hidden">
        <p className='text-center pt-5'>New & Blog</p>
        <div className='mt-5'>
          <h3 className='text-5xl font-semibold text-white tracking-wide text-center text-wrap'>Latest News & Blog</h3>
        </div>
        <section className="container px-6 py-4 mx-auto">
          <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">

            {
              blogs && blogs.map((item, i) => (

                <motion.div
                  initial={{ x: i % 2 === 0 ? -200 : 200, opacity: 0 }}  // Left to Right for even index, Right to Left for odd
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  key={i}
                  className="flex items-center p-4 bg-white border-2 hover:border-yellow-300 rounded-lg shadow-sm dark:bg-gray-800 my-5 flex-wrap">
                  <img alt="mountain" className="w-60 rounded-md border-2 border-gray-300" src={item.pic} />
                  <div id="body" className="flex flex-col ml-5">
                    <Link to={`/blog/${item._id}`} id="name" className="text-xl font-semibold mb-2 text-white hover:text-yellow-300 cursor-pointer md:mt-0 mt-3">{item.title}</Link>
                    <p id="job" className="mt-2 text-[#cbcbcb]">{item.subTitle}</p>
                    <div className="flex mt-5">
                      <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                      <p className="ml-3">Karthick</p>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </section>
      </div >
    </>
  )
}

export default Home