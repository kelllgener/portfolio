import React from "react";
import {
  InformationCircleIcon,
  BuildingOffice2Icon,
  CalendarDateRangeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface TimelineProps {
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | string;
  position: string;
  duration: string;
  description: string;
  accomplishments?: string[];
  technologies?: string[];
}

const Timeline = ({
  company,
  location,
  type,
  position,
  duration,
  description,
  accomplishments,
  technologies,
}: TimelineProps) => {
  return (
    <div className="flex items-start gap-4 relative">
      {/* Icon */}
      <div className="z-10 flex self-center  items-center">
        <InformationCircleIcon className="size-8 animate-bounce bg-white dark:bg-[var(--bg-dark)] rounded-full text-teal-800 " />
      </div>

      {/* Card */}
      <div className="flex flex-col gap-2 shadow-lg rounded-2xl p-4 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
        <div className="flex flex-row gap-5 items-center">
          <h3 className="flex flex-row gap-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
            <BuildingOffice2Icon className="h-6" /> <span>{company}</span>
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{type}</span>
        </div>
        <h1 className="text-xl font-semibold">{position}</h1>
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
      </div>
    </div>
  );
};

export default Timeline;
