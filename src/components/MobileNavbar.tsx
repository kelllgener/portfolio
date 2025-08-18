import React, { useEffect, useState } from "react";
import MobileNavLink from "./MobileNavLink";
import {
  HomeIcon,
  IdentificationIcon,
  BriefcaseIcon,
  FolderOpenIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline"; // Assuming you have these icons
import DarkModeToggle from "./DarkModeToggle";

interface Props {
  menuOpen: boolean;
  setOpenMenu: (open: boolean) => void;
}

const MobileNavbar = ({ menuOpen, setOpenMenu }: Props) => {
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
      className={`fixed top-0 right-0 p-4 bg-white z-20 flex flex-col transition-all duration-500 ease-in-out
                    dark:bg-black
                    ${
                      menuOpen
                        ? "h-screen translate-x-0 opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 translate-x-100 pointer-events-none"
                    }
        `}
    >
      <div className="flex mt-15 flex-col space-y-5 sm:hidden">
        <DarkModeToggle />
        <MobileNavLink
          title="Home"
          href="#home"
          isActive={activeSection === "home"}
          Icon={HomeIcon}
        />
        <MobileNavLink
          title="About Me"
          href="#about-me"
          isActive={activeSection === "about-me"}
          Icon={IdentificationIcon}
        />
        <MobileNavLink
          title="Experience"
          href="#experience"
          isActive={activeSection === "experience"}
          Icon={BriefcaseIcon}
        />
        <MobileNavLink
          title="Skills"
          href="#skills"
          isActive={activeSection === "skills"}
          Icon={CodeBracketIcon}
        />
        <MobileNavLink
          title="Projects"
          href="#projects"
          isActive={activeSection === "projects"}
          Icon={FolderOpenIcon}
        />
        <MobileNavLink
          title="Contact Me"
          href="#contact-me"
          isActive={activeSection === "contact-me"}
          Icon={EnvelopeIcon}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
