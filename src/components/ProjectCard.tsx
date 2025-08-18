import { GitHubIcon } from './icons/GitHubIcon';
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Props {
	projectUrl: string;
	title: string;
	description: string;
	demoLink: string;
	repoLink: string;
	techUsed: string[];
	yearDev: string;
  skillFocus: string;
}

const ProjectCard = ({
	projectUrl,
	title,
	description,
	demoLink,
	repoLink,
	techUsed,
	yearDev,
  skillFocus
}: Props) => {
	return (
		<div
			className="group w-[300px] h-auto lg:w-[350px] lg:h-[500px] shadow-sm shadow-gray-800/60 rounded-2xl bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
                   transition duration-300 ease-in-out backdrop-blur-xl 
                  dark:text-white dark:shadow-teal-800/60 hover:scale-105"
		>
			<div className="flex flex-col overflow-hidden rounded-2xl">
				<div className="relative">
					<img
						src={projectUrl}
						alt="Java Project"
						className="object-cover object-top w-full h-40 lg:h-50"
					/>
          <div className="text-right p-4 min-w-full min-h-full bg-black/40 absolute inset-0 opacity-0 
          translate-y-full group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500">
            <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-xl backdrop-blur-2xl">{skillFocus}</span>
          </div>
				</div>
				<div className="p-4">
					<h1 className="text-base md:text-lg lg:text-xl font-semibold text-black dark:text-white">
						{title}
					</h1>
					<h3 className="text-xs my-2 italic">Developed in {yearDev}</h3>
					<span className="text-sm md:text-base text-gray-500 dark-text-gray-300">
						{description}
					</span>

					<div className="flex flex-wrap gap-2 mt-2">
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
							className="p-2 ring-1 ring-black dark:ring-white rounded-xl text-center bg-white dark:bg-gray-800/50 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
						>
							<GitHubIcon className="text-black dark:text-white" />
							
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
