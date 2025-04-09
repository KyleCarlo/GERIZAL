import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { useState } from "react";

export default function Card({ title, image, type, instance, perspective }) {
  const [front, setFront] = useState(true);
  const rotateY = useMotionValue(0);

  useMotionValueEvent(rotateY, "change", (latest) => {
    console.log("latest", latest);
    if (latest >= 90) {
      setFront(false);
    } else {
      setFront(true);
    }
  });

  return (
    <div className="perspective-[1600px]">
      <motion.div
        className=" w-[350px] h-[500px] flex justify-center rounded-lg relative cursor-pointer shadow-lg shadow-white"
        onClick={() => {
          animate(rotateY, front ? 180 : 0, { duration: 0.5 });
        }}
        whileHover={{ scale: 1.05 }}
        style={{ rotateY: rotateY }}
      >
        {/* FRONT */}
        <motion.div
          className="absolute h-full"
          animate={{ zIndex: front ? 1 : 0 }}
        >
          <img src={image} alt={title} className="w-full h-full rounded-lg" />
        </motion.div>

        {/* BACK */}
        <div className="absolute bg-[#DDD] text-black w-full h-full rounded-lg rotate-y-180 p-5 flex flex-col justify-evenly pb-10 text-justify">
          <div>
            <h2 className="font-bold italic font-[PlayfairDisplay] text-2xl">
              {title}
            </h2>
            <p>{type}</p>
          </div>
          <p className="">
            <strong>Instance:</strong> {instance}
          </p>
          <p>
            <strong>Rizal's Vision:</strong> {perspective}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
