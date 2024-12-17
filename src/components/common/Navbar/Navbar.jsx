import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="w-[90%] mx-auto py-3">
        <ul className="flex justify-between items-center">
          {[
            {
              path: "/service",
              title: "Private Therarapy",
            },
            {
              path: "/service",
              title: "Group Therarapy",
            },
            {
              path: "/service",
              title: "Virtual Therarapy",
            },
            {
              path: "/contact",
              title: "Contact",
            },
          ].map((cur, id) => (
            <Link
              key={id}
              to={cur.path}
              className="font-[Roboto] text-[#100018] 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:portrait:text-[2.3vw] md:landscape:text-[1.1vw] text-[3.5vw] font-[500]"
            >
              {cur.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
