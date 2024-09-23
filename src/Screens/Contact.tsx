import { FC } from "react";
import Pagination from "../Components/Pagination";
import ATags from "../Components/Buttons/ATags";
import CircularButton from "../Components/Buttons/CircularButton";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact: FC = () => {
  return (
    <>
      <div className="bg-[#000] py-10 px-5">
        <Pagination maintitle="Contact" title1="Home" title2="Contact" />
        {/* CONTACT FORM  */}
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center">
          <div>
            <p className="text-[#cbcbcb] font-semibold py-5">Get In Touch</p>
            <h1 className="text-white text-5xl">Let’s Talk For your</h1>
            <h1 className="text-yellow-300 text-5xl pt-2">Next Projects</h1>
            <p className="text-[#cbcbcb] font-semibold py-5 pt-5">
              Sed ut perspiciatis unde omnin natus <br /> totam rem aperiam
              eaque inventore veritatis
            </p>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-white">
                Main Address:
              </h3>
              <ATags title="Madurai, Tamil Nadu" to="#" />
              <ATags title="karthick.santhosh999@gmail.com" to="#" />
              <ATags title="8220942384" to="#" />
            </div>
            <h3 className="text-2xl font-semibold text-white pt-5">
              Follow Me:
            </h3>
            <div className="flex gap-3 mt-5">
              <CircularButton to="https://www.facebook.com/joshap.karthick/" icon={faFacebook} cls="border border-yellow-300" />
              <CircularButton to="#" icon={faInstagram} cls="border border-yellow-300" />
              <CircularButton to="#" icon={faWhatsapp} cls="border border-yellow-300" />
              <CircularButton to="https://linkedin.com/in/karthick-s-278678241" icon={faLinkedin} cls="border border-yellow-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">
                    Full Name <span className="text-yellow-300">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                />
                <div className="label">
                  <span className="label-text-alt text-white">
                    Full name is required
                  </span>
                </div>
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">
                    Email <span className="text-yellow-300">*</span>
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                />
                <div className="label">
                  <span className="label-text-alt text-white">
                    Email is required
                  </span>
                </div>
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">
                    Mobile <span className="text-yellow-300">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Mobile"
                  className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                />
                <div className="label">
                  <span className="label-text-alt text-white">
                    Mobile number is required
                  </span>
                </div>
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">
                    Subject <span className="text-yellow-300">*</span>
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="Subject"
                  className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                />
                <div className="label">
                  <span className="label-text-alt text-white">
                    Subject is required
                  </span>
                </div>
              </label>
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs bg-bgBrown"></textarea>
              <div className="label">
                <span className="label-text-alt text-white">
                  Message is required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
