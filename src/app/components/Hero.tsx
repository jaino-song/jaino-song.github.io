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
        <section className="w-full h-125 p-12 bg-neutral-800 inline-flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-7">
                <h1 className="text-center justify-start text-Main-Text text-5xl font-bold font-['Poppins'] leading-[57.60px]">Problem Solving Software Engineer</h1>
                <h4 className="text-center justify-start text-neutral-400 text-xl font-normal font-['Poppins'] leading-loose">Comprehensive Web Solutions for Maximum Businees Outcome</h4>
                <div className="inline-flex justify-start items-center gap-8">
                    <Button text="Find Out More" onClick={handleFindOutMore} bgColor="neutral-600" textColor="neutral-200" />
                    <Button text="Download CV" onClick={handleDownloadCV} bgColor="white" textColor="neutral-800" addOn={<DownloadIcon className="w-5 h-5 text-neutral-800" />}/>
                </div>
            </div>
        </section>
    );
};

export default Hero;