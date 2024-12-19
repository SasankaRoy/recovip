import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-transparent z-50 hidden 2xl:flex xl:flex lg:flex md:portrait:flex md:landscape:flex ">
      <div className="w-[90%] mx-auto py-3 -mt-[2.6%]">
        <ul className="flex justify-between items-center">
          {[
            {
              path: "/service",
              title: "Private Therarapy",
              bg: "#100018",
            },
            {
              path: "/service",
              title: "Group Therarapy",
              bg: "#783be0",
            },
            {
              path: "/service",
              title: "Virtual Therarapy",
              bg: "#370051",
            },
            {
              path: "/schedule-appointment",
              title: "Schedule Appointment",
              bg: "",
            },
          ].map((cur, id) => (
            <Link
              key={id}
              to={cur.path}
              className="AllianceFont customLine__heights  hoverEffect text-[#4d0072] 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:portrait:text-[2.3vw] md:landscape:text-[1.1vw] text-[3.5vw] font-[500] flex justify-center items-center gap-2"
            >
              <span
                style={{
                  background: cur?.bg || "#100018",
                }}
                className=" text-white transition-all duration-500 ease-linear flex justify-center items-center rounded-full"
              >
                <ArrowUpRight size={15} />
              </span>
              <p>{cur.title}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
