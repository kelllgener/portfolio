interface Props {
  title: string;
  href: string;
  isActive: boolean;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const NavLink = ({ title, href, isActive, Icon }: Props) => {
  return (
    <a
      href={href}
      className={`flex flex-row justify-start border border-white items-center gap-2 p-2 text-sm font-semibold rounded
                hover:border-gray-800 hover:bg-black/90 hover:text-white hover:border hover:scale-105 transition duration-300
                  dark:border-black/10 dark:hover:bg-white dark:hover:text-black 
                  ${
                    isActive
                      ? `border border-gray-800 bg-black/90 text-white transition scale-105 ease-in-out duration-300
                        dark:bg-white dark:text-black`
                      : "dark:text-white"
                  }`}
    >
      {Icon && <Icon className="size-4 sm:size-5" />}
      <h3 className="">{title}</h3>
    </a>
  );
};

export default NavLink;
