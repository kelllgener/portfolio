import ProjectCard from "../ProjectCard";
import RevealOnScroll from "../RevealOnScroll";
import SectionHeader from "../SectionHeader";
import javaProjectUrl from "../../assets/images/java_project.png";
import enrollmentSystemUrl from "../../assets/images/enrollment_system.png";
import firstPortfolioUrl from "../../assets/images/first_web_portfolio.png";
import todamoonAppUrl from "../../assets/images/todamoon_app.png";
import todamoonWebUrl from "../../assets/images/todamoon_web.png";
import todamoonScannerUrl from "../../assets/images/todamoon scanner.jpg";
import { GitHubIcon } from "../icons/GitHubIcon";
import TooltipButton from "../TooltipButton";

const Projects = () => {
	const projectData = [
		{
			projectUrl: todamoonScannerUrl,
			title: "TODAMOON Scanner",
			description:
				"It serves as the core component of the system, functioning as a scanner that records driver entry and exit data.",
			demoLink: "https://www.youtube.com/watch?v=qSW9CeEgu3M",
			repoLink:
				"https://github.com/kelllgener/todamoon-hardware-entrance-exit-code",
			techUsed: ["ESP32-Cam", "C", "C++", "Python", "Arduino IDE", "Firebase"],
			yearDev: "2024",
			skillFocus: "Backend",
		},
		{
			projectUrl: todamoonWebUrl,
			title: "TODAMOON Admin Website",
			description:
				"It functions as the administrative hub of the Todamoon System, overseeing and managing its core operations.",
			demoLink: "https://youtu.be/u78Zj7CP-vw?feature=shared",
			repoLink: "https://github.com/kelllgener/todamoon-admin-website",
			techUsed: [
				"TypeScript",
				"Node.js",
				"Next.js",
				"Firebase",
				"GitHub",
				"Tailwind CSS",
				"DaisyUI",
			],
			yearDev: "2024",
			skillFocus: "Fullstack",
		},
		{
			projectUrl: todamoonAppUrl,
			title: "TODAMOON Mobile Application",
			description:
				"It’s a component of the Todamoon System that serves as the driver and passenger app for monitoring the terminal queue.",
			demoLink: "https://youtu.be/Ei1PM42lxLY",
			repoLink: "https://github.com/kelllgener/todamoon-v2-mobile-app",
			techUsed: ["Java", "Firebase", "GitHub", "Android Studio"],
			yearDev: "2024",
			skillFocus: "Fullstack",
		},
		{
			projectUrl: firstPortfolioUrl,
			title: "Web Portfolio",
			description:
				"A personal graphics design project created to further develop and enhance my creative skills.",
			demoLink: "https://kelllgener.github.io/Portfolio_Website/",
			repoLink: "https://github.com/kelllgener/Portfolio_Website",
			techUsed: ["HTML", "CSS", "Bootstrap", "JavaScript", "GitHub"],
			yearDev: "2023",
			skillFocus: "Frontend",
		},
		{
			projectUrl: enrollmentSystemUrl,
			title: "Enrollment Management System",
			description:
				"A PHP-based system designed with CRUD functionality to optimize the client school’s operations.",
			demoLink: "https://youtu.be/E5m_bgf4X2Y?feature=shared",
			repoLink: "https://github.com/kelllgener/enrollment-system",
			techUsed: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
			yearDev: "2023",
			skillFocus: "Fullstack",
		},
		{
			projectUrl: javaProjectUrl,
			title: "Library Management System",
			description:
				"A Java-based library management system I developed in my second year of college to showcase CRUD functionality.",
			demoLink: "https://youtu.be/Vp6biVHfZJc?feature=shared",
			repoLink: "https://github.com/kelllgener/library-system",
			techUsed: ["JAVA", "MySQL"],
			yearDev: "2022",
			skillFocus: "Backend",
		},
	];

	const projectHeader = [
		{
			title: "PROJECTS",
			subTitle: "Things I've Built",
			introduction:
				"A showcase of projects that demonstrate my ability to design, develop, and deliver functional solutions using a variety of technologies.",
		},
	];

	return (
		<section
			id="projects"
			className="container m-auto h-full min-h-[1000px] flex justify-center items-center"
		>
			<RevealOnScroll>
				{/* Header */}
				{projectHeader.map((content, index) => (
					<SectionHeader key={index} {...content} />
				))}

				{/* Main Content */}
				<div className="flex flex-col items-center gap-4">
					<div className="flex flex-wrap p-4 justify-center gap-18">
						{projectData.map((content, index) => (
							<RevealOnScroll>
								<ProjectCard key={index} {...content} />
							</RevealOnScroll>
						))}
					</div>
					<div className="flex justify-center items-center mt-4">
						<TooltipButton tooltip="Click to View my Repository">
							<a
								href="https://github.com/kelllgener"
								target="_blank"
								className="btn text-black dark:text-white"
							>
								<span>Project Repository</span> &nbsp;
								<GitHubIcon className="h-5" />
							</a>
						</TooltipButton>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};

export default Projects;
