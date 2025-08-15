import React from "react";

interface KeepsMeGoingProps {
  title: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

const KeepsMeGoing = ({ title, Icon, description }: KeepsMeGoingProps) => {
  return (
    <div className="flex flex-row justify-start gap-4">
      <div className="mt-2">
        {Icon && (
          <Icon className="size-5 sm:size-6 text-gray-900 dark:text-gray-200" />
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <h3 className="text-base text-black font-semibold dark:text-white">{title}</h3>
        <span className="text-base text-gray-500 dark-text-gray-300">{description}</span>
      </div>
    </div>
  );
};

export default KeepsMeGoing;
