import githubIcon from "../assets/github.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Props {
  projectUrl: string;
  title: string;
  description: string;
  demoLink: string;
  repoLink: string;
  techUsed: string[];
  yearDev: string;
}

const ProjectCard = ({
  projectUrl,
  title,
  description,
  demoLink,
  repoLink,
  techUsed,
  yearDev
}: Props) => {
  return (
    <div
      className="w-[400px] h-[550px] shadow-sm shadow-gray-800/60 rounded-2xl bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
                   transition duration-300 ease-in-out backdrop-blur-xl 
                  dark:text-white dark:shadow-teal-800/60 hover:scale-105"
    >
      <div className="flex flex-col overflow-hidden rounded-2xl">
        <img
          src={projectUrl}
          alt="Java Project"
          className="object-cover object-top w-full h-50"
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold text-black dark:text-white">
            {title}
          </h1>
          <h3 className="text-sm my-2 italic">Developed on {yearDev}</h3>
          <span className="text-gray-500 dark-text-gray-300">
            {description}
          </span>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {techUsed.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-teal-800 rounded-full text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-row mt-4 gap-5 justify-between items-center ">
            <a
              href={demoLink}
              target="_blank"
              className="px-4 py-2 flex flex-row flex-1 text-sm justify-center items-center text-white rounded-md shadow-sm shadow-black hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-teal-800"
            >
              <span>View Project </span> &nbsp;
              <ArrowTopRightOnSquareIcon className="size-5" />
            </a>
            <a
              href={repoLink}
              target="_blank"
              className="p-2 ring-1 ring-black dark:ring-white rounded-xl text-center bg-white hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              <img src={githubIcon} alt="GitHub Link" className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
