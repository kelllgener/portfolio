import RevealOnScroll from "../RevealOnScroll";
import SectionHeader from "../SectionHeader";

const ContactMe = () => {

  const contactmeHeader = [
    {
      title: "CONTACT ME",
      subTitle: "SUBTITLE",
      introduction: "INTRO",
    },
  ];

  return (
    <section
      id="skills"
      className="h-full container m-auto min-h-[1050px] flex justify-center items-center"
    >
      <RevealOnScroll>
        {/* Header */}
        {contactmeHeader.map((content, index) => (
          <SectionHeader key={index} {...content} />
        ))}

        {/* Main Section */}
        <div></div>
      </RevealOnScroll>
    </section>
  );
};

export default ContactMe;
