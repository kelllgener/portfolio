interface Props {
  title: string;
  subTitle: string;
  introduction: string;
}

const SectionHeader = ({ title, subTitle, introduction }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 mb-8">
      <div className="flex flex-col items-center relative">
        <h4 className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-300">
          {title}
        </h4>
        <div className="w-55 h-0.5 bg-gray-400/50 fixed top-12"></div>
      </div>
      <div className="">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-14 text-black mt-2 dark:text-white">
          {subTitle}
        </h2>
      </div>
      <div>
        <h4 className="text-lg md:text-xl text-center font-light mt-4 text-gray-700 lg:leading-6 dark:text-gray-300">
          {introduction}
        </h4>
      </div>
    </div>
  );
};

export default SectionHeader;
