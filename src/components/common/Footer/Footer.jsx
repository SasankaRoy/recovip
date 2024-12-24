import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import { gsap } from "gsap/dist/gsap";
import SplitType from "split-type";
export const Footer = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef);

  const handleInViewAnimation = () => {
    const gsapTimeLine = gsap.timeline();
    const animateChar =
      textRef.current && new SplitType(textRef.current, { types: "chars" });

    if (animateChar?.chars) {
      gsapTimeLine.fromTo(
        animateChar.chars,
        { y: 100, opacity: 0 },
        {
          y: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          scrub: 2,
          ease: "power2.out",
        }
      );
    }
  };

  const location = useLocation();

  useEffect(() => {
    handleInViewAnimation();
  }, [isInView]);

  return (
    <>
      <footer
        // ref={sectionRef}
        className="bg-[#100018] py-8 flex justify-center items-center"
      >
        <div className="w-[95%]">
          <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row md:landscape:flex-row justify-between items-centers bg-[#210030]/35 rounded-lg p-2 gap-2">
            <div className=" 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:portrait:w-[20%] md:landscape:w-[20%] w-full bg-[#100018]  rounded-lg">
              <div className="w-full h-full flex  2xl:flex-col xl:flex-col lg:flex-col md:portrait:flex-col md:landscape:flex-col flex-row justify-between items-center gap-1">
                {[
                  {
                    socialText: "Facebook",
                    link: "https://www.facebook.com/profile.php?id=100089610044002",
                  },
                  {
                    socialText: <XIcon sx={{ fontSize: 20 }} />,
                    link: "https://x.com/KaltechServices",
                  },
                  {
                    socialText: "Instagram",
                    link: "https://www.instagram.com/kaltechconsultancy/",
                  },
                ].map((cur, id) => (
                  <>
                    {/* <div
                    key={id}
                    href={cur.link}
                    target="_blank"
                    className="AllianceFont  py-3 lg:text-sm text-md text-[#FFF] font-[400] w-[95%]  flex justify-center items-center flex-1 border border-[#2C2C2C] rounded-lg"
                  >
                    
                  </div> */}

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
                      className=" w-full h-full rounded-lg border border-[#2C2C2C] flex-1 AllianceFont 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] md:portrait:text-[1.7vw] md:landscape:text-[1.3vw] text-[5vw] text-[#FFF] font-[400] py-4"
                    >
                      {cur.socialText}
                    </motion.button>
                  </>
                ))}
              </div>
            </div>

            <div className="flex  flex-col  bg-[#100018]   rounded-lg gap-3 justify-center items-center flex-shrink-0 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:portrait:w-[60%] md:landscape:w-[60%] w-full ">
              <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:portrait:w-[80%] md:landscape:w-[75%] w-[80%] ">
                <img
                  className="w-full rounded-xl"
                  src="/RecovIPLogoDark.svg"
                  alt="personImg"
                />
              </div>
              <div
                ref={textRef}
                className=" w-full flex justify-center items-center"
              >
                <h2 className="2xl:text-[7vw] xl:text-[7vw] lg:text-[7vw] md:portrait:text-[8vw] md:landscape:text-[7vw] text-[12vw] text-white font-[300] AllianceFont">
                  Let's Talk
                </h2>
              </div>
            </div>

            <div className="min-w-[20%] bg-[#100018] rounded-lg overflow-hidden flex justify-center items-center py-2 2xl:py-0 xl:py-0 lg:py-0 md:portrait:py-0 md:landscape:py-0">
              <div className="w-full ">
                <div className="w-full flex justify-center items-center ">
                  <div
                    //   ref={scope}
                    //   onMouseEnter={handleAnimation}
                    //   onMouseLeave={handleAnimationOut}
                    // h-[200px] w-[200px] lg:h-[180px] lg:w-[180px]  2xl:w-[200px]  2xl:h-[200px] xl:w-[200px] xl:h-[200px]
                    className="flex  justify-center items-center bg-[#E413F6] backdrop-blur-md 2xl:w-[13vw] 2xl:h-[13vw] xl:w-[13vw] xl:h-[13vw] lg:w-[13vw] lg:h-[13vw] md:portrait:h-[18vw] md:portrait:w-[18vw] md:landscape:h-[13vw] md:landscape:w-[13vw] h-[30vw] w-[30vw] rounded-full homeFooterBTNShadow transition-all duration-500 ease-linear"
                  >
                    <div
                      id="rotatingDiv"
                      className="absolute top-0 right-0 bg-[f161fe] w-[100%] h-[100%] transition-all duration-500 ease-linear"
                    />
                    <p href="/contact">
                      <button
                        id="BTNAnimate"
                        // w-[185px] h-[185px] lg:h-[165px] lg:w-[165px] 2xl:w-[185px] 2xl:h-[185px] xl:w-[185px] xl:h-[185px]
                        className="font-[Open Sans] flex flex-col justify-center items-center bg-[#121212] opacity-100 text-[#FFF] 2xl:h-[12vw] xl:h-[12vw] 2xl:w-[12vw] xl:w-[12vw] lg:w-[12vw] lg:h-[12vw] md:portrait:h-[17vw] md:portrait:w-[17vw] md:landscape:h-[12vw] md:landscape:w-[12vw] h-[29vw] w-[29vw] rounded-full font-[800] overflow-hidden relative z-10"
                      >
                        <span
                          id="innerText"
                          className="2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-[2.7vw] md:landscape:text-[2vw] text-[4.7vw] mt-7"
                        >
                          {location.pathname.includes("schedule-appointment")
                            ? "Contact"
                            : "Schedule"}
                        </span>
                        <span
                          id="innerText-2"
                          className="2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-[2.7vw] md:landscape:text-[2vw] text-[4.7vw] translate-y-28"
                        >
                          Here
                        </span>
                        <span
                          id="innerText-3"
                          className="2xl:text-3xl xl:text-3xl lg:text-3xl md:portrait:text-[2.7vw] md:landscape:text-[2vw] text-[4.7vw] translate-y-28 hidden  flex-col justify-center items-center gap-3.5"
                        >
                          Today{" "}
                          <span
                            id="BTNbg"
                            className="-translate-x-60 translate-y-52"
                          >
                            <span className="relative h-7 w-7">
                              <img fill src="" alt="" />
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
            </div>
          </div>

          <div className="px-4 py-7 flex flex-col-reverse 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row md:landscape:flex-row justify-between items-center mt-[2%] gap-3 2xl:gap-0 xl:gap-0 lg:gap-0 md:portrait:gap-0 md:landscape:gap-0">
            <div className="2xl:w-[20%] xl:w-[40%] lg:w-[40%] md:portrait:w-[40%] md:landscape:w-[40%] w-full flex flex-col justify-start items-center 2xl:items-start xl:items-start lg:items-start md:portrait:items-start md:landscape:items-start">
              <p className="AllianceFont  2xl:text-[.85vw] xl:text-[.85vw] lg:text-[.9vw] md:portrait:text-[1.5vw] md:landscape:text-[.9vw] text-[4.7vw] font-[300] text-[#FFF]">
                © 2024 | Alrights reserved.
              </p>
              <p className="AllianceFont 2xl:text-[.85vw] xl:text-[.85vw] lg:text-[.9vw] md:portrait:text-[1.5vw] md:landscape:text-[.9vw] text-[4.7vw] font-[300] text-[#FFF]">
                Designed by Kaltech
              </p>
            </div>
            <div>
              <ul className="flex justify-center items-center gap-4 2xl:gap-8">
                {[
                  { title: "home", path: "/" },
                  { title: "about Us", path: "/about" },
                  { title: "privacy policy", path: "/service" },
                  { title: "contact", path: "/contact" },
                ].map((cur, id) => (
                  <motion.div
                    key={id}
                    initial={{ scale: 1, y: "0%" }}
                    whileHover={{ scale: 1.2, y: "-20%" }}
                    transition={{ duration: 0.1, ease: "linear" }}
                    style={{
                      display: location.pathname.includes(cur.title)
                        ? "none"
                        : "flex",
                    }}
                  >
                    <Link
                      className="AllianceFont text-[#FFF] capitalize 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[2vw] md:landscape:text-[1.3vw] text-[5.5vw] font-[300] no-underline"
                      to={cur.path}
                    >
                      {cur.title}
                    </Link>
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
