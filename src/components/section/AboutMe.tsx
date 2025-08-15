import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import picture2 from "../../assets/images/picture2.jpg";
import {
  CodeBracketIcon,
  BugAntIcon,
  AcademicCapIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import KeepsMeGoing from "../KeepsMeGoing";
import SectionHeader from "../SectionHeader";

const AboutMe = () => {
  const aboutmeHeader = [
    {
      title: "ABOUT ME",
      subTitle: "Get to Know Me",
      introduction:
        "An overview of my background, passions, and experiences, highlighting the journey that shaped me as a developer and problem-solver.",
    },
  ];

  const briefAbout = [
    "Tech Savy",
    "Computer Science Fresh Graduate",
    "Fluent in English and Filipino",
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
              height={300}
              width={300}
              alt="my picture"
              className="rounded-2xl shadow-lg mt-10 shadow-black/60 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.3)] hover:rotate-8 hover:scale-105 transition ease-out
               dark:shadow-teal-800/60 dark:hover:shadow-[10px_10px_20px_rgba(45,212,191,0.6)]"
            />
          </div>
          <div className="flex-1/2 p-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium lg:leading-14 text-black dark:text-white">
              Create innovations that transform the world.
            </h1>
            <p className="text-base leading-7 md:text-lg md:leading-8 mt-4 text-gray-700 lg:leading-6 dark:text-gray-300">
              I’m Michael Adrian V. Gener, a recent Computer Science graduate
              from City College of Calamba, aspiring to be a Web Developer or
              Software Engineer. I build responsive, functional web applications
              using ReactJS, Tailwind CSS, PHP, and MySQL, with additional
              experience in Java and Python. I’m committed to improving my
              skills through project-based learning and open to freelancing or
              full-time opportunities.
            </p>
            <div className="">
              <h3 className="text-lg md:text-xl font-medium mt-5 text-black dark:text-white">
                What Keeps Me Going
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-6">
                <KeepsMeGoing
                  Icon={CodeBracketIcon}
                  title="Clean Code"
                  description="Writing maintainable, scalable solutions"
                />
                <KeepsMeGoing
                  Icon={BugAntIcon}
                  title="Problem Solver"
                  description="Challenges are opportunities to grow"
                />
                <KeepsMeGoing
                  Icon={AcademicCapIcon}
                  title="Passionate Learner"
                  description="Always free when it comes to learning new things"
                />
                <KeepsMeGoing
                  Icon={LightBulbIcon}
                  title="Innovation"
                  description="New technologies and ideas to improve lives"
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
