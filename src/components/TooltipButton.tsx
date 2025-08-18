import type { ReactNode } from "react";

interface TooltipButtonProps {
  children: ReactNode;
  tooltip: string;
}

const TooltipButton =({ children, tooltip}: TooltipButtonProps ) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative group">

        {children}

        {/* Tooltip */}
        <span className="absolute left-1/2 -translate-x-1/2 -top-10 
          px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 
          group-hover:opacity-100 transition duration-300 ease-in-out whitespace-nowrap">
          {tooltip}
        </span>
      </div>
    </div>
  );
}

export default TooltipButton;