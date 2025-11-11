import RevealOnScroll from "../RevealOnScroll";
import Timeline from "../Timeline";
import SectionHeader from "../SectionHeader";
import { EN } from "../../locale/en";

const Experience = () => {
  const experienceHeader = [
    {
      title: EN.EXP_TITLE,
      subTitle: EN.EXP_SUB_TITLE,
      introduction: EN.EXP_INTRODUCTION
    },
  ];

  const experiences = [
    {
      company: EN.EXP_JOB_2.COMPANY,
      location: EN.EXP_JOB_2.LOCATION,
      type: EN.EXP_JOB_2.TYPE,
      position: EN.EXP_JOB_2.POSITION,
      duration: EN.EXP_JOB_2.DURATION,
      description: EN.EXP_JOB_2.DESCRIPTION,
      responsibilities: EN.EXP_JOB_2.RESPONSIBILITIES,
      technologies: EN.EXP_JOB_2.TECHNOLOGIES,
    },
    {
      company: EN.EXP_JOB_1.COMPANY,
      location: EN.EXP_JOB_1.LOCATION,
      type: EN.EXP_JOB_1.TYPE,
      position: EN.EXP_JOB_1.POSITION,
      duration: EN.EXP_JOB_1.DURATION,
      description: EN.EXP_JOB_1.DESCRIPTION,
      responsibilities: EN.EXP_JOB_1.RESPONSIBILITIES,
      technologies: EN.EXP_JOB_1.TECHNOLOGIES,
    },
  ];

  return (
    <section
      id="experience"
      className="h-full container m-auto min-h-[900px] flex justify-center items-center"
    >
      <RevealOnScroll>
        {/* Header */}
        {experienceHeader.map((content, index) => (
          <SectionHeader key={index} {...content} />
        ))}


        {/* Main Content */}
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <div className="relative flex xl:min-w-[900px] w-full mt-8">
            {/* Vertical Line - one continuous */}
            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-400/50" />

            <div className="flex flex-col gap-15">
              {experiences.map((exp, i) => (
                <Timeline key={i} {...exp} />
              ))}
            </div>
          </div>
          <div className="flex items-center mx-4 self-start mt-6 text-xs md:text-sm animate-bounce text-gray-700 dark:text-gray-300">
            <div className="w-5 h-0.5 bg-gray-400/50 rounded"></div>
            <p className="px-2 py-1">{EN.EXP_READY}</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;
