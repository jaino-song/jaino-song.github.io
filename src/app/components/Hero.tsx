'use client';
import Button from "./Button";
import HeroTitle from "./text/HeroTitle";
import HeroSubTitle from "./text/HeroSubTitle";
import { DownloadIcon } from "./icons/DownloadIcon";

const handleFindOutMore = () => {
    const aboutSection = document.getElementById('about-david');
    if (aboutSection) {
        // Check if the element is visible (not display: none)
        const isVisible = aboutSection.offsetParent !== null;
        if (isVisible) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // If first one is hidden, try to find the next one with same ID
            const allSections = document.querySelectorAll('[id="about-david"]');
            for (const section of allSections) {
                if ((section as HTMLElement).offsetParent !== null) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    break;
                }
            }
        }
    }
};

const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/DavidSongFullStackSWEOfficial.pdf';
    link.download = 'DavidSongFullStackSWEOfficial.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Hero = () => {

    return (
        <section className="w-full min-h-[75vh] bg-neutral-800 inline-flex flex-col justify-center items-center sm:px-6">
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 max-w-6xl">
                <HeroTitle>Problem Solving<br />Software Engineer</HeroTitle>
                <HeroSubTitle>Engineering Full Stack Web Solutions to Maximize Business Performance</HeroSubTitle>
                <div className="flex flex-row justify-start items-center gap-4 sm:gap-6 md:gap-8">
                    <Button text="Find Out More" onClick={handleFindOutMore} bgColor="neutral-600" textColor="neutral-200" className="w-33 phone:w-44" />
                    <Button text="Download CV" onClick={handleDownloadCV} bgColor="white" textColor="neutral-800" addOn={<DownloadIcon className="w-5 h-5 text-neutral-800" />} className="w-33 phone:w-44"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;