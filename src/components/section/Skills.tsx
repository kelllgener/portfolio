import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import SkillCards from "../SkillCards";

import {
  CodeBracketIcon,
  CircleStackIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "../SectionHeader";

const Skills = () => {
  const skillsHeader = [
    {
      title: "SKILLS & EXPERTISE",
      subTitle: "Professional Skills",
      introduction:
        "A summary of my abilities and expertise, ranging from web development to proficiency with various tools.",
    },
  ];

  const frontendSkills = [
    {
      Icon: "<CodeBracketIcon />",
      title: "Frontend Development",
      skills: [
        { skill: "HTML", level: "Beginner" },
        { skill: "CSS", level: "Intermediate" },
        { skill: "JavaScript", level: "Advanced" },
        { skill: "ReactJS", level: "Expert" },
        { skill: "Tailwind CSS", level: "Advanced" },
        { skill: "Bootstrap", level: "Advanced" },
      ],
    },
  ];

  const backendSkills = [
    {
      Icon: "<ServerStackIcon />",
      title: "Backend Development",
      skills: [
        { skill: "PHP", level: "Advanced" },
        { skill: "TypeScript", level: "Intermediate" },
        { skill: "MySQL", level: "Advanced" },
        { skill: "Node.js", level: "Intermediate" },
        { skill: "Python", level: "Intermediate" },
        { skill: "JAVA", level: "Intermediate" },
      ],
    },
  ];

  const databaseSkills = [
    {
      Icon: "<CircleStackIcon />",
      title: "Database Management",
      skills: [
        { skill: "MySQL", level: "Advanced" },
        { skill: "Firebase", level: "Intermediate" },
      ],
    },
  ];

  const toolsSkills = [
    {
      Icon: "<WrenchScrewdriverIcon />",
      title: "Tools & Technologies",
      skills: [
        { skill: "Git", level: "Intermediate" },
        { skill: "GitHub", level: "Intermediate" },
        { skill: "Visual Studio Code", level: "Expert" },
        { skill: "Android Studio", level: "Advanced" },
      ],
    },
  ];

  const softSkills = [
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Time Management",
        "Good Communication",
        "Critical Thinking",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="h-full container m-auto min-h-[1050px] flex justify-center items-center"
    >
      <RevealOnScroll>

          {skillsHeader.map((content, index) => (
            <SectionHeader key={index} {...content} />
          ))}

          {/* Main Content */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap p-4 justify-center gap-8">
              {frontendSkills.map((skill, index) => (
                <SkillCards
                  key={index}
                  Icon={skill.Icon ? CodeBracketIcon : undefined}
                  title={skill.title}
                  skillLists={skill.skills}
                />
              ))}

              {backendSkills.map((skill, index) => (
                <SkillCards
                  key={index}
                  Icon={skill.Icon ? ServerStackIcon : undefined}
                  title={skill.title}
                  skillLists={skill.skills}
                />
              ))}

              {databaseSkills.map((skill, index) => (
                <SkillCards
                  key={index}
                  Icon={skill.Icon ? CircleStackIcon : undefined}
                  title={skill.title}
                  skillLists={skill.skills}
                />
              ))}

              {toolsSkills.map((skill, index) => (
                <SkillCards
                  key={index}
                  Icon={skill.Icon ? WrenchScrewdriverIcon : undefined}
                  title={skill.title}
                  skillLists={skill.skills}
                />
              ))}
            </div>
            {softSkills.map((category, index) => (
              <div key={index} className="flex flex-col gap-4 p-4">
                <h1 className="text-xl text-center font-semibold text-black dark:text-white">
                  {category.title}
                </h1>
                <div className="flex flex-wrap font-medium items-center gap-2 mt-2 text-xs text-gray-700 dark:text-gray-300">
                  {category.skills.map((skill, skillIndex) => (
                    <React.Fragment key={skillIndex}>
                      <div className="w-5 h-0.5 bg-gray-400/50 rounded"></div>
                      <div className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                        {skill}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;
