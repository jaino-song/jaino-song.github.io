import NavContainer from "./nav/NavContainer";
import ExternalLinks from "./ExternalLinks";

const Header = () => {
  return (
    <nav className="self-stretch self-stretch py-8 inline-flex justify-around items-center w-full">
        <div className="px-7 py-2 inline-flex flex-col justify-center items-center gap-2.5">
            <div className="justify-start text-white text-xl font-bold font-['Inter'] leading-normal">David J Song</div>
            <div className="text-center justify-center text-Subtitle text-xs font-semibold font-['Inter']">Full-Stack Software Engineer</div>
        </div>
        <NavContainer />
        <ExternalLinks />
    </nav>
  );
};

export default Header;