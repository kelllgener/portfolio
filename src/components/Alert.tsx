import { InfoIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface AlertProps {
  message: string;
  duration?: number;
  onClose?: () => void; // callback to clear message
}

const Alert = ({ message, duration = 3000, onClose }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!message) return;

    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      className={`fixed flex items-center gap-4 bottom-5 right-4 w-80 bg-gray-100 shadow-lg 
      border-b-4 rounded-lg border-b-green-500 text-black text-center p-3 z-50
      transform transition-all duration-500 ease-in-out
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    >
      <InfoIcon className="h-5 text-green-500" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Alert;
