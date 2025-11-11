import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EN } from "../locale/en";

const EmailForm: React.FC = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<
    "success" | "error" | "info" | null
  >(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return; // null check

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      form.current.reset();
      setAlertMessage("Message Sent Successfully!");
      setAlertType("success");
    } catch (error) {
      console.error(error);
      setAlertMessage("Sending Failed, Please try again!");
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 10000);
  };

  const closeAlert = () => {
    setAlertMessage(null);
    setAlertType(null);
  };

  return (
    <div
      className="flex flex-col gap-4 shadow-sm rounded-2xl p-4 bg-[var(--bg-light)] 
                 dark:bg-[var(--bg-dark)] backdrop-blur-xl sm:shadow-md 
                 sm:shadow-gray-500/60 dark:text-white dark:shadow-teal-800/60"
    >
      <div className="mb-2">
        <h3 className="text-lg md:text-xl font-medium text-black dark:text-white">
          {EN.CONT_DIV_1_TITLE}
        </h3>
        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
          {EN.CONT_DIV_1_SUB_TITLE}
        </p>
      </div>

      {alertMessage && (
        <div
          className={`flex justify-between items-center text-white ring-1 p-2 ${
            alertType === "success"
              ? "bg-teal-800 ring-teal-800/50"
              : alertType === "error"
              ? "bg-red-500 ring-green-500/50"
              : "alert-info"
          } shadow-lg mt-4`}
        >
          <span>{alertMessage}</span>
          <button className="cursor-pointer" onClick={closeAlert}>
            <XMarkIcon className="h-5" />
          </button>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex-1/2">
        <div className="flex flex-col w-full md:w-[600px] gap-5">
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name..."
            type="text"
            autoComplete="name"
            required
            className="block w-full rounded-md px-3 py-2 text-base text-gray-800 dark:text-white outline-1 
                       -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400
                       focus:outline-2 focus:-outline-offset-2 focus:outline-teal-800 sm:text-sm"
          />

          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            type="email"
            required
            className="block w-full rounded-md px-3 py-2 text-base text-gray-800 dark:text-white outline-1 
                       -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400
                       focus:outline-2 focus:-outline-offset-2 focus:outline-teal-800 sm:text-sm"
          />

          <input
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Your Subject..."
            type="text"
            required
            className="block w-full rounded-md px-3 py-2 text-base text-gray-800 dark:text-white outline-1 
                       -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400
                       focus:outline-2 focus:-outline-offset-2 focus:outline-teal-800 sm:text-sm"
          />

          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            rows={7}
            required
            className="block w-full rounded-md px-3 py-2 text-base text-gray-800 dark:text-white outline-1 
                       -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400
                       focus:outline-2 focus:-outline-offset-2 focus:outline-teal-800 sm:text-sm"
          />

          <button
            type="submit"
            className={`btn flex justify-center items-center bg-teal-800 cursor-pointer ${
              loading ? "bg-teal-800/50" : ""
            }`}
            disabled={loading}
          >
            <span className={`${loading ? "animate-bounce" : ""}`}>
              {loading ? "Sending Message..." : "Send Message"}
            </span>
            &nbsp;
            <PaperAirplaneIcon
              className={`h-5 ${loading ? "animate-bounce" : ""}`}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
