import React from "react";
import {motion} from 'framer-motion'
export const Footer = () => {
  return (
    <>
      <footer
        // ref={sectionRef}
        className="bg-[#121212] py-8 hidden justify-center items-center md:hidden xl:flex 2xl:flex lg:landscape:flex lg:portrait:hidden"
      >
        <div className="w-[85%]">
          {/* <div className="flex justify-between items-center gap-3 border-b-2 border-[#2C2C2C] p-0">
            <div className="w-[40%]  flex justify-between items-start 2xl:gap-10 xl:gap-8 lg:gap-5">
              <div className="2xl:w-[60%] xl:w-[65%] lg:w-[70%] 2xl:p-5 xl:p-4 lg:p-2.5">
                <div className="2xl:h-12 h-16 w-[50%] relative">
                  <img
                    src='/RIPLogo3.png'
                    alt="footer-logo"
                    
                    loading="lazy"
                  />
                </div>
                <p className="text-[#D9D9D9] font-[Oxanium] font-[400] text-md 2xl:text-base lg:mt-2 lg:text-sm mt-8 2xl:mt-14">
                  Our dedication to client success is reflected in our track
                  record of helping businesses achieve increased brand
                  visibility, higher conversion rates, and sustained growth.
                </p>
              </div>
              <div className="w-[35%]  flex flex-col justify-center items-center">
                {[
                  {
                    socialText: "Facebook",
                    link: "https://www.facebook.com/profile.php?id=100089610044002",
                  },
                  {
                    socialText: "Twitter",
                    link: "https://x.com/KaltechServices",
                  },
                  {
                    socialText: "Linkedin",
                    link: "https://www.linkedin.com/company/kaltech-designs/",
                  },
                  {
                    socialText: "Instagram",
                    link: "https://www.instagram.com/kaltechconsultancy/",
                  },
                ].map((cur, id) => (
                  <p
                    key={id}
                    // href={cur.link}
                    target="_blank"
                    className="font-[Oxanium] lg:text-sm text-md text-[#FFF] font-[400] w-[80%]  flex justify-center items-center h-20 2xl:h-24 border border-[#2C2C2C] border-b-0"
                  >
                    <motion.button
                      initial={{
                        background: "transparent",
                        color: "#FFF",
                      }}
                      whileHover={{
                        color: "#121212",
                        background: "#FFF",
                        opacity: [0.5, 1],
                      }}
                      transition={{ duration: 0.3, ease: "linear" }}
                      className=" w-full h-full font-[Oxanium] lg:text-sm text-md text-[#FFF] font-[400]"
                    >
                      {cur.socialText}
                    </motion.button>
                  </p>
                ))}
              </div>
            </div>
            <div className="w-[70%] flex justify-between items-center ">
              <div className="w-[60%] ">
                <h3
                //   ref={textRef}
                  className="font-[Oxanium] font-[700] lg:text-[60px] xl:text-[65px] 2xl:text-[85px] text-[#FFF] uppercase flex-shrink-0"
                >
                  Let’s talk
                </h3>
              </div>
              <div className="w-[30%] flex justify-center items-center ">
                <div
                //   ref={scope}
                //   onMouseEnter={handleAnimation}
                //   onMouseLeave={handleAnimationOut}
                  className="flex justify-center items-center bg-[#E413F6] backdrop-blur-md h-[200px] w-[200px] lg:h-[180px] lg:w-[180px]  2xl:w-[200px]  2xl:h-[200px] xl:w-[200px] xl:h-[200px]  rounded-full homeFooterBTNShadow transition-all duration-500 ease-linear"
                >
                  <div
                    id="rotatingDiv"
                    className="absolute top-0 right-0 bg-[f161fe] w-[100%] h-[100%] transition-all duration-500 ease-linear"
                  />
                  <p href="/contact">
                    <button
                      id="BTNAnimate"
                      className="font-[Open Sans] flex flex-col justify-center items-center bg-[#121212] opacity-100 text-[#FFF] w-[185px] h-[185px] lg:h-[165px] lg:w-[165px] 2xl:w-[185px] 2xl:h-[185px] xl:w-[185px] xl:h-[185px] rounded-full font-[800] overflow-hidden relative z-10"
                    >
                      <span
                        id="innerText"
                        className=" 2xl:text-4xl xl:text-3xl lg:text-2xl  mt-7"
                      >
                        Project
                      </span>
                      <span
                        id="innerText-2"
                        className="2xl:text-4xl xl:text-3xl lg:text-2xl translate-y-28"
                      >
                        Idea
                      </span>
                      <span
                        id="innerText-3"
                        className="2xl:text-4xl xl:text-3xl lg:text-2xl translate-y-28 hidden  flex-col justify-center items-center gap-3.5"
                      >
                        Get Started{" "}
                        <span
                          id="BTNbg"
                          className="-translate-x-60 translate-y-52"
                        >
                          <span className="relative h-7 w-7">
                            <img fill src='' alt="" />
                          </span>
                        </span>
                      </span>
                      <div
                        id="BTNbg"
                        className="absolute top-0 left-0 w-full h-full bg-white -z-10 -translate-x-60 translate-y-52 rounded-full"
                      />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div> */}


          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center flex-shrink-0">
                <img className="h-44 w-48 rounded-xl" src="/RIPLogo3.png" />
                <h3 className="text-[8vw] text-white font-[600] ml-[-6%] font-[Roboto]">RECOVIP</h3>
            </div>
            <div className="min-w-[30%] rounded-xl overflow-hidden h-80">
                <img src="/footerGraphics.gif" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="px-4 py-7 flex justify-between items-center">
            <div className="2xl:w-[20%] w-[25%] xl:w-[40%]">
              <p className="font-[Oxanium] lg:text-sm text-base 2xl:text-base font-[400] text-[#FFF]">
                © 2024 | Alrights reserved.
              </p>
              <p className="font-[Oxanium] lg:text-sm text-base 2xl:text-base font-[400] text-[#FFF]">
                Designed by Kaltech
              </p>
            </div>
            <div>
              <ul className="flex justify-center items-center gap-4 2xl:gap-8">
                {[
                  { title: "Home", path: "/" },
                  { title: "About Us", path: "/about" },
                  { title: "Services", path: "/service" },
                  {/* { title: "Blog", path: "/blog" }, */},
                  { title: "Contact us", path: "/contact" },
                  {/* { title: "Privacy Policy", path: "/privacypolicy" }, */}
                ].map((cur, id) => (
                  <motion.div
                    key={id}
                    initial={{ scale: 1, y: "0%" }}
                    whileHover={{ scale: 1.2, y: "-20%" }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  >
                    <p
                      className="font-[Oxanium] text-[#FFF] uppercase lg:text-[12px] xl:text-sm text-base 2xl:text-base font-[400] no-underline"
                      href={cur.path}
                    >
                      {cur.title}
                    </p>
                  </motion.div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
