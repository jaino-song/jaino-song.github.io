import NavContainer from "./nav/NavContainer";
import ExternalLinks from "./ExternalLinks";

const Header = () => {
  return (
    // Header Container
    <nav className="self-stretch flex items-center justify-center mx-auto py-6 md:py-8 phone:justify-between">
       {/* Name and Title */}
        <div className="phone:flex-1 px-4 hidden md:flex phone:min-w-0 sm:py-2 flex-col justify-center items-center gap-2.5">
            <div className="text-center justify-center text-white text-lg sm:text-xl font-bold font-['Poppins'] leading-normal text-nowrap">David J Song</div>
            <div className="text-center justify-center text-Subtitle text-xs sm:text-sm font-semibold font-['Poppins']">Full-Stack<br className="lg:hidden" /><span className="hidden lg:inline"> </span>Software Engineer</div>
        </div>
        {/* Mobile Nav Container */}
        {/* <div className="w-1/4 phone:flex-shrink-0 flex justify-center block phone:hidden">
          <MobileNavContainer />
        </div> */}
        {/* Nav Container */}
        <div className="phone:flex-shrink-0 mx-auto flex justify-center">
          <NavContainer />
        </div>
        {/* External Links */}
        <div className="w-1/4 px-4 phone:flex-1 phone:min-w-0 flex justify-center hidden md:flex">
          <ExternalLinks />
        </div>
    </nav>
  );
};

export default Header;