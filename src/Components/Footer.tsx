import { FC } from "react";
import ATags from "./Buttons/ATags";
import logo from '../assets/images/home/logoPng.png'
import CircularButton from "./Buttons/CircularButton";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion'

const Footer: FC = () => {
  return (
    <>
      <div className="bg-bgPrimary grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-0 gap-10 p-5 py-10">
        <div>
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: 1, ease: "easeInOut" }}
            src={logo} alt="logo" className="w-auto h-80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}>
          <div>
            <h3 className="text-white text-2xl font-semibold">Quick Links</h3>
          </div>
          <div className="grid sm:grid-rows-5 gap-2 mt-5">
            <ATags title="Home" to="/" />
            <ATags title="About" to="/about" />
            <ATags title="Project" to="/project/1" />
            <ATags title="Contacts" to="/contact" />
            <ATags title="Portfolio" to="/portfolio" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}>
          <h3 className="text-2xl font-semibold text-white pt-5">
            Follow Me:
          </h3>
          <div className="flex gap-3 mt-5">
            <CircularButton to="https://www.facebook.com/joshap.karthick/" icon={faFacebook} cls="border border-yellow-300" />
            <CircularButton to="#" icon={faInstagram} cls="border border-yellow-300" />
            <CircularButton to="#" icon={faWhatsapp} cls="border border-yellow-300" />
            <CircularButton to="https://linkedin.com/in/karthick-s-278678241" icon={faLinkedin} cls="border border-yellow-300" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}>
          <h3 className="text-white text-2xl font-semibold">Address</h3>
          <div className="grid grid-rows-3 gap-3 mt-5">
            <ATags title="Madurai, Tamil Nadu" to="#" />
            <ATags title="karthck.sathosh1999@gmail.com" to="#" />
            <ATags title="8220942384" to="#" />
          </div>
        </motion.div>
      </div >

      <div className="grid sm:grid-flow-col  pt-5 justify-between  p-5 bg-bgBrown text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}>
          <h1 className="text-xl font-semibold">Copyright @2023, Karthick All Rights Reserved</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="flex gap-5 flex-wrap sm:pt-0 pt-5">
          <ATags title="Facebook" to="https://www.facebook.com/joshap.karthick/" />
          <ATags title="Twitter" to="#" />
          <ATags title="Instagram" to="#" />
          <ATags title="Linkedin" to="https://linkedin.com/in/karthick-s-278678241" />
        </motion.div>
      </div >
    </>
  );
};

export default Footer;
