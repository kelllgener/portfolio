import ProjectCard from "../ProjectCard";
import RevealOnScroll from "../RevealOnScroll";
import SectionHeader from "../SectionHeader";
import javaProjectUrl from "../../assets/images/java_project.png";
import enrollmentSystemUrl from "../../assets/images/enrollment_system.png";
import firstPortfolioUrl from "../../assets/images/first_web_portfolio.png";
import todamoonAppUrl from "../../assets/images/todamoon_app.png";
import todamoonWebUrl from "../../assets/images/todamoon_web.png";
import todamoonScannerUrl from "../../assets/images/todamoon scanner.jpg";
import { EN } from "../../locale/en";
import TooltipButton from "../TooltipButton";
import { GitHubIcon } from "../icons/GitHubIcon";

const Projects = () => {
  const projectHeader = [
    {
      title: EN.PROJ_TITLE,
      subTitle: EN.PROJ_SUB_TITLE,
      introduction: EN.PROJ_INTRODUCTION,
    },
  ];

  const projectData = [
    {
      projectUrl: todamoonScannerUrl,
      title: EN.PROJ_TODAMOON_SCANNER.TITLE,
      description: EN.PROJ_TODAMOON_SCANNER.DESCRIPTION,
      demoLink: EN.PROJ_TODAMOON_SCANNER.DEMO_LINK,
      repoLink: EN.PROJ_TODAMOON_SCANNER.REPO_LINK,
      techUsed: EN.PROJ_TODAMOON_SCANNER.TECH_USED,
      yearDev: EN.PROJ_TODAMOON_SCANNER.YEAR_DEV,
      skillFocus: EN.PROJ_TODAMOON_SCANNER.SKILL_FOCUSED,
    },
    {
      projectUrl: todamoonWebUrl,
      title: EN.PROJ_TODAMOON_WEBAPP.TITLE,
      description: EN.PROJ_TODAMOON_WEBAPP.DESCRIPTION,
      demoLink: EN.PROJ_TODAMOON_WEBAPP.DEMO_LINK,
      repoLink: EN.PROJ_TODAMOON_WEBAPP.REPO_LINK,
      techUsed: EN.PROJ_TODAMOON_WEBAPP.TECH_USED,
      yearDev: EN.PROJ_TODAMOON_WEBAPP.YEAR_DEV,
      skillFocus: EN.PROJ_TODAMOON_WEBAPP.SKILL_FOCUSED,
    },
    {
      projectUrl: todamoonAppUrl,
      title: EN.PROJ_TODAMOON_MOBAPP.TITLE,
      description: EN.PROJ_TODAMOON_MOBAPP.DESCRIPTION,
      demoLink: EN.PROJ_TODAMOON_MOBAPP.DEMO_LINK,
      repoLink: EN.PROJ_TODAMOON_MOBAPP.REPO_LINK,
      techUsed: EN.PROJ_TODAMOON_MOBAPP.TECH_USED,
      yearDev: EN.PROJ_TODAMOON_MOBAPP.YEAR_DEV,
      skillFocus: EN.PROJ_TODAMOON_MOBAPP.SKILL_FOCUSED,
    },
    {
      projectUrl: firstPortfolioUrl,
      title: EN.PROJ_WEB_PORT_1.TITLE,
      description: EN.PROJ_WEB_PORT_1.DESCRIPTION,
      demoLink: EN.PROJ_WEB_PORT_1.DEMO_LINK,
      repoLink: EN.PROJ_WEB_PORT_1.REPO_LINK,
      techUsed: EN.PROJ_WEB_PORT_1.TECH_USED,
      yearDev: EN.PROJ_WEB_PORT_1.YEAR_DEV,
      skillFocus: EN.PROJ_WEB_PORT_1.SKILL_FOCUSED,
    },
    {
      projectUrl: enrollmentSystemUrl,
      title: EN.PROJ_EMS.TITLE,
      description: EN.PROJ_EMS.DESCRIPTION,
      demoLink: EN.PROJ_EMS.DEMO_LINK,
      repoLink: EN.PROJ_EMS.REPO_LINK,
      techUsed: EN.PROJ_EMS.TECH_USED,
      yearDev: EN.PROJ_EMS.YEAR_DEV,
      skillFocus: EN.PROJ_EMS.SKILL_FOCUSED,
    },
    {
      projectUrl: javaProjectUrl,
      title: EN.PROJ_LMS.TITLE,
      description: EN.PROJ_LMS.DESCRIPTION,
      demoLink: EN.PROJ_LMS.DEMO_LINK,
      repoLink: EN.PROJ_LMS.REPO_LINK,
      techUsed: EN.PROJ_LMS.TECH_USED,
      yearDev: EN.PROJ_LMS.YEAR_DEV,
      skillFocus: EN.PROJ_LMS.SKILL_FOCUSED,
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
              <RevealOnScroll key={index}>
                <ProjectCard {...content} />
              </RevealOnScroll>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <TooltipButton tooltip="Click to View my Repository">
              <a
                href={EN.PROJ_GITHUB_LINK}
                target="_blank"
                className="btn text-black dark:text-white"
              >
                <span>GitHub Repository</span> &nbsp;
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
