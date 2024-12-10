import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Herosection = () => {
  const mainWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainWrapperRef,
  });

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
    ["0vw", `${!isDesktop.orientation ? "-190vw" : "-320vw"}`]
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

  return (
    <div>
      <div ref={mainWrapperRef} className=" h-[300dvh] relative mx-auto">
        <div className="top-0 sticky h-[100dvh] w-full overflow-hidden">
          <motion.div
            style={{
              x: scrollOnXAxis,
            }}
            className="flex w-full"
          >
            <div className=" bg-[#fbf2ff] text-black h-[100vh] 2xl:w-[50vw] xl:w-[50vw] lg:w-[50vw] md:portrait:w-[80vw] flex-shrink-0 flex flex-col justify-center items-center text-whit  ">
              <div className=" h-[50%] w-full flex justify-center items-center ">
                <div className=" h-full flex-1 flex justify-center items-center">
                  <div className="w-[80%] h-[80%]">
                    <img
                      src="/personImg2.png"
                      className="w-full h-full object-contain"
                      alt="personImg"
                    />
                  </div>
                </div>
                <div className=" h-full flex-col gap-5   flex-1 flex justify-center items-start px-[1%]">
                  <div className="w-[90%] mx-auto">
                    <h3 className="2xl:text-[3vw] xl:text-[3vw] lg:text-[3vw] md:portrait:text-[5.5vw] font-[700] customLine__heights 2xl:leading-[3.5vw] xl:leading-[3vw] lg:leading-[3vw] md:portrait:leading-[6vw] text-[#4d0072]">
                      Your Journey to Recovery Starts Here
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1"></div>
                </div>
              </div>
              <div className="w-full 2xl:h-[50%] xl:h-[50%] lg:h-[50%] md:portrait:h-[45%]  px-4 py-2 flex flex-col 2xl:justify-end xl:justify-end lg:justify-end md:portrait:justify-start items-center gap-5">
                <div className="flex flex-col justify-center items-center gap-[3%]  w-[95%] h-[35%]">
                  <img
                    className="2xl:h-[10vw] 2xl:w-[45vw] xl:h-[10vw] xl:w-[45vw] lg:w-[45vw] lg:h-[10vw] md:portrait:h-[10vw] md:portrait:w-[95%]"
                    src="/RecovIPLightLogo.svg"
                    alt="personImg"
                  />

                  <p className="2xl:text-[.9vw] xl:text-[.9vw] lg:text-[.9vw] md:portrait:text-[1.5vw] text-[#2e0e4f] font-[300] text-left  font-[Montserrat]">
                    Recovery Is Possible provides a supportive and nurturing
                    environment where you can explore your challenges, develop
                    coping strategies, and embark on a journey of healing and
                    personal growth.
                  </p>
                </div>
                <div className=" mx-auto h-[40%] w-[95%]"></div>

                <div className="border-t border-[#7122c1] w-[95%]  flex justify-between items-center py-2  px-2 md:portrait:py-5">
                  <button className="2xl:text-[1vw] xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                    Facebook
                  </button>
                  <button className="2xl:text-[1vw] xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                    Instagram
                  </button>
                  <button className="2xl:text-[1vw] xl:text-[1vw]lg:text-[1vw] md:portrait:text-[1.8vw] text-[#4d0072] font-[Roboto] font-[600]">
                    Twitter
                  </button>
                  {/* <button className="text-[1vw]">Linkedin</button> */}
                </div>
              </div>
            </div>

            <motion.div
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
                  Box 3
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
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
                  Box 2
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                width: increaseWidthOnScroll3,
              }}
              className="bg-neutral-600 protfolioShadow h-screen w-[5vw] flex-shrink-0 flex justify-center items-center text-[1vw] text-white capitalize"
            >
              Box 5
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
