'use client';
import Button from "./Button";
import { DownloadIcon } from "./icons/DownloadIcon";

const handleFindOutMore = () => {
    const aboutSection = document.getElementById('about-david');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const handleDownloadCV = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/DavidSongFullStackSWE.pdf'; // Place your CV file in the public folder as cv.pdf
    link.download = 'DavidSongFullStackSWE.pdf'; // The name the file will be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};



const Hero = () => {
    return (
        <section className="w-full min-h-[75vh] bg-neutral-800 inline-flex flex-col justify-center items-center sm:px-6">
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 max-w-6xl">
                <h1 className="text-center justify-start text-Main-Text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] leading-tight sm:leading-snug">Problem Solving Software Engineer</h1>
                <h3 className="text-center justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Poppins'] leading-relaxed">Engineering Full Stack Web Solutions to Maximize Business Performance</h3>
                <div className="flex flex-row justify-start items-center gap-4 sm:gap-6 md:gap-8">
                    <Button text="Find Out More" onClick={handleFindOutMore} bgColor="neutral-600" textColor="neutral-200" className="w-33 phone:w-44" />
                    <Button text="Download CV" onClick={handleDownloadCV} bgColor="white" textColor="neutral-800" addOn={<DownloadIcon className="w-5 h-5 text-neutral-800" />} className="w-33 phone:w-44"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;