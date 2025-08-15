import React from "react";
import {
  InformationCircleIcon,
  BuildingOffice2Icon,
  CalendarDateRangeIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface TimelineProps {
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | string;
  position: string;
  duration: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
}

const Timeline = ({
  company,
  location,
  type,
  position,
  duration,
  description,
  responsibilities,
  technologies,
}: TimelineProps) => {
  return (
    <div className="flex items-start gap-4 relative ">
      {/* Icon */}
      <div className="z-10 flex self-center items-center">
        <InformationCircleIcon className="size-8 animate-bounce bg-white dark:bg-[var(--bg-dark)] rounded-full text-teal-800 " />
      </div>

      {/* Card */}
      <div className="flex flex-col gap-2 shadow-sm rounded-2xl p-4 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
           backdrop-blur-xl sm:shadow-md sm:shadow-gray-500/60 dark:text-white dark:shadow-teal-800/60">
        <div className="flex flex-row gap-5 items-center">
          <h3 className="flex flex-row gap-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
            <BuildingOffice2Icon className="h-6" /> <span>{company}</span>
          </h3>
          <span className="text-xs px-1 text-gray-500 dark:text-gray-400 ring-1 rounded">
            {type}
          </span>
        </div>
        <h1 className="text-xl font-semibold text-black dark:text-white">
          {position}
        </h1>
        <div className="flex flex-row gap-5 text-sm font-semibold text-gray-800 dark:text-gray-300">
          <h3 className="flex flex-row gap-2 items-center">
            <CalendarDateRangeIcon className="h-5" />
            <span>{duration}</span>
          </h3>
          <h3 className="flex flex-row gap-2 items-center">
            <MapPinIcon className="h-5" />
            <span>{location}</span>
          </h3>
        </div>
        <div className="text-gray-700 dark:text-gray-300 mt-4">
          <p>
            HR Intern at Optodev, Inc., supporting recruitment, onboarding,
            employee records management, training coordination, and automating
            training attendance.
          </p>
        </div>
        <h3 className="flex flex-row text-lg font-semibold items-center gap-2 mt-1 text-black dark:text-white">
          <ClipboardDocumentCheckIcon className="h-5" />
          <span> Core Responsibilities </span>
        </h3>
        <div>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {responsibilities?.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex flex-row text-lg font-semibold items-center gap-2 mt-1 text-black dark:text-white">
            <CodeBracketIcon className="h-5" />
            <span>Technologies Used</span>
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-teal-800 rounded-full text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
