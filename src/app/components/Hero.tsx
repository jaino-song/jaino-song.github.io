'use client';
import Button from "./Button";
import { DownloadIcon } from "./icons/DownloadIcon";

const handleFindOutMore = () => {
    console.log("Find Out More");
};

const handleDownloadCV = () => {
    console.log("Download CV");
};


const Hero = () => {
    return (
        <section className="w-full h-125 p-12 bg-neutral-800 inline-flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-7">
                <h1 className="text-center justify-start text-Main-Text text-5xl font-bold font-['Poppins'] leading-[57.60px]">Problem Solving Software Engineer</h1>
                <h4 className="text-center justify-start text-neutral-400 text-xl font-normal font-['Poppins'] leading-loose">Comprehensive Web Solutions for Maximum Businees Outcome</h4>
                <div className="inline-flex justify-start items-center gap-6">
                    <div data-focus="false" data-icon="false" data-layout="Icon and label (Default)" data-menu-button="false" data-size="Large" data-state="Rest" data-style="Primary" className="w-44 h-12 px-4 py-2 bg-neutral-600 rounded-lg flex justify-center items-center gap-1.5">
                        <div className="h-6 flex justify-center items-center gap-1">
                            <div className="pb-0.5 flex justify-start items-start">
                                <Button text="Find Out More" onClick={handleFindOutMore} bgColor="neutral-600" textColor="neutral-200" />
                            </div>
                        </div>
                    </div>
                    <div className="w-44 h-12 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2">
                        <Button text="Download CV" onClick={handleDownloadCV} bgColor="white" textColor="neutral-800" addOn={<DownloadIcon className="w-5 h-5 text-neutral-800" />}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;