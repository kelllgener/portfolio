import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import Timeline from "../Timeline";

import {
  StopCircleIcon,
  BuildingOffice2Icon,
  CalendarDateRangeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Experience = () => {
  const experiences = [
    {
      company: "Optodev, Inc.",
      location: "Biñan City, Laguna",
      type: "Internship",
      position: "Human Resource Intern",
      duration: "Dec 2024 - June 2025",
      description: "HR Intern at Optodev, Inc., assisting in recruitment, onboarding, records management, and training coordination.",
      accomplishments: [
        "Supported pre-employment processes, including document preparation and applicant coordination",
        "Encoded applicant data and maintained accurate records in internal HR systems",
        "Assisted in onboarding activities to ensure smooth integration of new hires",
        "Updated training materials and monitored training session schedules",
        "Maintained and tracked employee attendance records",
        "Aided in inventory management of office and training supplies",
        "Helped develop a barcode-enabled Excel system to streamline and improve training attendance tracking"
      ],
      technologies: ["MS Excel", "MS Word", "MS PowerPoint", "Google Workspace", "Barcode Scanner", "Employee Management System"],
    },
    
  ];

  return (
    <section
      id="experience"
      className="h-full container m-auto min-h-[900px] flex justify-center items-center"
    >
      <RevealOnScroll>
        <div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex flex-col items-center relative">
              <h3 className=" text-lg font-medium mb-4 text-gray-800 dark:text-gray-300">
                EXPERIENCE
              </h3>
              <div className="w-30 h-0.5 bg-gray-400/50 fixed top-12"></div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-14 text-black mt-6 dark:text-white">
                  My Journey in the Tech World
                </h1>
              </div>

              <div className="relative flex border xl:min-w-[900px] w-full mt-8">
                {/* Vertical Line - one continuous */}
                <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-400/50" />

                <div className="flex flex-col gap-15">
                  {experiences.map((exp, i) => (
                    <Timeline key={i} {...exp} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;
