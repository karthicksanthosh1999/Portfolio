import { ChangeEventHandler, FC, FocusEventHandler, FormEventHandler, useState } from "react";
import Pagination from "../Components/Pagination";
import ATags from "../Components/Buttons/ATags";
import CircularButton from "../Components/Buttons/CircularButton";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import emailjs from 'emailjs-com';

interface IContact {
  fullName: string,
  email: string,
  mobile: string,
  subject: string,
  message: string,
}

const Contact: FC = () => {

  const [errors, setErrors] = useState<Partial<IContact>>({})
  const [contacts, setContacts] = useState<IContact>({
    email: "",
    fullName: "",
    message: "",
    mobile: "",
    subject: "",
  })


  const handleValidation = () => {
    const newErrors: Partial<IContact> = {};
    if (!contacts.email) {
      newErrors.email = "Email is required!"
    }
    if (!contacts.fullName) {
      newErrors.fullName = "Full Name is required!"
    }
    if (!contacts.mobile) {
      newErrors.mobile = "Mobile is required!"
    }
    if (!contacts.subject) {
      newErrors.subject = "Subject is required!"
    }
    if (!contacts.message) {
      newErrors.message = "Message is required!"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setContacts((preV) => ({
      ...preV, [name]: value
    }))
  }

  const handleFocuse: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name } = event.target;
    setErrors((preV) => ({
      ...preV, [name]: ""
    }))
  }

  const handleResetForm = () => {
    setContacts({
      email: "",
      fullName: "",
      message: "",
      mobile: "",
      subject: "",
    })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log(contacts)
      handleResetForm()
      // Replace with your EmailJS service, template, and user IDs
      // const serviceID = 'handleResetForm';
      // const templateID = 'template_mr9ityf';
      // const userID = 'J8bIfik-Gi_eXY-trUzP3';

      // await emailjs.send(serviceID, templateID, contacts, userID)
      //   .then((response) => {
      //     console.log('Email sent successfully!', response);
      //     handleResetForm()
      //   })
      //   .catch((err) => {
      //     console.error('Failed to send email:', err);
      //   });
    }
  }

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
          {/* Form Section */}
          <form onSubmit={handleSubmit} noValidate className="md:mt-0 sm:mt-5">
            <div className="grid grid-cols-1 gap-5">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">
                        Full Name <span className="text-yellow-300">*</span>
                      </span>
                    </div>
                    <input
                      onChange={handleChange}
                      onFocus={handleFocuse}
                      value={contacts.fullName}
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                    />
                    <div className="label">
                      {errors.fullName && <span className="label-text-alt text-white">{errors.fullName}</span>}
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
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onFocus={handleFocuse}
                      value={contacts.email}
                      className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                    />
                    <div className="label">
                      {errors.email && <span className="label-text-alt text-white">{errors.email}</span>}
                    </div>
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">
                        Mobile <span className="text-yellow-300">*</span>
                      </span>
                    </div>
                    <input
                      onChange={handleChange}
                      onFocus={handleFocuse}
                      value={contacts.mobile}
                      name="mobile"
                      type="text"
                      placeholder="Mobile"
                      className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                    />
                    <div className="label">
                      <span className="label-text-alt text-white">
                        {errors.mobile && <span className="label-text-alt text-white">{errors.mobile}</span>}
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
                      onChange={handleChange}
                      onFocus={handleFocuse}
                      value={contacts.subject}
                      name="subject"
                      type="email"
                      placeholder="Subject"
                      className="input input-bordered w-full max-w-xs bg-bgPrimary text-white"
                    />
                    <div className="label">
                      <span className="label-text-alt text-white">
                        {errors.subject && <span className="label-text-alt text-white">{errors.subject}</span>}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3">
                <div className="col-span-2">
                  <div className="label">
                    <span className="label-text text-white">
                      Message <span className="text-yellow-300">*</span>
                    </span>
                  </div>
                  <textarea
                    onChange={handleChange}
                    onFocus={handleFocuse}
                    value={contacts.message}
                    name="message"
                    placeholder="Message"
                    className="textarea textarea-bordered textarea-lg w-full max-w-2xl bg-bgBrown"></textarea>
                  <div className="label">
                    <span className="label-text-alt text-white">
                      {errors.message && <span className="label-text-alt text-white">{errors.message}</span>}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="px-5 py-3 hover:bg-[#000] bg-bgYellow text-black hover:text-yellow-300 transition duration-300 rounded-lg hover:ring-2 hover:ring-yellow-300 text-center">Submit</button>
              </div>
            </div>
          </form>
        </div >
      </div >
    </>
  );
};

export default Contact;
