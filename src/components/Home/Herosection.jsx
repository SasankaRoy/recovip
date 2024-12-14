import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import { Navbar } from "../common/Navbar/Navbar";
import SplitType from "split-type";
import { gsap } from "gsap/dist/gsap";
import { Navbar } from "../common/Navbar/Navbar";

export const Herosection = () => {
  const mainWrapperRef = useRef(null);
  const journeyTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapperRef,
  });

  /* This `useEffect` hook is responsible for creating a GSAP timeline animation that involves various
  elements on the Hero section of your React component. Here's a breakdown of what it does: */
  useEffect(() => {
    const gsapTimeLine = gsap.timeline();
    const sliptConsul =
      journeyTextRef.current &&
      new SplitType(journeyTextRef.current, {
        types: "chars",
      });
    // const sliptTancy =
    //   tancyRef.current && new SplitType(tancyRef.current, { types: "chars" });

    if (sliptConsul?.chars) {
      gsapTimeLine
        // .fromTo(
        //   journeyTextRef.current,
        //   {
        //     opacity: 0,
        //     y: "-100%",
        //     ease: "power2.out",
        //   },
        //   {
        //     opacity: 1,
        //     y: "0%",
        //     ease: "power2.out",
        //     duration: 0.45,
        //     delay: 0.3,
        //     scrub: 2,
        //   }
        // )
        // @ts-ignore
        .from(sliptConsul?.chars, {
          duration: 0.8,
          opacity: 0,
          scale: 3.5,
          stagger: 0.45,
          ease: "power2.out",
          scrub: 2,
        });
      // @ts-ignore
      // .from(sliptTancy?.chars, {
      //   duration: 0.8,
      //   opacity: 0,
      //   scale: 3.5,
      //   stagger: 0.45,
      //   ease: "power2.out",
      //   scrub: 2,
      // })
      // .fromTo(
      //   videoWrapperRef.current,
      //   {
      //     opacity: 0,
      //     x: "100%",
      //     ease: "power2.out",
      //   },
      //   {
      //     opacity: 1,
      //     x: "0%",
      //     ease: "power2.out",
      //     duration: 0.8,
      //     scrub: 2,
      //   }
      // )
      // .fromTo(
      //   paraRef.current,
      //   {
      //     opacity: 0,
      //     y: "50%",
      //     ease: "power2.out",
      //   },
      //   {
      //     duration: 0.8,
      //     opacity: 1,
      //     y: "0%",
      //     ease: "power2.out",
      //   }
      // );
    }

    return () => {
      gsapTimeLine?.reverse();
    };
  }, []);

  // const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
  // const [currentWindowHeight, setCurrentWindowHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState({
    orientation: false,
  });

  useEffect(() => {
    const handleScreenOrientation = () => {
      setIsDesktop({
        orientation: window.screen?.orientation.type.includes("portrait"),
      });
    };

    const handleScreenChange = () => {
      // setCurrentWindowWidth(window.innerWidth);
      // setCurrentWindowHeight(window.innerHeight);

      handleScreenOrientation();
    };
    handleScreenChange();

    window.addEventListener("resize", handleScreenChange);
    window.addEventListener("orientationchange", handleScreenOrientation);

    return () => {
      window.removeEventListener("resize", handleScreenChange);
      window.removeEventListener("orientationchange", handleScreenOrientation);
    };
  }, []);

  const scrollOnXAxis = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `${!isDesktop.orientation ? "-220vw" : "-320vw"}`]
  );

  const increaseWidthOnScroll1 = useTransform(
    scrollYProgress,
    [0, 0.25],
    [
      `${!isDesktop.orientation ? "30vw" : "20vw"}`,
      `${!isDesktop.orientation ? "50vw" : "80vw"}`,
    ]
  );
  const increaseWidthOnScroll2 = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["15vw", `${!isDesktop.orientation ? "50vw" : "80vw"}`]
  );
  const increaseWidthOnScroll3 = useTransform(
    scrollYProgress,
    [0, 0.75],
    ["5vw", `${!isDesktop.orientation ? "50vw" : "80vw"}`]
  );

  const increaseHeightOnScroll1 = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["30%", "50%"]
  );
  const increaseHeightOnScroll2 = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["15%", "50%"]
  );
  const increaseHeightOnScroll3 = useTransform(
    scrollYProgress,
    [0, 0.75],
    ["10%", "50%"]
  );

  const increaseOpacityBox1Div2 = useTransform(
    scrollYProgress,
    [0.1, 0.25],
    [0, 1]
  );
  const increaseOpacityBox2Div1 = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );
  const increaseOpacityBox2Div2 = useTransform(
    scrollYProgress,
    [0.26, 0.5],
    [0, 1]
  );

  const increaseOpacityBox3Div1 = useTransform(
    scrollYProgress,
    [0.45, 0.5],
    [0, 1]
  );
  const increaseOpacityBox3Div2 = useTransform(
    scrollYProgress,
    [0.52, 0.75],
    [0, 1]
  );

  // view Menu btn

  const menuOpacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const scaleUpMenuBtn = useTransform(scrollYProgress, [0.25, 0.3], [0.8, 1]);
  const menuTextTransition = useTransform(
    scrollYProgress,
    [0.3, 0.35],
    ["105%", "0%"]
  );
  const menuTextDisplayTransition = useTransform(
    scrollYProgress,
    [0.3, 0.35],
    ["none", "flex"]
  );
  return (
    <div className="relative">
      {/* <motion.div
        style={{
          opacity: menuOpacity,
        }}
        className="fixed top-0 left-0 w-full bg-transparent z-50 py-2 flex justify-center items-center"
      >
        <div className="flex justify-between items-center w-[95%]">
          <div className="h-auto w-14">
            <img src="FavIconDark.svg" alt="logo" className="object-contain" />
          </div>
          <motion.button
            style={{
              opacity: menuOpacity,
              scale: scaleUpMenuBtn,
            }}
            className=" min-h-10 min-w-16 overflow-hidden right-[2%] text-white bg-black px-6  rounded-full border-none outline-none"
          >
            <motion.p
              style={{
                x: menuTextTransition,
                display: menuTextDisplayTransition,
              }}
            >
              Menu
            </motion.p>
          </motion.button>
        </div>
      </motion.div> */}
      <div
        ref={mainWrapperRef}
        className="2xl:h-[300dvh] xl:h-[300dvh] lg:h-[300dvh] md:portrait:h-[300dvh] md:landscape:h-[300dvh] h-[600dvh] relative mx-auto"
      >
        <div className="top-0 sticky h-[100dvh] w-full overflow-hidden 2xl:flex xl:flex lg:flex md:portrait:flex md:landscape:flex hidden">
          <motion.div
            style={{
              x: scrollOnXAxis,
            }}
            className="flex w-full"
          >
            <motion.div
              initial={{
                scale: 2,
                x: "100%",
                zIndex: 10,
              }}
              whileInView={{
                scale: 1,
                x: "0%",
                zIndex: 1,
              }}
              transition={{
                duration: 1,
                ease: "circInOut",
                // delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              className=" bg-[#fbf2ff] text-black h-[100vh] 2xl:w-[50vw] xl:w-[50vw] lg:w-[50vw] md:portrait:w-[80vw] w-screen flex-shrink-0 flex flex-col justify-center items-center text-whit  "
            >
              <div className="h-[50%] w-full flex justify-center items-center relative">
              <Navbar />
                <div className=" h-full flex-1 flex justify-center items-center">
                  <div className="w-[80%] h-[80%] pOneImgWrapper">
                    <img
                      src="/personImg2.png"
                      className="w-full h-full object-contain pOneImg"
                      alt="personImg"
                    />
                  </div>
                </div>
                <div className=" h-full flex-col gap-5   flex-1 flex justify-center items-start px-[1%]">
                  <div className="w-[90%] mx-auto">
                    <h3
                      // ref={journeyTextRef}
                      className="2xl:text-[3vw] xl:text-[3vw] tracking-wider lg:text-[3vw] md:portrait:text-[5.5vw] font-[400] AllianceFont customLine__heights 2xl:leading-[3.5vw] xl:leading-[3vw] lg:leading-[3vw] md:portrait:leading-[6vw] text-[#4d0072]"
                    >
                      Your Journey to Recovery Starts Here
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1"></div>
                </div>
              </div>
              <div className="w-full 2xl:h-[50%] xl:h-[50%] lg:h-[50%] md:portrait:h-[45%] md:landscape:h-[45%]  px-4 py-2 flex flex-col 2xl:justify-end xl:justify-end lg:justify-end md:portrait:justify-start md:landscape:justify-start items-center gap-2 ">
                <div className="flex flex-col justify-center items-center gap-5  w-[95%] h-auto">
                  <div className=" w-full">
                    <img
                      className=" w-[95%]"
                      src="/RecovIpLightLogo.svg"
                      alt="personImg"
                    />
                  </div>
                  <div className="w-full">
                    <p className="2xl:text-[.9vw] xl:text-[.9vw] lg:text-[.9vw] md:portrait:text-[1.5vw] text-[#2e0e4f] font-[300] text-left  font-[Montserrat]">
                      Recovery Is Possible provides a supportive and nurturing
                      environment where you can explore your challenges, develop
                      coping strategies, and embark on a journey of healing and
                      personal growth.
                    </p>
                  </div>
                </div>
                <div className=" mx-auto 2xl:h-[40%] xl:h-[40%] lg:h-[40%] md:portrait:h-[40%] md:landscape:h-[30%] w-[95%]"></div>

                <div className="border-t border-[#7122c1] w-[95%]  flex justify-between items-center py-2  px-2 md:portrait:py-5 ">
                  <button className="2xl:text-[1.1vw] tracking-wider AllianceFont xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                    Facebook
                  </button>
                  <button className="2xl:text-[1.1vw] tracking-wider AllianceFont xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                    Instagram
                  </button>
                  <button className="2xl:text-[1.1vw] tracking-wider AllianceFont xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                    Twitter
                  </button>
                  {/* <button className="text-[1vw]">Linkedin</button> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                scale: 2,
                x: "100%",
                zIndex: 10,
              }}
              whileInView={{
                scale: 1,
                x: "0%",
                zIndex: 1,
              }}
              transition={{
                duration: 1,
                ease: "circInOut",
                // delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              style={{
                width: increaseWidthOnScroll1,
              }}
              className="customBGLogo protfolioShadow h-screen w-[30vw] flex-shrink-0 flex flex-col justify-end items-center text-[4vw] text-white capitalize"
            >
              <motion.div
                style={{
                  height: increaseHeightOnScroll1,
                }}
                className="h-[50%] w-full bg-blue-500"
              >
                <img
                  src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                  className="w-full h-full object-cover"
                  alt="personImg"
                />
              </motion.div>

              <motion.div
                style={{
                  height: increaseHeightOnScroll1,
                }}
                className="h-[50%] w-full flex flex-col justify-start items-center gap-5"
              >
                <div className="flex justify-between items-center w-full p-2">
                  <div className="2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[1.8vw]">
                    Some content
                  </div>
                  <div className="2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[1.8vw]">
                    some content
                  </div>
                </div>
                <motion.div
                  style={{
                    opacity: increaseOpacityBox1Div2,
                  }}
                >
                  Box 2
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                scale: 2,
                x: "80%",
                zIndex: 9,
              }}
              whileInView={{
                scale: 1,
                x: "0%",
                zIndex: 1,
              }}
              transition={{
                duration: 1,
                ease: "circInOut",
                // delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              style={{
                width: increaseWidthOnScroll2,
              }}
              className=" costomBgLogo protfolioShadow h-screen w-[15vw] flex-shrink-0 flex flex-col justify-end items-center text-[3vw] text-black capitalize"
            >
              <motion.div
                style={{
                  height: increaseHeightOnScroll2,
                }}
                className="h-[15%] w-full bg-blue-950"
              >
                <img
                  src="https://media.istockphoto.com/id/483585627/photo/white-dove-isolated.jpg?s=612x612&w=0&k=20&c=qZb-CEMXnLdomi-cC2coezJSH7nI_XnNTEdG6SqTIwc="
                  className="w-full h-full object-cover"
                  alt="personImg"
                />
              </motion.div>

              <motion.div
                style={{
                  height: increaseHeightOnScroll2,
                }}
                className="h-[15%] w-full flex flex-col justify-start items-center gap-5"
              >
                <motion.div
                  style={{ opacity: increaseOpacityBox2Div1 }}
                  className="flex justify-between items-center w-full p-2"
                >
                  <div className="2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[1.8vw]">
                    Some content
                  </div>
                  <div className="2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[1.8vw]">
                    some content
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    opacity: increaseOpacityBox2Div2,
                  }}
                >
                  Service 1
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                scale: 2.5,
                x: "80%",
                zIndex: 8,
              }}
              whileInView={{
                scale: 1,
                x: "0%",
                zIndex: 1,
              }}
              transition={{
                duration: 1,
                ease: "circInOut",
                // delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              style={{
                width: increaseWidthOnScroll3,
              }}
              className="bg-[#370051] protfolioShadow h-screen w-[5vw] flex-shrink-0 flex flex-col justify-end items-center text-[4vw] text-white capitalize"
            >
              <motion.div
                style={{
                  height: increaseHeightOnScroll3,
                }}
                className="h-[10%] w-full bg-green-200"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                  className="w-full h-full object-cover"
                  alt="personImg"
                />
              </motion.div>
              <motion.div
                style={{
                  height: increaseHeightOnScroll3,
                }}
                className="h-[10%] w-full flex flex-col justify-start items-center gap-5"
              >
                <motion.div
                  style={{
                    opacity: increaseOpacityBox3Div1,
                  }}
                  className="flex justify-between items-center w-full p-2"
                >
                  <div className="2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[1.8vw]">
                    Some content
                  </div>
                  <div className="2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] md:portrait:text-[1.8vw]">
                    some content
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    opacity: increaseOpacityBox3Div2,
                  }}
                >
                  Service 2
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                width: increaseWidthOnScroll3,
              }}
              className="bg-neutral-600 protfolioShadow h-screen w-[5vw] flex-shrink-0 flex justify-center items-center text-[5vw] text-white capitalize"
            >
              Service 3
            </motion.div>

            <motion.div
              style={{
                width: increaseWidthOnScroll3,
              }}
              className="bg-teal-600 protfolioShadow h-screen w-[5vw] flex-shrink-0 flex justify-center items-center text-[5vw] text-white capitalize"
            >
              Why choose Us
            </motion.div>
          </motion.div>
        </div>

        {/* mobile start */}
        {/* box one start */}
        <div className="top-0 sticky h-[80dvh] w-full overflow-x-hidden 2xl:hidden xl:hidden lg:hidden md:portrait:hidden md:landscape:hidden flex">
          <motion.div className=" bg-[#fbf2ff] text-black  h-full 2xl:hidden xl:hidden lg:hidden md:portrait:hidden md:landscape:hidden  w-full flex-shrink-0 flex flex-col justify-center items-center realtive">
          <Navbar />
            <div className="h-[50%] w-full flex justify-center items-center ">
              <div className=" h-full flex-1 flex justify-center items-center">
                <div className="w-[80%] h-[80%] pOneImgWrapper">
                  <img
                    src="/personImg2.png"
                    className="w-full h-full object-contain pOneImg"
                    alt="personImg"
                  />
                </div>
              </div>
              <div className=" h-full flex-col gap-5   flex-1 flex justify-center items-start px-[1%]">
                <div className="w-[90%] mx-auto">
                  <h3
                    // ref={journeyTextRef}
                    className="text-[7vw] font-[400] AllianceFont customLine__heights 2xl:leading-[3.5vw] xl:leading-[3vw] lg:leading-[3vw] md:portrait:leading-[6vw] text-[#4d0072]"
                  >
                    Your Journey to Recovery Starts Here
                  </h3>
                </div>
                <div className="flex flex-col gap-1"></div>
              </div>
            </div>
            <div className="w-full 2xl:h-[50%] xl:h-[50%] lg:h-[50%] md:portrait:h-[45%] md:landscape:h-[45%] h-[50%]  px-4 py-2 flex flex-col 2xl:justify-end xl:justify-end lg:justify-end md:portrait:justify-start md:landscape:justify-start items-center gap-2 ">
              <div className="flex flex-col justify-center items-center gap-5  w-[95%] h-auto">
                <div className="w-full">
                  <img
                    className=" w-[95%]"
                    src="/RecovIpLightLogo.svg"
                    alt="personImg"
                  />
                </div>
                <div className="w-full">
                  <p className="text-[3.5vw] text-[#2e0e4f] font-[300] text-left font-[Montserrat]">
                    Recovery Is Possible provides a supportive and nurturing
                    environment where you can explore your challenges, develop
                    coping strategies, and embark on a journey of healing and
                    personal growth.
                  </p>
                </div>
              </div>

              <div className=" mx-auto  h-[35%]  w-[95%]"></div>

              <div className="border-t border-[#7122c1] w-[95%] flex justify-between items-center py-2  px-2 md:portrait:py-5 ">
                <button className="2xl:text-[1.1vw] tracking-wider AllianceFont xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                  Facebook
                </button>
                <button className="2xl:text-[1.1vw] tracking-wider AllianceFont xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                  Instagram
                </button>
                <button className="2xl:text-[1.1vw] tracking-wider AllianceFont xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                  Twitter
                </button>
                {/* <button className="text-[1vw]">Linkedin</button> */}
              </div>
            </div>
          </motion.div>
        </div>
        {/* box one end */}

        {/* box two start */}
        <div className="h-screen customBGLogo  sticky w-full top-0 2xl:hidden xl:hidden lg:hidden md:portrait:hidden md:landscape:hidden flex flex-col justify-center items-center text-white">
          <motion.div
            style={{
              height: increaseHeightOnScroll1,
            }}
            className="h-[50%] w-full bg-blue-500"
          >
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
              className="w-full h-full object-cover"
              alt="personImg"
            />
          </motion.div>

          <motion.div
            style={{
              height: increaseHeightOnScroll1,
            }}
            className="h-[50%] w-full flex flex-col justify-start items-center gap-5"
          >
            <div className="flex justify-between items-center w-full p-2">
              <div className="text-[3.4vw]">Some content</div>
              <div className="text-[3.4vw]">some content</div>
            </div>
            <motion.div
              style={{
                opacity: increaseOpacityBox1Div2,
              }}
              className="text-[8vw]"
            >
              Box 2
            </motion.div>
          </motion.div>
        </div>
        {/* box two end */}

        {/* box three start */}
        <div className="h-screen costomBgLogo sticky w-full top-0 2xl:hidden xl:hidden lg:hidden md:portrait:hidden md:landscape:hidden flex flex-col justify-center items-center text-[8vw]">
          <motion.div
            style={{
              height: increaseHeightOnScroll2,
            }}
            className="h-[15%] w-full bg-blue-950"
          >
            <img
              src="https://media.istockphoto.com/id/483585627/photo/white-dove-isolated.jpg?s=612x612&w=0&k=20&c=qZb-CEMXnLdomi-cC2coezJSH7nI_XnNTEdG6SqTIwc="
              className="w-full h-full object-cover"
              alt="personImg"
            />
          </motion.div>

          <motion.div
            style={{
              height: increaseHeightOnScroll2,
            }}
            className="h-[15%] w-full flex flex-col justify-start items-center gap-5"
          >
            <motion.div
              style={{ opacity: increaseOpacityBox2Div1 }}
              className="flex justify-between items-center w-full p-2"
            >
              <div className="text-[3.4vw]">Some content</div>
              <div className="text-[3.4vw]">some content</div>
            </motion.div>
            <motion.div
              style={{
                opacity: increaseOpacityBox2Div2,
              }}
              className="text-[8vw]"
            >
              Service 1
            </motion.div>
          </motion.div>
        </div>
        {/* box three end */}

        <div className="h-screen bg-[#370051] sticky w-full top-0 2xl:hidden xl:hidden lg:hidden md:portrait:hidden md:landscape:hidden flex flex-col justify-center items-center text-white text-[8vw]">
          <motion.div
            style={{
              height: increaseHeightOnScroll3,
            }}
            className="h-[10%] w-full bg-green-200"
          >
            <img
              src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
              className="w-full h-full object-cover"
              alt="personImg"
            />
          </motion.div>
          <motion.div
            style={{
              height: increaseHeightOnScroll3,
            }}
            className="h-[10%] w-full flex flex-col justify-start items-center gap-5"
          >
            <motion.div
              style={{
                opacity: increaseOpacityBox3Div1,
              }}
              className="flex justify-between items-center w-full p-2"
            >
              <div className="text-[3.4vw]">Some content</div>
              <div className="text-[3.4vw]">some content</div>
            </motion.div>
            <motion.div
              style={{
                opacity: increaseOpacityBox3Div2,
              }}
              className="text-[8vw]"
            >
              Service 2
            </motion.div>
          </motion.div>
        </div>

        <div className="h-screen bg-blue-500 sticky w-full top-0 2xl:hidden xl:hidden lg:hidden md:portrait:hidden md:landscape:hidden flex justify-center items-center text-white text-[8vw]">
          Service 3
        </div>

        <div className="h-screen bg-orange-500 sticky w-full top-0 2xl:hidden xl:hidden lg:hidden md:portrait:hidden md:landscape:hidden flex justify-center items-center text-white text-[8vw]">
          Why choose us
        </div>

        {/* mobile end */}
      </div>

      <motion.div
        initial={{
          width: "100%",
        }}
        whileInView={{
          width: ["100%", "0%"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="fixed z-50 w-full h-screen bg-[#121212] top-0 left-0 flex justify-center items-center"
      >
        <div className="flex justify-center items-center h-32 w-32">
          <img
            src="FavIconDark.svg"
            className="w-full h-full object-contain"
            alt="logo"
          />
        </div>
      </motion.div>
      {/* <Navbar /> */}
    </div>
  );
};
