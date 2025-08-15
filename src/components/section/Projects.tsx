import ProjectCard from "../ProjectCard";
import RevealOnScroll from "../RevealOnScroll";
import SectionHeader from "../SectionHeader";
import javaProjectUrl from "../../assets/images/java_project.png";
import enrollmentSystemUrl from "../../assets/images/enrollment_system.png";
import firstPortfolioUrl from "../../assets/images/first_web_portfolio.png";
import todamoonAppUrl from "../../assets/images/todamoon_app.png";

const Projects = () => {
  const todamoonApp = [
    {
      projectUrl: todamoonAppUrl,
      title: "TODAMOON Application",
      description:
        "It’s a component of the Todamoon System that serves as the driver and passenger app for monitoring the terminal queue.",
      demoLink: "https://youtu.be/Ei1PM42lxLY",
      repoLink: "https://github.com/kelllgener/todamoon-v2-mobile-app",
      techUsed: ["JAVA", "Firebase", "GitHub", "Android Studio"],
      yearDev: "2024",
      skillFocus: "Fullstack"
    },
  ];

  const firstWebPortfolio = [
    {
      projectUrl: firstPortfolioUrl,
      title: "Web Portfolio",
      description:
        "A personal graphics design project created to further develop and enhance my creative skills.",
      demoLink: "https://kelllgener.github.io/Portfolio_Website/",
      repoLink: "https://github.com/kelllgener/Portfolio_Website",
      techUsed: ["HTML", "CSS", "Bootsrap", "JavaScript", "Git", "GitHub"],
      yearDev: "2023",
      skillFocus: "Frontend"
    },
  ];

  const enrollmentSystem = [
    {
      projectUrl: enrollmentSystemUrl,
      title: "Enrollment Management System",
      description:
        "A PHP-based system designed with CRUD functionality to optimize the client school’s operations.",
      demoLink: "https://youtu.be/E5m_bgf4X2Y?feature=shared",
      repoLink: "https://github.com/kelllgener/enrollment-system",
      techUsed: ["HTML", "CSS", "Bootsrap", "JavaScript", "PHP"],
      yearDev: "2023",
      skillFocus: "Fullstack"
    },
  ];

  const javaProject = [
    {
      projectUrl: javaProjectUrl,
      title: "Library Management System",
      description:
        "A Java-based library management system I developed in my second year of college to showcase CRUD functionality.",
      demoLink: "https://youtu.be/Vp6biVHfZJc?feature=shared",
      repoLink: "https://github.com/kelllgener/library-system",
      techUsed: ["JAVA", "MySQL"],
      yearDev: "2022",
      skillFocus: "Backend"
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
      className="h-full container m-auto min-h-[900px] flex justify-center items-center"
    >
      <RevealOnScroll>
        {/* Header */}
        {projectHeader.map((content, index) => (
          <SectionHeader key={index} {...content} />
        ))}

        {/* Main Content */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap p-4 justify-center 2xl:justify-start 2xl:pl-20 gap-18">
            {/* TODAMOON Website */}

            {/* TODAMOON Mobile Application */}
            {todamoonApp.map((content, index) => (
              <ProjectCard key={index} {...content} />
            ))}

            {/* Web Portfolio */}
            {firstWebPortfolio.map((content, index) => (
              <ProjectCard key={index} {...content} />
            ))}
            {/* Enrollment Management System */}
            {enrollmentSystem.map((content, index) => (
              <ProjectCard key={index} {...content} />
            ))}

            {/* JAVA Library Management System */}
            {javaProject.map((content, index) => (
              <ProjectCard key={index} {...content} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
