import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Footer } from "../components/common/Footer/Footer";
export const Contact = () => {
  return (
    <>
      <div className="h-screen justify-center items-center hidden md:hidden 2xl:flex xl:flex lg:landscape:flex lg:portrait:hidden">
        <div className="w-[90%] h-full border-2 border-[#D9D9D9] border-t-0 border-b-0 flex justify-center items-center">
          <div className="w-[90%]">
            <div className="flex justify-between items-center gap-3">
              <div className="w-[70%]">
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
                  className="AzonixFont font-[Azonix,Oxanium] 2xl:landscape:text-8xl  lg:landscape:text-7xl uppercase font-[400]"
                >
                  Let&apos;s get in touch
                </motion.h1>
              </div>
              <div className="w-[30%]">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
                  className="font-[Oxanium] text-base font-[400]"
                >
                  Ready to embark on this journey with us? Contact our team to
                  schedule your initial consultation and discover how we can
                  help you reach your goals.
                </motion.p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
                className="w-[25%]"
              >
                <h4 className="font-[Oxanium] text-2xl lg:landscape:text-lg font-[400]">
                  or just
                </h4>
                <h4 className="font-[Oxanium] text-2xl lg:landscape:text-lg font-[400]">
                  say hello!
                </h4>
                <div className="flex flex-col justify-start items-start gap-4 mt-[20%] w-[65%]">
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700] underline underline-offset-4"
                    href="tel:+1(931)-266-6101"
                  >
                    +1(931)-000-000
                  </Link>
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700] underline underline-offset-4"
                    href="mailto:hello@kaltechconsultancy.tech"
                  >
                    inforecovip@gmail.com
                  </Link>
                  <div className="flex flex-col justify-start items-start">
                    <Link
                      className="font-[Oxanium] text-lg lg:landscape:text-base font-[700]"
                      href="https://maps.app.goo.gl/C1uULXRQ95gTG7bP8"
                      target="_blank"
                    >
                      New York,
                    </Link>
                    <Link
                      className="font-[Oxanium] text-lg lg:landscape:text-base font-[700]"
                      href="https://maps.app.goo.gl/C1uULXRQ95gTG7bP8"
                      target="_blank"
                    >
                      NY 401860,
                    </Link>
                    
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 1 }}
                className=" w-[60%] flex flex-col justify-center items-center gap-5"
              >
                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Name *"
                      //   onChange={handleChange}
                      name="fullName"
                      //   value={contactDeltails.fullName}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Email *"
                      //   onChange={handleChange}
                      name="email"
                      //   value={contactDeltails.email}
                    />
                  </div>
                </div>
                {/* change */}
                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Phone"
                      //   onChange={handleChange}
                      name="phonenumber"
                      //   value={contactDeltails.phonenumber}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Subject *"
                      //   onChange={handleChange}
                      name="subject"
                      //   value={contactDeltails.subject}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-full">
                    <textarea
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Message *"
                      //   onChange={handleChange}
                      name="message"
                      //   value={contactDeltails.message}
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.2, 0.6, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: "backInOut",
                    delay: 0.4,
                    times: [0.2, 0.6, 1],
                  }}
                  //   onClick={() =>
                  //     handleSendEmail(
                  //       contactDeltails,
                  //       setIsLoading,
                  //       setContactDeltails
                  //     )
                  //   }
                  className={`text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-base w-32 h-32 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-start p-3  disabled:opacity-55 disabled:cursor-not-allowed`}
                  //   disabled={isLoading}
                >
                  {/* {isLoading ? "Sending..." : "Send Message"} */}
                  Send Message
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 14 13"
                      fill="none"
                      className="transition-colors duration-200 ease-in-out delay-100"
                    >
                      <path
                        d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                        // fill="#2C2C2C"
                      />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
