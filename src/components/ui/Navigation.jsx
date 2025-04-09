import Logo from "/logo.png";
import { useState } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";

const sections = [
  { title: "Intro", num: "I", id: 0 },
  { title: "Vision", num: "II", id: 1 },
  { title: "Perspectives", num: "III", id: 2 },
  { title: "Implications", num: "IV", id: 3 },
];

export default function Navigation() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-dvh flex flex-col w-min-content fixed">
      <div className="p-2 w-[100px] relative left-2 top-5">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex-1 flex justify-evenly items-center w-[150px] relative top-[-15px]">
        {/* SEC NUM */}
        <ul className="h-full flex flex-col justify-evenly text-end ml-4">
          {sections.map((section) => {
            return (
              <>
                <motion.li
                  key={section.id}
                  initial={{
                    x: active == 0 ? "45px" : "0px",
                    textAlign: "start",
                    fontWeight: "normal",
                  }}
                  animate={{
                    x: active == section.id ? "0" : "45px",
                    textAlign: active == section.id ? "end" : "start",
                    fontWeight: active == section.id ? "bold" : "normal",
                  }}
                  className="cursor-pointer"
                  onClick={() => setActive(section.id)}
                >
                  {section.num}
                </motion.li>
              </>
            );
          })}
        </ul>
        {/* LINE */}
        <div className="border-[#333] border-2 rounded-full h-[80%] mx-2"></div>
        {/* DOTS */}
        <div className="absolute h-full flex flex-col justify-evenly left-[45px] gap-y-1">
          {sections.map((section) => {
            return (
              <motion.div
                key={section.id}
                className="w-[12px] h-[12px] rounded-full bg-[#C9A648]"
                initial={{
                  scale: 0,
                }}
                animate={{ scale: active == section.id ? 1 : 0 }}
              ></motion.div>
            );
          })}
        </div>
        {/* SEC NAME */}
        <ul className="h-full flex flex-col justify-evenly text-xs">
          {sections.map((section) => {
            return (
              <motion.li
                key={section.id}
                initial={{ scale: 0 }}
                animate={{ scale: active == section.id ? 1 : 0 }}
                className="cursor-pointer font-bold"
                onClick={() => setActive(section.id)}
              >
                {section.title}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
