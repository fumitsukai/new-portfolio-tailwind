import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
interface Props {
  thumbnail: string;
  name: string;
}
export default function Project({ thumbnail, name }: Props) {
  const initialBackground = {
    rest: {
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  const hoverBackground = {
    rest: {
      x: "100%",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  const hoverText = {
    rest: {
      opacity: 0,
      transition: {
        duration: 0.1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <Link>
        <m.div
          className="m-4 h-24 md:h-44 rounded-lg relative overflow-hidden cursor-pointer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <h3 className="absolute  text-linen z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg text-center">
            {name}
          </h3>
          <m.img
            src={thumbnail}
            alt=""
            className="overflow-hidden h-24 md:h-44 w-full grayscale brightness-[25%] object-cover rounded-md object-center"
            variants={initialBackground}
          />
          <m.div
            className="h-24 md:h-44  bg-persianRed absolute top-0 w-full rounded-lg z-20 right-0"
            variants={hoverBackground}
          ></m.div>
          <m.div
            className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-full justify-center flex-col text-linen my-auto"
            variants={hoverText}
          >
            <m.p className="mb-1">SOMETHING ABOUT THE PROJECT</m.p>
            <div className="border p-2">VIEW PROJECT</div>
          </m.div>
        </m.div>
      </Link>
    </>
  );
}
