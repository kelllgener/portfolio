import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import SkillCards from "../SkillCards";

import {
  CodeBracketIcon,
  CircleStackIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "../SectionHeader";
import { EN } from "../../locale/en";

const Skills = () => {
  const skillsHeader = [
    {
      title: EN.SKILLS_TITLE,
      subTitle: EN.SKILLS_SUB_TITLE,
      introduction: EN.SKILLS_INTRODUCTION,
    },
  ];

  const skills = [
    {
      Icon: CodeBracketIcon,
      title: EN.SKILLS_FE.TITLE,
      skills: EN.SKILLS_FE.SKILL_SET,
    },
    {
      Icon: ServerStackIcon,
      title: EN.SKILLS_BE.TITLE,
      skills: EN.SKILLS_BE.SKILL_SET,
    },
    {
      Icon: ChartBarIcon,
      title: EN.SKILLS_DA.TITLE,
      skills: EN.SKILLS_DA.SKILL_SET,
    },
    {
      Icon: CircleStackIcon,
      title: EN.SKILLS_DB.TITLE,
      skills: EN.SKILLS_DB.SKILL_SET,
    },
    {
      Icon: WrenchScrewdriverIcon,
      title: EN.SKILLS_TOOL.TITLE,
      skills: EN.SKILLS_TOOL.SKILL_SET,
    },
  ];

  const softSkills = [
    {
      title: EN.SKILSS_SOFT.TITLE,
      skills: EN.SKILSS_SOFT.SKILL_SET
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
          <div className="flex flex-wrap p-4 justify-center xl:justify-start xl:pl-34 gap-8">
            {skills.map((skill, index) => (
              <RevealOnScroll>
                <SkillCards
                  key={index}
                  Icon={skill.Icon ? skill.Icon : undefined}
                  title={skill.title}
                  skillLists={skill.skills}
                />
              </RevealOnScroll>
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
