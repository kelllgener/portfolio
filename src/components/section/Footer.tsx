import resume from "../../assets/Gener_Micheal_Adrian_Resume.pdf";
import { EN } from "../../locale/en";
import { ExternalLink, ExternalLinkIcon } from "lucide-react";

interface FooterProps {
  showAlert: (message?: string) => void;
}

const Footer = ({ showAlert }: FooterProps) => {
  const quickLinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Me",
      link: "#about-me",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact Me",
      link: "#contact-me",
    },
  ];

  return (
    <div className="container mx-auto text-black dark:text-white flex flex-col gap-4 p-4 justify-center items-center">
      <div className="flex flex-col md:flex-row xl:pl-10 gap-4 md:gap-10 p-2 w-full">
        <div className="flex flex-col basis-1/3">
          <h4 className="text-base md:text-lg font-semibold">
            {EN.FOOTER_TITLE}
          </h4>
          <div className="text-xs md:text-sm leading-5 md:leading-6 text-gray-700 dark:text-gray-300">
            <span className="">{EN.FOOTER_SUB_TITLE}</span>
          </div>
        </div>
        <div className="flex flex-col basis-1/3">
          <h4 className="text-base md:text-lg font-semibold">Quick Links</h4>
          <div className="text-xs md:text-sm leading-5 md:leading-6 text-gray-700 dark:text-gray-300">
            <ul>
              {quickLinks.map((link, index) => (
                <li className="" key={index}>
                  <a
                    className="hover:text-black hover:underline transition duration-300 ease-in-out "
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col basis-1/3">
          <h4 className="text-base md:text-lg font-semibold">Latest Project</h4>
          <div className="text-xs md:text-sm leading-5 md:leading-6 text-gray-700 dark:text-gray-300">
            <ul>
              <li className="">
                <a
                  href="https://github.com/kelllgener"
                  className="inline-flex items-center gap-1 hover:text-black hover:underline transition duration-300 ease-in-out"
                  target="_blank"
                >
                  <ExternalLink className="h-4" />
                  <span>View Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={resume}
                  download
                  onClick={() => showAlert("Resume downloaded successfully.")}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:text-black hover:underline transition duration-300 ease-in-out"
                >
                  <ExternalLinkIcon className="h-4" />
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="text-xs leading-5">
        © {new Date().getFullYear()} Micheal Adrian Gener. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
