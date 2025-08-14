import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import {
  HomeIcon,
  IdentificationIcon,
  BriefcaseIcon,
  FolderOpenIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline"; // Assuming you have these icons
import DarkModeToggle from "./DarkModeToggle";

interface Props {
  menuOpen: boolean;
  setOpenMenu: (open: boolean) => void;
}

const Header = ({ menuOpen, setOpenMenu }: Props) => {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about-me",
        "experience",
        "skills",
        "projects",
        "contact-me",
      ];
      const scrollPosition = window.scrollY + 150; // offset so it detects slightly earlier

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed sm:left-0 right-0 z-40 sm:px-8 sm:py-2 rounded-xl mx-auto top-5 sm:w-[500px] md:w-[700px] lg:w-auto max-w-[1000px] 
                   bg-transparent backdrop-blur-3xl sm:shadow-xl sm:shadow-gray-500/60 sm:bg-white
                   dark:bg-black/10 dark:text-white dark:shadow-teal-800/60"
    >
      <div className="hidden sm:flex flex-row justify-center gap-10 opacity-100 ">
        <NavLink
          title="Home"
          href="#home"
          isActive={activeSection === "home"}
          Icon={HomeIcon}
        />
        <NavLink
          title="About Me"
          href="#about-me"
          isActive={activeSection === "about-me"}
          Icon={IdentificationIcon}
        />
        <NavLink
          title="Experience"
          href="#experience"
          isActive={activeSection === "experience"}
          Icon={BriefcaseIcon}
        />
        <NavLink
          title="Skills"
          href="#skills"
          isActive={activeSection === "skills"}
          Icon={CodeBracketIcon}
        />
        <NavLink
          title="Projects"
          href="#projects"
          isActive={activeSection === "projects"}
          Icon={FolderOpenIcon}
        />
        <NavLink
          title="Contact Me"
          href="#contact-me"
          isActive={activeSection === "contact-me"}
          Icon={EnvelopeIcon}
        />
        <DarkModeToggle />
      </div>

      <div
        id="mobile-navbar"
        className="flex justify-center mx-4 items-center relative z-40 sm:hidden"
      >
        <button
          className="cursor-pointer transition ease-in hover:bg-black/90 hover:text-white ring-1 rounded w-7 h-7
                    shadow-md shadow-black flex items-center justify-center
                    dark:shadow-teal-800 dark:hover:bg-white dark:hover:text-black"
          onClick={() => setOpenMenu(!menuOpen)}
        >
          {!menuOpen ? (
            <PaperAirplaneIcon className="size-5 transition" />
          ) : (
            <PaperAirplaneIcon className="size-5 rotate-180 transition" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
