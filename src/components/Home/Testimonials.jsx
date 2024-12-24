import React, { useState } from "react";

const testimonialData = [
  {
    image: `https://kaltechassets.s3.us-east-2.amazonaws.com/Kaltech/TABB.jpg`,
    name: "Eleanor Jator",
    position: " Ph.D, MT(ASCP)CM.",
    description: ` “The TABB” website built by Kaltech Consultancy is highly functional and easy to navigate. Each requested component was skillfully placed to enhance effectiveness and professionalism. The website was completed promptly within the stipulated deadline, and the customer service addressed inquiries swiftly.
    `,
  },
  {
    image: `https://kaltechassets.s3.us-east-2.amazonaws.com/Kaltech/BlizServices.png`,
    name: "Dr.David Etabasi",
    position: "CEO Bliz Services",
    description: `
    I couldn’t be happier with the website design services provided by Kaltech. From the initial consultation to the final launch, the team was professional, creative, and attentive to our needs. They took the time to understand our brand and vision, and the result was a stunning, user-friendly website that exceeded our expectations. The feedback from our customers has been overwhelmingly positive, and we’ve seen a significant increase in traffic and engagement. I highly recommend Kaltech Consultancy to anyone looking for top-notch web design services.`,
  },
  {
    image: `https://kaltechassets.s3.us-east-2.amazonaws.com/Kaltech/EltaHealthcare.png`,
    name: "E Voilet",
    position: "CEO Elta Healthcare",
    description: `We are absolutely thrilled with the website designed by Kaltech Consultancy. Their team took the time to understand our brand and goals, and the result is a site that perfectly reflects our identity. The design is clean, modern, and highly engaging. The entire process was smooth and stress-free, thanks to their professionalism and expertise. Our new website has already made a significant impact on our business, and we couldn’t be happier.`,
  },
  {
    image: `https://kaltechassets.s3.us-east-2.amazonaws.com/Kaltech/SaveAViilage.jpg`,
    name: "A. CONSTANCE",
    position: "CEO Save A Village",
    description: `
    Kaltech Consultancy exceeded all our expectations with their web design services. From the initial consultation to the final launch, they were attentive, creative, and incredibly skilled. Our new website is not only beautiful but also highly functional and user-friendly. We have received positive feedback from our clients. I highly recommend Kaltech Consultancy to anyone in need of a custom designed website.`,
  },
  {
    image: `https://kaltechassets.s3.us-east-2.amazonaws.com/Kaltech/UpWealthMagazine.png`,
    name: " J. SAKWE",
    position: "CEO UpWealth Magazine",
    description: `
    I am thoroughly impressed with the web design services provided by Kaltech Consultancy. They took our vision and turned it into a reality, creating a website that is both visually stunning and easy to navigate. The team was responsive, professional, and always willing to go the extra mile to ensure our satisfaction. We’ve received countless compliments on our new site.`,
  },
  {
    image: `https://kaltechassets.s3.us-east-2.amazonaws.com/Kaltech/KikiVictory.jpg`,
    name: "Christelle",
    position: "CEO Kiki Victory Designs",
    description: `
    Working with Kaltech Consultancy was a game-changer for our business. Their team transformed our outdated website into a modern, sleek, and highly functional platform. The entire process was seamless, and their attention to detail was impeccable. Our new site has not only improved our online presence but also boosted our sales significantly. We couldn’t be more pleased with the results
    `,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((curr) =>
      curr === 0 ? testimonialData.length - 1 : curr - 1
    );
    console.log(currentIndex, "pervious");
  };
  const handleNext = () => {
    setCurrentIndex((curr) =>
      curr === testimonialData.length - 1 ? 0 : curr + 1
    );
  };
  return (
    <>
      <div className="min-h-screen relative costomBgLogo flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <img src="/sampleBg1.webp" className="w-full h-full" />
        </div>
        <div className="relative w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-8 z-10 overflow-hidden">
          <div className="w-[95%]">
            <div className="flex justify-between items-center w-full gap-5 py-2 ">
              <div
                style={{
                  backgroundColor: "gold",
                }}
                className="h-[2px] bg-[#4d0072] flex-1"
              />
              <div>
                <h3
                  style={{
                    color: "gold",
                  }}
                  className="AllianceFont customLine__heights 2xl:text-[4.5vw] xl:text-[4.5vw] lg:text-[4.5vw] md:portrait:text-[7vw] md:landscape:text-[4.5vw] text-[8vw] flex-shrink-0 font-[400] AzonixFont text-[#4d0072"
                >
                  Testimonials
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col md:landscape:flex-row flex-col justify-center items-center">
            <div className="relative border border-[#FFF] testimonialShadow rounded-md costomBgLogos bg-[#f8eaff]/95 bg-[#ffffff33 w-[95%] flex 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col md:landscape:flex-col lg:landscape:flex-row mobile-landscape:flex-col flex-col  justify-center items-centers gap-3 px-7 py-7">
              <div className="absolute -top-12 left-5 z-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <circle cx="60" cy="60" r="60" fill="#28176A" />
                  <path
                    d="M27 82.2L45 35L57 38L45.2 85H28.8L27 82.2ZM63 82.2L81 35L93 38L81.2 85H64.8L63 82.2Z"
                    fill="gold"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-start gap-4 flex-col  2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:portrait:w-full lg:landscape:w-1/2  md:landscape:w-full w-full">
                <h4 className="AllianceFont customLine__heights font-[700] 2xl:text-[4.5vw] xl:text-[4.5vw] lg:text-[4.5vw] lg:landscape:text-[4.5vw] md:portrait:text-[8vw] md:landscape:text-[5.5vw] text-[7.3vw] mobile-landscape:text-[6vw] leading-[normal] text-[#4d0072]">
                  What our clients say about us?
                </h4>
                <p className="font-[Montserrat] font-[300] 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw]  md:portrait:text-[2vw] lg:landscape:text-[1.3vw] md:landscape:text-[1.9vw] text-[3.5vw] mobile-landscape:text-[2.6vw] text-[#2e0e4f]">
                  Our customer testimonials are more than just kind
                  words—they’re a testament to our commitment to excellence.
                  When our clients share their experiences, they provide
                  invaluable insights into the quality, reliability, and
                  effectiveness of what we offer. Let their success stories be
                  your inspiration.
                </p>
              </div>
              <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:portrait:w-full lg:landscape:w-1/2 md:landscape:w-full w-full flex flex-col justify-center items-center gap-3 overflow-hidden">
                <div className="w-full flex justify-start gap-2 ">
                  {testimonialData.map((cur, id) => (
                    <div
                      key={id}
                      style={{
                        transform: `translateX(-${currentIndex * 102}%)`,
                      }}
                      className={`testimonialCardBC rounded-md 2xl:min-w-[55%] xl:min-w-[55%] lg:min-w-[55%] lg:landscape:min-w-[55%] md:portrait:min-w-[55%] md:landscape:min-w-[80%] min-w-[90%] py-3 px-3 flex justify-start items-center flex-col gap-5 transition-transform duration-200 ease-in-out`}
                    >
                      <div className="px-1 py-2 flex justify-start items-center gap-3 w-full  mx-auto borderGradient">
                        <div className="2xl:h-[3.5vw] 2xl:w-[3.5vw] xl:h-[3.5vw] xl:w-[3.5vw] lg:h-[3.5vw] lg:w-[3.5vw] lg:landscape:h-[3.5vw] lg:landscape:w-[3.5vw] md:portrait:h-[5vw] md:portrait:w-[5vw] md:landscape:h-[6vw] md:landscape:w-[6vw] w-[14vw] h-[14vw] mobile-landscape:h-[10vw] mobile-landscape:w-[10vw] flex-shrink-0 rounded-full overflow-hidden">
                          <img
                            src={cur.image}
                            alt="personImg1"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className=" 2xl:text-[1.15vw] xl:text-[1.15vw] lg:text-[1.15vw] lg:landscape:text-[1.5vw] md:portrait:text-[2.5vw] md:landscape:text-[2.5vw] text-[5vw] mobile-landscape:text-[3vw] font-[700] AllianceFont customLine__heights text-[#4d0072]">
                            {cur.name}
                          </h4>
                          <p className=" 2xl:text-[.8vw] xl:text-[.8vw] lg:text-[.8vw] md:portrait:text-[1.8vw] md:landscape:text-[1.5vw] lg:landscape:text-[1vw] text-[3vw] mobile-landscape:text-[2vw] font-[300] font-[Montserrat] text-[#2e0e4f]">
                            {cur.position}
                          </p>
                        </div>
                      </div>
                      <p className="font-[Montserrat] font-[300] 2xl:text-[.9vw] xl:text-[.9vw] lg:text-[.9vw] md:portrait:text-[1.9vw] md:landscape:text-[2vw] lg:landscape:text-[1.1vw] text-[3.5vw] mobile-landscape:text-[2.3vw]  text-[#2e0e4f] line-clamp-[9]">
                        {cur.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-start items-center gap-5 my-4">
                  <button onClick={handlePrev}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <circle
                        cx="26"
                        cy="26"
                        r="25"
                        stroke="black"
                        stroke-width="2"
                      />
                      <path
                        d="M17.334 26L23.834 32.5M17.334 26L23.834 19.5M17.334 26H28.709M34.6673 26H31.959"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>

                  <button onClick={handleNext}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 53 52"
                      fill="none"
                    >
                      <circle
                        cx="26.8008"
                        cy="26"
                        r="25"
                        transform="rotate(-180 26.8008 26)"
                        stroke="black"
                        stroke-width="2"
                      />
                      <path
                        d="M35.4668 26L28.9668 19.5M35.4668 26L28.9668 32.5M35.4668 26L24.0918 26M18.1335 26H20.8418"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
