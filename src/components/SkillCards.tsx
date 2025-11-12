interface CardProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  skillLists?: { skill: string; level: string }[];
}

const SkillCards = ({ Icon, title, skillLists }: CardProps) => {
  return (
    <div
      className="w-[300px] h-[450px] shadow-sm shadow-gray-500/60 rounded-2xl p-6 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
                hover:scale-105 transition duration-300 ease-in-out
           backdrop-blur-xl dark:text-white dark:shadow-teal-800/60"
    >
      <div className="flex flex-row gap-4 justify-start items-center mb-8 ">
        <div
          className={`ring-1 rounded-xl p-2 bg-white dark:bg-[var(--bg-dark)]
          ${
            title === "Frontend Development"
              ? "ring-cyan-800-800 text-cyan-800"
              : ""
          }
          ${
            title === "Backend Development"
              ? "ring-green-800/50 text-green-800/50"
              : ""
          }
          ${
            title === "Database Management"
              ? "ring-indigo-800/50 text-indigo-800/50"
              : ""
          }
          ${
            title === "Tools & Technologies"
              ? "ring-orange-800/50 text-orange-800/50"
              : ""
          }`}
        >
          {Icon && <Icon className="h-5 w-5" />}
        </div>
        <h1 className="text-center font-semibold">{title}</h1>
      </div>
      <div>
        {skillLists?.map((skillList, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center leading-12 text-gray-700 dark:text-gray-300 text-md font-light"
          >
            <span className="font-medium">{skillList.skill}</span>
            <span
              className={`px-2 py-1 rounded-full text-sm font-medium border transition-colors duration-300
                ${
                  skillList.level === "Beginner"
                    ? "bg-teal-500 dark:border-black text-white"
                    : ""
                }
                ${
                  skillList.level === "Intermediate"
                    ? "bg-teal-600 dark:border-black text-white"
                    : ""
                }
                ${
                  skillList.level === "Advanced"
                    ? "bg-teal-700 dark:border-black text-white"
                    : ""
                }
                ${
                  skillList.level === "Expert"
                    ? "bg-teal-800 dark:border-black text-white"
                    : ""
                }
              `}
            >
              {skillList.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCards;
