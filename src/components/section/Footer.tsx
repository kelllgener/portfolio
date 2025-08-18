import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import resume from "../../assets/Resume.pdf";

const Footer = () => {
	const quickLinks = [
		{
			name: "Home",
			link: "#home",
		},
		{
			name: "About Me",
			link: "#about-me",
		},
		{
			name: "Experience",
			link: "#experience",
		},
		{
			name: "Skills",
			link: "#skills",
		},
		{
			name: "Projects",
			link: "#projects",
		},
		{
			name: "Contact Me",
			link: "#contact-me",
		},
	];

	return (
		<div className="container mx-auto text-black dark:text-white flex flex-col gap-4 p-4 justify-center items-center">
			<div className="flex flex-col md:flex-row xl:pl-10 gap-4 md:gap-10 p-2 w-full">
				<div className="flex flex-col basis-1/3">
					<h4 className="text-base md:text-lg font-semibold">Let's Connect</h4>
					<div className="text-xs md:text-sm leading-5 md:leading-6 text-gray-700 dark:text-gray-300">
						<span className="">
							Open to new opportunities that challenge me and help me grow
							within the industry.
						</span>
					</div>
				</div>
				<div className="flex flex-col basis-1/3">
					<h4 className="text-base md:text-lg font-semibold">Quick Links</h4>
					<div className="text-xs md:text-sm leading-5 md:leading-6 text-gray-700 dark:text-gray-300">
						<ul>
							{quickLinks.map((link, index) => (
								<li
									className="hover:text-black hover:underline transition duration-300 ease-in-out "
									key={index}
								>
									<a className="" href={link.link}>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex flex-col basis-1/3">
					<h4 className="text-base md:text-lg font-semibold">Latest Project</h4>
					<div className="text-xs md:text-sm leading-5 md:leading-6 text-gray-700 dark:text-gray-300">
						<ul>
							<li className="">
								<a
									href="https://github.com/kelllgener"
									className="flex items-center gap-1 hover:text-black hover:underline transition duration-300 ease-in-out"
									target="_blank"
								>
									<ArrowTopRightOnSquareIcon className="h-4" />
									<span>View Repository</span>
								</a>
								<a
									href={resume}
									className="flex items-center gap-1 hover:text-black hover:underline transition duration-300 ease-in-out"
									download="Resume.pdf"
								>
									<ArrowTopRightOnSquareIcon className="h-4" />
									<span>Resume</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<caption className="text-xs leading-5">
				© {new Date().getFullYear()} Micheal Adrian Gener. All rights reserved.
			</caption>
		</div>
	);
};

export default Footer;
