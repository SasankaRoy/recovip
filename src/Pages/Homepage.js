import React from "react";
import { Herosection } from "../components/Home/Herosection";
import { Footer } from "../components/common/Footer/Footer";

export const Homepage = () => {
  return (
    <>
      <Herosection />
      <div className="min-h-screen bg-slate-500 flex justify-center items-center text-[4vw] capitalize text-white">
        the contact section 
      </div>
      <Footer />
    </>
  );
};
