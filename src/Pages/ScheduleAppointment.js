import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Footer } from "../components/common/Footer/Footer";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

const ScheduleAppointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const steps = [
    {
      id: 1,
      title: "Personal Information",
      fields: ["firstName", "lastName", "email", "phone"],
    },
    {
      id: 2,
      title: "Address Details",
      fields: ["address", "city", "state", "zipCode"],
    },
    {
      id: 3,
      title: "Confirmation",
      fields: [],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = () => {
    const currentStepFields = steps[currentStep - 1].fields;
    return currentStepFields.every((field) => formData[field].trim() !== "");
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    } else {
      alert("Please fill in all required fields");
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === steps.length) {
      // Final submission logic
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center w-full gap-5">
              <div className="w-1/2">
                {/* <label className="block text-sm font-medium text-gray-700 font-[Montserrat]">
                First Name
              </label> */}
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="w-1/2">
                {/* <label className="block text-sm font-medium text-gray-700 font-[Montserrat]">
                Last Name
              </label> */}
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>
            <div>
              {/* <label className="block text-sm font-medium text-gray-700 font-[Montserrat]">
                Email
              </label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              {/* <label className="block text-sm font-medium text-gray-700 font-[Montserrat]">
                Phone
              </label> */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center w-full gap-5">
              <div className="w-1/2">
                {/* <label className="block text-sm font-medium text-gray-700 font-[Montserrat]">
                Address
              </label> */}
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                  placeholder="Enter street address"
                  required
                />
              </div>
              <div className="w-1/2">
                {/* <label className="block text-sm font-medium text-gray-700 font-[Montserrat]">
                City
              </label> */}
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                  placeholder="Enter city"
                  required
                />
              </div>
            </div>
            <div>
              {/* <label className="block text-sm font-medium text-gray-700">
                State
              </label> */}
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Enter state"
                required
              />
            </div>
            <div>
              {/* <label className="block text-sm font-medium text-gray-700">
                Zip Code
              </label> */}
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                placeholder="Enter zip code"
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Confirm Your Details
            </h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="AllianceFont font-[400] text-[1.5vw]">
                <strong className="font-[Montserrat] text-[1vw]">Name : </strong> {formData.firstName} {formData.lastName}
              </p>
              <p className="AllianceFont font-[400] text-[1.5vw]">
                <strong className="font-[Montserrat] text-[1vw]">Contact : </strong> {formData.email} | {formData.phone}
              </p>
              <p className="AllianceFont font-[400] text-[1.5vw]">
                <strong className="font-[Montserrat] text-[1vw]">Address : </strong> {formData.address}, {formData.city},{" "}
                {formData.state} {formData.zipCode}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-[95%] h-full  flex justify-center items-center">
          <div className="w-[90%]">
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col md:landscape:flex-row justify-between items-center gap-3 ">
              <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:landscape:w-[70%] md:portrait:w-full w-full ">
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
                  className="AllianceFont font-[Quattrocento font-[500] text-[#4d0072] 2xl:text-[9vw] xl:text-[9vw] lg:text-[9vw] md:portrait:text-[14vw] md:landscape:text-[9vw] text-[18vw]  leading-[normal]"
                >
                  Let&apos;s get in touch
                </motion.h1>
              </div>
              <div className="2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:portrait:w-full md:landscape:w-[30%] w-full hidden 2xl:flex xl:flex lg:flex md:portrait:flex md:landscape:flex ">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
                  className="font-[Montserrat] 2xl:text-[.9vw] xl:text-[.9vw] lg:text-[.9vw] md:portrait:text-[2.2vw] md:landscape:text-[.9vw] text-[3.5vw] font-[300] text-[#2e0e4f]"
                >
                  Taking the first step toward support can feel daunting, but
                  you don’t have to do it alone. Whether you’re ready to begin
                  your journey or have questions about our services, we’re here
                  to listen and guide you.
                </motion.p>
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col md:landscape:flex-row justify-between items-center my-[1%] gap-3 2xl:gap-0 xl:gap-0 lg:gap-0 md:landscape:gap-0 md:portrait:gap-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
                className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:landscape:w-[25%] md:portrait:w-full w-full my-[3%] 2xl:my-0 xl:my-0 lg:my-0 md:portrait:my-[3%] md:landscape:my-0 "
              >
                <div className="hidden 2xl:flex xl:flex lg:flex md:portrait:flex md:landscape:flex flex-col">
                  <h4 className="AllianceFont 2xl:text-[1.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:portrait:text-[2.5vw] md:landscape:text-[1.5vw] text-[4vw]  tracking-wider font-[400] text-[#4d0072]">
                    let's start the
                  </h4>
                  <h4 className="AllianceFont 2xl:text-[1.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:portrait:text-[2.5vw] md:landscape:text-[1.5vw] text-[4vw] tracking-wider font-[400] text-[#4d0072]">
                    conversation!
                  </h4>
                </div>

                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:portrait:flex-row md:landscape:flex-col 2xl:justify-start xl:justify-start lg:justify-start md:portrait:justify-between md:landscape:justify-start justify-between 2xl:items-start xl:items-start lg:items-start md:landscape:items-start md:portrait:items-center items-center gap-2 2xl:mt-[20%] xl:mt-[20%] lg:mt-[20%] md:portrait:mt-[1%] md:landscape:mt-[20%] mt-[2%] 2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:landscape:w-[65%] md:portrait:w-full w-full">
                  <Link
                    className="AllianceFont 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.3vw] text-[2.8vw]  font-[700] text-[#4d0072]"
                    href="tel:+1(931)-266-6101"
                  >
                    +1(931)-266-6424
                  </Link>
                  <Link
                    className="AllianceFont 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.3vw] text-[2.8vw]  font-[700] text-[#4d0072] "
                    href="mailto:hello@kaltechconsultancy.tech"
                  >
                    info@recovip.com
                  </Link>
                  <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:portrait:flex-row md:landscape:flex-col flex-row justify-start items-start">
                    <Link
                      className="text-[#4d0072] 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.3vw] text-[2.8vw]  font-[700]"
                      href="https://maps.app.goo.gl/C1uULXRQ95gTG7bP8"
                      target="_blank"
                    >
                      Tennessee
                    </Link>
                    <Link
                      className="text-[#4d0072] 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:landscape:text-[1.1vw] md:portrait:text-[2.3vw] text-[2.8vw]  font-[700]"
                      href="https://maps.app.goo.gl/C1uULXRQ95gTG7bP8"
                      target="_blank"
                    >
                      TN 3704
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 1 }}
                className=" 2xl:w-[60%] mx-auto xl:w-[60%] lg:w-[60%] md:landscape:w-[60%] md:portrait:w-full w-full flex flex-col justify-center items-center gap-5"
              >
                {/* <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Name *"
                      //   onChange={handleChange}
                      name="fullName"
                      //   value={contactDeltails.fullName}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Email *"
                      //   onChange={handleChange}
                      name="email"
                      //   value={contactDeltails.email}
                    />
                  </div>
                </div> */}
                {/* change */}
                {/* <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Phone"
                      //   onChange={handleChange}
                      name="phonenumber"
                      //   value={contactDeltails.phonenumber}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
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
                      className="w-full AllianceFont font-[400] 2xl:text-[1.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:landscape:text-[1.3vw] md:portrait:text-[2.5vw] text-[4vw] text-[#2e0e4f] placeholder:text-[#2e0e4f]  py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Message *"
                      //   onChange={handleChange}
                      name="message"
                      //   value={contactDeltails.message}
                    ></textarea>
                  </div>
                </div> */}
                <form
                  onSubmit={handleSubmit}
                  className="w-full mx-auto  rounded-lg p-6"
                >
                  <div className="flex justify-between mb-6">
                    {steps.map((step) => (
                      <div
                        key={step.id}
                        className={`w-full text-center mx-2 py-2 rounded-full AllianceFont font-[400] ${
                          currentStep === step.id
                            ? "bg-[#2e0e4f] text-white"
                            : currentStep > step.id
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-[#2e0e4f]"
                        }`}
                      >
                        {step.title}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h2 className="text-[2vw]  mb-4 text-[#2e0e4f] AllianceFont font-[400]">
                      {steps[currentStep - 1].title}
                    </h2>
                    {renderStepContent()}
                  </div>

                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center AllianceFont font-[400] text-[#2e0e4f] px-4 py-2 rounded-md  transition"
                      >
                        <ChevronLeft className="mr-2" /> Previous
                      </button>
                    )}

                    {currentStep < steps.length ? (
                      <>
                        <motion.button
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: [0.2, 0.6, 1] }}
                          transition={{
                            duration: 0.6,
                            ease: "backInOut",
                            delay: 0.4,
                            times: [0.2, 0.6, 1],
                          }}
                          type="button"
                          onClick={nextStep}
                          className={`text-[#2e0e4f]  flex justify-center items-center gap-1 AllianceFont font-[400] 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw]  md:landscape:text-[1.2vw] md:portrait:text-[2.2vw] 2xl:w-[8.5vw] xl:w-[8.5vw] lg:w-[8.5vw] md:landscape:w-[8.5vw] md:portrait:w-[14vw] 2xl:h-[8.5vw] xl:h-[8.5vw] lg:h-[8.5vw] md:landscape:h-[8.5vw] md:portrait:h-[14vw] h-[25vw] w-[25vw] border border-[#2e0e4f]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-start p-3  disabled:opacity-55 disabled:cursor-not-allowed`}
                        >
                          Next
                        </motion.button>
                      </>
                    ) : (
                      <>
                        {/* <button
                          type="submit"
                          className="ml-auto flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                        >
                          Submit <Check className="ml-2" />
                        </button> */}
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
                          className={`text-[#2e0e4f]  flex justify-center items-center gap-1 AllianceFont font-[400] 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw]  md:landscape:text-[1.2vw] md:portrait:text-[2.2vw] 2xl:w-[8.5vw] xl:w-[8.5vw] lg:w-[8.5vw] md:landscape:w-[8.5vw] md:portrait:w-[14vw] 2xl:h-[8.5vw] xl:h-[8.5vw] lg:h-[8.5vw] md:landscape:h-[8.5vw] md:portrait:h-[14vw] h-[25vw] w-[25vw] border border-[#2e0e4f]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-start p-3  disabled:opacity-55 disabled:cursor-not-allowed`}
                          //   disabled={isLoading}
                        >
                          {/* {isLoading ? "Sending..." : "Send Message"} */}
                          Submit
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
                      </>
                    )}
                  </div>
                </form>

                {/* <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.2, 0.6, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: "backInOut",
                    delay: 0.4,
                    times: [0.2, 0.6, 1],
                  }}
                 
                  className={`text-[#2e0e4f]  flex justify-center items-center gap-1 AllianceFont font-[400] 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw]  md:landscape:text-[1.2vw] md:portrait:text-[2.2vw] 2xl:w-[8.5vw] xl:w-[8.5vw] lg:w-[8.5vw] md:landscape:w-[8.5vw] md:portrait:w-[14vw] 2xl:h-[8.5vw] xl:h-[8.5vw] lg:h-[8.5vw] md:landscape:h-[8.5vw] md:portrait:h-[14vw] h-[25vw] w-[25vw] border border-[#2e0e4f]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-start p-3  disabled:opacity-55 disabled:cursor-not-allowed`}
                
                >
                 
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
                </motion.button> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ScheduleAppointment;

{
  /* <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6"
>
 
  <div className="flex justify-between mb-6">
    {steps.map((step) => (
      <div
        key={step.id}
        className={`w-full text-center mx-2 py-2 rounded-full ${
          currentStep === step.id
            ? "bg-indigo-500 text-white"
            : currentStep > step.id
            ? "bg-green-500 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {step.title}
      </div>
    ))}
  </div>

 
  <div className="mb-6">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">
      {steps[currentStep - 1].title}
    </h2>
    {renderStepContent()}
  </div>

 
  <div className="flex justify-between">
    {currentStep > 1 && (
      <button
        type="button"
        onClick={prevStep}
        className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
      >
        <ChevronLeft className="mr-2" /> Previous
      </button>
    )}

    {currentStep < steps.length ? (
      <button
        type="button"
        onClick={nextStep}
        className="ml-auto flex items-center bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
      >
        Next <ChevronRight className="ml-2" />
      </button>
    ) : (
      <button
        type="submit"
        className="ml-auto flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
      >
        Submit <Check className="ml-2" />
      </button>
    )}
  </div>
</form>; */
}
