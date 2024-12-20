import React, { useEffect } from "react";
import { Herosection } from "../components/Home/Herosection";
import { Footer } from "../components/common/Footer/Footer";
import { Testimonials } from "../components/Home/Testimonials";

export const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Herosection />
      {/* <div className="min-h-screen bg-slate-500 flex justify-center items-center text-[4vw] capitalize text-white"> */}
      <Testimonials />
      {/* </div> */}
      <div className="min-h-screen bg-cyan-500 flex justify-center items-center text-[4vw] capitalize text-white">
        Blog
      </div>
      <Footer />
    </>
  );
};
