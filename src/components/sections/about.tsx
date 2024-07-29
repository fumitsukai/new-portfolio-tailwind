import logo from "../../assets/img/nobglogo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { File } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function About() {
  const github = "https://github.com/fumitsukai";
  return (
    <>
      <div className="text-center mt-20" id="about">
        <h1 className="font-bold text-2xl mb-2">ALEXANDRU PANDELEA</h1>
        <h2 className=" mb-4 md:mb-20 ">WEB DEVELOPER</h2>
      </div>
      <section className="flex flex-col md:grid md:grid-cols-3 justify-between  md:container md:gap-10">
        <img
          src={logo}
          alt="logo"
          className="mb-5 mx-4 bg-linenDark dark:bg-[#64979b] dark:saturate-50 rounded-lg"
        />
        <div className="flex justify-center px-4 gap-4 mb-5 md:hidden">
          <div className="border dark:border-b-linen border-b-raisinBlack w-full my-auto"></div>
          <button className="">
            <FaGithub size={24} />
          </button>
          <button>
            <FaLinkedin size={24} />
          </button>
          <div className="border dark:border-b-linen border-b-raisinBlack md:w-1/4 my-auto"></div>
        </div>
        <div className="mx-4 mb-20 text-wrap md:col-span-2">
          <p className="mb-3">
            Hello! I'm Alex, a dedicated Web Developer with a passion for
            creating functional and visually appealing websites. Skilled in
            HTML, CSS, and JavaScript, I enjoy bringing designs to life and
            ensuring smooth user experiences. My journey began with a
            fascination for how websites work, and has grown into a love for
            coding and problem-solving.
          </p>
          <p className="mb-3">
            Beyond coding, I have a deep passion for music and video games.
            These interests fuel my creativity and inspire me to think outside
            the box in my development work. I'm always eager to learn new
            technologies and techniques, and I look forward to contributing to
            innovative web solutions.
          </p>
          <p className="mb-3">
            I am always on the look for interesting projects to be apart of so
            feel free to{" "}
            <span className="text-persianRed dark:hover:text-verdigris ">
              contact me
            </span>
            .
          </p>
          <div className="md:flex hidden justify-around mt-20 pb-12">
            <Link to={github}>
              <m.button
                className="flex flex-col items-center font-light text-sm mb-3  hover:text-persianRed dark:hover:text-verdigris"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileTap={{ scale: 0.5 }}
              >
                <FaGithub size={40} />
                Github
              </m.button>
            </Link>
            <m.button
              className="flex flex-col items-center mb-3 font-light text-sm  hover:text-persianRed dark:hover:text-verdigris"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileTap={{ scale: 0.5 }}
            >
              <File size={40} />
              Resume
            </m.button>
          </div>
        </div>
      </section>
    </>
  );
}
