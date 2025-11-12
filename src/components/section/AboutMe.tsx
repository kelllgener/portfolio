import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import picture2 from "../../assets/images/picture2.jpg";
import KeepsMeGoing from "../KeepsMeGoing";
import SectionHeader from "../SectionHeader";
import { EN } from "../../locale/en";
import {
  BugIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react";

const AboutMe = () => {
  const aboutmeHeader = [
    {
      title: EN.ABOUT_TITLE,
      subTitle: EN.ABOUT_SUB_TITLE,
      introduction: EN.ABOUT_INTRODUCTION,
    },
  ];

  const briefAbout = [
    EN.ABOUT_BRIEF_WORD_1,
    EN.ABOUT_BRIEF_WORD_2,
    EN.ABOUT_BRIEF_WORD_3,
  ];

  return (
    <section
      id="about-me"
      className="h-full container m-auto min-h-[900px] flex justify-center items-center"
    >
      <RevealOnScroll>
        {/* Header */}
        {aboutmeHeader.map((content, index) => (
          <SectionHeader key={index} {...content} />
        ))}

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row p-4 relative">
          <div className="flex-1/2 md:mt-0">
            <img
              src={picture2}
              alt="my picture"
              className="w-[300px] lg:w-[400px] object-cover rounded-2xl shadow-lg mt-10 shadow-black/60 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.3)] hover:rotate-5 hover:scale-105 transition ease-out
               dark:shadow-teal-800/60 dark:hover:shadow-[10px_10px_20px_rgba(45,212,191,0.6)]"
            />
          </div>
          <div className="flex-1/2 p-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium lg:leading-14 text-black dark:text-white">
              {EN.ABOUT_CONTENT_HEADER}
            </h1>
            <p className="text-base leading-7 md:text-lg md:leading-8 mt-4 text-gray-700 dark:text-gray-300">
              {EN.ABOUT_MAIN_CONTENT}
            </p>
            <div className="">
              <h3 className="text-lg md:text-xl font-medium mt-5 text-black dark:text-white">
                {EN.ABOUT_SUB_CONTENT_HEADER}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-6">
                <KeepsMeGoing
                  Icon={CodeXmlIcon}
                  title={EN.ABOUT_SUB_CONTENT_TITLE_1}
                  description={EN.ABOUT_SUB_CONTENT_1}
                />
                <KeepsMeGoing
                  Icon={BugIcon}
                  title={EN.ABOUT_SUB_CONTENT_TITLE_2}
                  description={EN.ABOUT_SUB_CONTENT_2}
                />
                <KeepsMeGoing
                  Icon={GraduationCapIcon}
                  title={EN.ABOUT_SUB_CONTENT_TITLE_3}
                  description={EN.ABOUT_SUB_CONTENT_3}
                />
                <KeepsMeGoing
                  Icon={LightbulbIcon}
                  title={EN.ABOUT_SUB_CONTENT_TITLE_4}
                  description={EN.ABOUT_SUB_CONTENT_4}
                />
              </div>
            </div>

            <div className="flex flex-wrap font-medium items-center gap-2 mt-8 text-xs leading-5 text-black dark:text-white">
              {briefAbout.map((b, i) => (
                <React.Fragment key={i}>
                  <div className="w-10 h-0.5 bg-gray-400/50 rounded"></div>
                  <p className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                    {b}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default AboutMe;
