import EmailForm from "../EmailForm";
import RevealOnScroll from "../RevealOnScroll";
import SectionHeader from "../SectionHeader";
import TooltipButton from "../TooltipButton";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { FacebookIcon } from "../icons/FacebookIcon";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { EN } from "../../locale/en";

const ContactMe = () => {
  const contactmeHeader = [
    {
      title: EN.CONT_TITLE,
      subTitle: EN.CONT_SUB_TITLE,
      introduction: EN.CONT_INTRODUCTION
    },
  ];

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      contact: "adriangener01@gmail.com",
    },
    { icon: PhoneIcon, contact: "0961-134-798" },
    {
      icon: MapPinIcon,
      contact: "Calamba City, Laguna",
    },
  ];

  const socialMedia = [
    {
      svg: <LinkedInIcon className="m-auto text-[#0077B5]" />,
      link: EN.CONT_LINKEDIN.LINK,
      tooltip: EN.CONT_LINKEDIN.TOOLTIP,
    },
    {
      svg: <GitHubIcon className=" m-auto" />,
      link: EN.CONT_GITHUB.LINK,
      tooltip: EN.CONT_GITHUB.TOOLTIP,
    },
    {
      svg: <InstagramIcon className=" m-auto text-[#E4405F]" />,
      link: EN.CONT_INSTAGRAM.LINK,
      tooltip: EN.CONT_INSTAGRAM.TOOLTIP,
    },
    {
      svg: <FacebookIcon className=" m-auto text-[#1877F2]" />,
      link: EN.CONT_FACEBOOK.LINK,
      tooltip: EN.CONT_FACEBOOK.TOOLTIP,
    },
  ];

  return (
    <section
      id="contact-me"
      className="h-full container m-auto min-h-[900px] flex justify-center items-center"
    >
      <RevealOnScroll>
        {/* Header */}
        {contactmeHeader.map((content, index) => (
          <SectionHeader key={index} {...content} />
        ))}

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-around gap-4 ">
          <EmailForm />

          <div className="flex flex-col gap-10">
            <div
              className="shadow-sm rounded-2xl p-4 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
           							backdrop-blur-xl sm:shadow-md sm:shadow-gray-500/60 dark:text-white dark:shadow-teal-800/6"
            >
              <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">
                {EN.CONT_DIV_1_TITLE}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-4">
                {EN.CONT_DIV_1_SUB_TITLE}
              </p>
              <div className="flex flex-col gap-4 text-base leading-7 text-gray-700 dark:text-gray-300">
                {contactInfo.map((cont, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <cont.icon className="h-5" /> <span>{cont.contact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="shadow-sm rounded-2xl p-4 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
           							backdrop-blur-xl sm:shadow-md sm:shadow-gray-500/60 dark:text-white dark:shadow-teal-800/6"
            >
              <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">
                {EN.CONT_DIV_2_TITLE}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-4">
                {EN.CONT_DIV_1_SUB_TITLE}
              </p>
              <div className="flex flex-row gap-5">
                {socialMedia.map((social, index) => (
                  <TooltipButton tooltip={social.tooltip}>
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      className="w-10 h-10 ring-1 flex justify-center items-center rounded-xl ring-gray-800/50 bg-white
									dark:ring-white/50 dark:bg-black hover:bg-gray-300/50 transition duration-300 ease-in-out"
                    >
                      {social.svg}
                    </a>
                  </TooltipButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ContactMe;
