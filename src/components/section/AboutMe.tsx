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

const AboutMe = () => {
  return (
    <section id="about-me" className="h-full container m-auto min-h-[900px] flex justify-center items-center">
      <RevealOnScroll>
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
            <div className="fixed top-0 left-4">
              <h3 className=" text-lg font-medium mb-4 text-gray-800 dark:text-gray-300">
                ABOUT ME
              </h3>
              <div className="w-30 h-0.5 bg-gray-400/50 left-3 top-8 rounded fixed"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:leading-14 text-black dark:text-white">
              Create innovations that transform the world.
            </h1>
            <p className="text-md md:text-lg font-light lg:text-xl mt-4 text-gray-700 lg:leading-6 dark:text-gray-300">
              I’m Michael Adrian V. Gener, a recent Computer Science graduate
              from City College of Calamba, aspiring to be a Web Developer or
              Software Engineer. I build responsive, functional web applications
              using ReactJS, Tailwind CSS, PHP, and MySQL, with additional
              experience in Java and Python. I’m committed to improving my
              skills through project-based learning and open to freelancing or
              full-time opportunities.
            </p>
            <div className="">
              <h3 className="text-black text-xl font-normal mt-5 dark:text-white">
                What Makes Me Going
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
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
            <div className="flex flex-wrap font-medium items-center gap-2 mt-8 text-xs text-gray-700 dark:text-gray-300">
              <div className="w-20 h-0.5 bg-gray-400/50 rounded"></div>
              <p>Based in Philippines</p>
              <div className="w-5 h-0.5 bg-gray-400/50 rounded"></div>
              <p>College Fresh Graduate</p>
              <div className="w-5 h-0.5 bg-gray-400/50 rounded"></div>
              <p>Fluent in English and Filipino</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default AboutMe;
