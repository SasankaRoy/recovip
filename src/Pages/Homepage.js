import React, { useEffect } from "react";
import { Herosection } from "../components/Home/Herosection";
import { Footer } from "../components/common/Footer/Footer";
import { Testimonials } from "../components/Home/Testimonials";
import { Blog } from "../components/Home/Blog";

export const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Herosection />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};
