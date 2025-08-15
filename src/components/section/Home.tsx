import React, { useEffect, useState } from "react";
import {
  ArrowDownTrayIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

import RevealOnScroll from "../RevealOnScroll";
import profile from "../../assets/images/profile.jpg";
import resume from "../../assets/Resume.pdf";

const Home = () => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [index, setIndex] = useState(0); // Track current char index
  const [step, setStep] = useState(1);   // Track which line we're typing

  const text1 = "Full Stack";
  const text2 = "Developer &";
  const text3 = "Mobile Development Enthusiast";

  useEffect(() => {
    let index = 0;
    let step = 1; // 1 = typing first line, 2 = typing second, 3 = typing third

    const interval = setInterval(() => {
      if (step === 1) {
        if (index <= text1.length) {
          setLine1(text1.substring(0, index));
          setIndex(index);
          setStep(step);
          index++;
        } else {
          step = 2;
          index = 0;
        }
      } else if (step === 2) {
        if (index <= text2.length) {
          setLine2(text2.substring(0, index));
          setIndex(index);
          setStep(step);
          index++;
        } else {
          step = 3;
          index = 0;
        }
      } else if (step === 3) {
        if (index <= text3.length) {
          setLine3(text3.substring(0, index));
          setIndex(index);
          setStep(step);
          index++;
        } else {
          clearInterval(interval);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-full container m-auto min-h-[800px] flex justify-center items-center">
      <RevealOnScroll>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center p-4">
          <div className="flex-1/2">
            <h3 className="flex flex-row gap-2 items-center mb-4">
              <span className="text-2xl text-green-500 animate-pulse">•</span>
              <span className="text-gray-700 text-sm dark:text-gray-300">
                Currently Available for job opportunities.
              </span>
            </h3>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-16 font-bold">
              <h1 className="text-black dark:text-white">
                {line1}
                {index < text1.length && step === 1 ? "|" : ""}
                </h1>
                <h1 className="text-teal-800">
                  {line2}
                  {index < text2.length && step === 2 ? "|" : ""}
                </h1>
              <h1 className="text-black dark:text-white">
                {line3}
                {index < text3.length && step === 3 ? "|" : ""}
              </h1>
            </div>

            <h4 className="text-base leading-7 md:text-lg md:leading-8 text-gray-700 font-normal mt-2 dark:text-gray-300">
              A Computer Science graduate with a strong background in software
              development. I am eager to learn and apply my skills in a
              collaborative environment to build scalable applications.
            </h4>

            <div className="flex items-center justify-left gap-4 mt-4">
              <a href="#contact-me" className="btn bg-teal-800 flex flex-row">
                <CursorArrowRaysIcon className="size-6" /> &nbsp;
                <span>Hire Me</span>
              </a>
              <a
                href={resume}
                download="Resume.pdf"
                className="btn flex flex-row ring-1 text-black hover:text-white hover:bg-black/90 ring-black 
                          dark:text-white dark:hover:text-black dark:hover:bg-white dark:ring-white"
              >
                <ArrowDownTrayIcon className="size-6" /> &nbsp;
                <span>Resume</span>
              </a>
            </div>


            <div className="flex items-center justify-left gap-10 mt-10 ">
              <div className="text-center gap-2">
                <h2 className="text-2xl font-semibold text-black dark:text-white">1+</h2>
                <h3 className="text-xs font-medium text-gray-500 dark-text-gray-300">Years Experience</h3>
              </div>
              <div className="text-center gap-2">
                <h2 className="text-2xl font-semibold text-black dark:text-white">5+</h2>
                <h3 className="text-xs font-medium text-gray-500 dark-text-gray-300">Projects Completed</h3>
              </div>
            </div>

          </div>
          

          <div className="flex flex-col items-center m-auto p-8 text-center">
            <img
              src={profile}
              height={400}
              width={400}
              alt="my picture"
              className="rounded-2xl shadow-lg shadow-black/60 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.3)] hover:-rotate-8 hover:scale-105 transition ease-out
               dark:shadow-teal-800/60 dark:hover:shadow-[10px_10px_20px_rgba(45,212,191,0.6)]"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
