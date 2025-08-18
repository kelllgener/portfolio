import RevealOnScroll from "../RevealOnScroll";
import Timeline from "../Timeline";
import SectionHeader from "../SectionHeader";

const Experience = () => {
  const experienceHeader = [
    {
      title: "EXPERIENCE",
      subTitle: "My Journey in the Tech World",
      introduction:
        "A collection of my experiences, professional growth,responsibilities, and the technologies I’ve worked with.",
    },
  ];

  const experiences = [
    {
      company: "Optodev, Inc.",
      location: "Biñan City, Laguna",
      type: "Internship",
      position: "Human Resource Intern",
      duration: "Dec 2024 - June 2025",
      description:
        "HR Intern at Optodev, Inc., assisting in recruitment, onboarding, records management, and training coordination.",
      responsibilities: [
        "Supported pre-employment processes, including document preparation and applicant coordination",
        "Encoded applicant data and maintained accurate records in internal HR systems",
        "Assisted in onboarding activities to ensure smooth integration of new hires",
        "Updated training materials and monitored training session schedules",
        "Maintained and tracked employee attendance records",
        "Aided in inventory management of office and training supplies",
        "Helped develop a barcode-enabled Excel system to streamline and improve training attendance tracking",
      ],
      technologies: [
        "MS Excel",
        "MS Word",
        "MS PowerPoint",
        "Google Workspace",
        "Barcode Scanner",
        "Employee Management System",
      ],
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
            <p className="px-2 py-1">Ready to take another challenge</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;
