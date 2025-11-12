import { useEffect, useState } from "react";
import NavLink from "../NavLink";
import DarkModeToggle from "../DarkModeToggle";
import {
  BriefcaseBusinessIcon,
  ChevronsRightIcon,
  CodeXmlIcon,
  FolderCodeIcon,
  HouseIcon,
  IdCardIcon,
  MailIcon,
} from "lucide-react";

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
      className="fixed sm:left-0 right-0 z-40 sm:px-8 sm:py-2 rounded-xl mx-auto top-5 sm:w-[540px] md:w-[700px] lg:w-auto max-w-[1000px] 
                   bg-transparent backdrop-blur-3xl sm:shadow-xl sm:shadow-gray-500/60 sm:bg-white
                   dark:bg-black/10 dark:text-white dark:shadow-teal-800/60"
    >
      <div className="hidden sm:flex flex-row justify-center gap-10 opacity-100 ">
        <NavLink
          title="Home"
          href="#home"
          isActive={activeSection === "home"}
          Icon={HouseIcon}
        />
        <NavLink
          title="About Me"
          href="#about-me"
          isActive={activeSection === "about-me"}
          Icon={IdCardIcon}
        />
        <NavLink
          title="Experience"
          href="#experience"
          isActive={activeSection === "experience"}
          Icon={BriefcaseBusinessIcon}
        />
        <NavLink
          title="Skills"
          href="#skills"
          isActive={activeSection === "skills"}
          Icon={CodeXmlIcon}
        />
        <NavLink
          title="Projects"
          href="#projects"
          isActive={activeSection === "projects"}
          Icon={FolderCodeIcon}
        />
        <NavLink
          title="Contact Me"
          href="#contact-me"
          isActive={activeSection === "contact-me"}
          Icon={MailIcon}
        />
        <DarkModeToggle />
      </div>

      <div
        id="mobile-navbar"
        className="flex justify-center items-center sm:hidden fixed top-5 right-5 z-40   
             w-8 h-8 cursor-pointer rounded-full bg-white dark:bg-black text-black dark:text-white
             shadow-md shadow-black 
             transition ease-in hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black ring-1"
      >
        <button
          onClick={() => setOpenMenu(!menuOpen)}
          className="w-full h-full flex items-center justify-center hover:cursor-pointer"
        >
          {!menuOpen ? (
            <ChevronsRightIcon className="w-5 h-5 transition-transform" />
          ) : (
            <ChevronsRightIcon className="w-5 h-5 rotate-180 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
