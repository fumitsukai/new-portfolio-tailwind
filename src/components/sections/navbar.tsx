import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { useMediaQuery } from "../hooks/use-media-query";
import { ModeToggle } from "../mode-toggle";
import { FaGithub } from "react-icons/fa";
import { File } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <div className="sticky top-0 backdrop-blur-md px-10 flex justify-between z-50 py-4">
      <div className="mx-10 flex items-center">
        <ModeToggle />
      </div>
      <div className="flex justify-end gap-10 me-10 mt-2 ">
        <NavLink
          to="#about"
          className="hover:text-persianRed  hover:scale-110 transition duration-300 ease-out"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="#work"
          className="hover:text-persianRed  hover:scale-110 transition duration-300 ease-out"
        >
          WORK
        </NavLink>
        <NavLink
          to="#about"
          className="hover:text-persianRed  hover:scale-110 transition duration-300 ease-out"
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  ) : (
    <div className="flex justify-between px-2 py-1 sticky top-0 backdrop-blur-md z-50">
      <Drawer direction="left">
        <DrawerTrigger>
          <Menu className="dark:text-linen text-raisinBlack" size={32} />
        </DrawerTrigger>
        <DrawerContent>
          <button className="font-semibold text-xl mb-3">ABOUT</button>
          <button className="font-semibold text-xl mb-3">WORK</button>
          <button className="font-semibold text-xl mb-6">CONTACT</button>
          <button className="flex flex-col items-center font-light text-sm mb-3">
            <FaGithub size={40} />
            Github
          </button>
          <button className="flex flex-col items-center mb-3 font-light text-sm">
            <File size={40} />
            Resume
          </button>
        </DrawerContent>
      </Drawer>
      <ModeToggle />
    </div>
  );
}
