import React from "react";

interface Props {
  username: string;
}

const ContribCalendar: React.FC<Props> = ({ username }) => {
  const url = `https://ghchart.rshah.org/0e4429//${username}`;

  return (
    <div
      className="flex flex-col items-center bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] transition duration-300 ease-in-out backdrop-blur-xl
                  dark:text-white dark:shadow-teal-800/60 hover:scale-105 p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
      <img
        src={url}
        alt={`${username}'s GitHub contribution chart`}
        className="w-full max-w-3xl p-4 rounded-lg border border-gray-200"
      />
      <p className="text-sm text-gray-500 mt-2">
        Data fetched from{" "}
        <a
          href={`https://github.com/${username}`}
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          github.com/{username}
        </a>
      </p>
    </div>
  );
};

export default ContribCalendar;
