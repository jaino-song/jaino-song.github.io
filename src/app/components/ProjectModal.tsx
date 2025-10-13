"use client";
// import SampleGif from "./SampleGif";
import Image from "next/image";
import ProjectSection from "./ProjectSection";

export interface ProjectDetails {
    title: string;
    subtitle: string;
    sampleGIFs?: string[];
    overview: string[];
    technicalImplementation: string[];
    keyFeatures: string[];
    demoVideoUrl?: string;
    techStacks: string[];
    sourceCodeUrl?: string;
    productionUrl?: string;
    completed: boolean;
}

interface ProjectModalProps {
    project: ProjectDetails;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    return (
        <section className="w-full min-h-full relative bg-Background rounded-xl sm:rounded-[20px] p-4 sm:p-8 md:p-16 lg:p-25 flex flex-col justify-around">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute right-4 sm:right-[25px] top-4 sm:top-[25px] w-10 h-10 sm:w-12 sm:h-12 bg-ButtonBg rounded-lg sm:rounded-xl hover:opacity-80 transition-opacity flex items-center justify-center"
            >
                <div className="w-8 h-8 sm:w-10 sm:h-10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute w-4 sm:w-5 h-[2px] bg-Background rotate-45" />
                    <div className="absolute w-4 sm:w-5 h-[2px] bg-Background -rotate-45" />
                </div>
            </button>

            {/* Content */}
            <article className="w-full px-4 py-10 phone:pt-1 inline-flex flex-col justify-center items-center gap-10 sm:gap-14 md:gap-20">
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-start gap-2 sm:gap-3">
                    <div className="text-center justify-center text-Main-Text text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight sm:leading-loose">
                        {project.title}
                    </div>
                    <div className="self-stretch justify-start text-Subtitle text-base sm:text-lg font-normal font-['Poppins'] leading-snug">
                        {project.subtitle}
                    </div>
                </div>

                {/* Sample GIFs */}
                {/* {project.sampleGIFs && project.sampleGIFs.length > 0 && (
                    <div className="self-stretch inline-flex justify-center items-start gap-2 flex-wrap">
                        {project.sampleGIFs.map((gif, index) => (
                            <div key={index} className="w-80 h-[80vh] relative rounded-[40px] overflow-hidden">
                                <SampleGif gif={gif} />
                            </div>
                        ))}
                    </div>
                )} */}

                {/* Main Content */}
                <article className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-14">
                    <div className="self-stretch flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10">
                        <ProjectSection 
                            title="Project Overview" 
                            items={project.overview} 
                            iconType="bullet" 
                        />
                        
                        <ProjectSection 
                            title="Technical Implementation" 
                            items={project.technicalImplementation} 
                            iconType="bullet" 
                        />
                        
                        <ProjectSection 
                            title="Key Features" 
                            items={project.keyFeatures} 
                            iconType="checkmark" 
                        />
                    </div>

                    {/* Demo Section */}
                    {/* {project.demoVideoUrl && (
                        <div className="self-stretch flex flex-col justify-center items-center gap-6">
                            <div className="self-stretch flex flex-col justify-center items-center gap-4">
                                <div className="self-stretch justify-start text-Main-Text text-3xl font-semibold font-['Poppins'] leading-normal">
                                    Demo
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col justify-center items-center gap-4">
                                <div className="self-stretch h-72 relative bg-black rounded-xl flex flex-col justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                                    <div className="inline-flex justify-center items-center">
                                        <div className="inline-flex flex-col justify-start items-center gap-3">
                                            <div className="w-20 h-20 opacity-90 bg-white rounded-[40px] inline-flex justify-center items-center">
                                                <div className="w-8 h-8 relative border-gray-800 overflow-hidden flex items-center justify-center">
                                                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 3L17 12L3 21V3Z" fill="#1f2937" stroke="#1f2937" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="justify-start text-white text-base font-medium font-['Inter'] leading-tight">
                                                Watch Demo (2:30)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} */}

                    {/* Tech Stacks */}
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 sm:gap-4">
                        <div className="self-stretch justify-start text-Main-Text text-2xl sm:text-3xl font-semibold font-['Poppins'] leading-normal">
                            Tech Stacks
                        </div>
                        <div className="self-stretch inline-flex justify-start items-center gap-2 flex-wrap content-center">
                            {project.techStacks.map((tech, index) => (
                                <div key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-ButtonBg rounded-[20px] flex justify-center items-center">
                                    <div className="justify-start text-Text text-xs font-medium font-['Poppins'] leading-3">
                                        {tech}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Action Buttons */}
                <footer className="w-full max-w-[720px] flex flex-col justify-start items-start gap-4 pb-4 sm:pb-8">
                    <div className="self-stretch inline-flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
                        {project.sourceCodeUrl && (
                            <a
                                href={project.sourceCodeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[50vw] phone:w-auto h-10 sm:h-12 px-4 sm:px-6 bg-ButtonBg rounded-lg flex justify-center items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity"
                            >
                                <div className="w-4 h-4 sm:w-5 sm:h-5 relative border-white overflow-hidden flex items-center justify-center">
                                    <Image src="/svg/Github.svg" alt="Github" width={20} height={20} className="w-full h-full" />
                                </div>
                                <div className="justify-start text-white text-sm sm:text-base font-semibold font-['Inter'] leading-tight">
                                    View Source Code
                                </div>
                            </a>
                        )}
                        {project.productionUrl && (
                            <a
                                href={project.productionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[50vw] phone:w-auto h-10 sm:h-12 px-4 sm:px-6 bg-Main-Text rounded-lg flex justify-center items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity"
                            >
                                <div className="w-4 h-4 sm:w-5 sm:h-5 relative border-Background overflow-hidden flex items-center justify-center">
                                    <Image src="/svg/ExternalLink.svg" alt="External Link" width={20} height={20} className="w-full h-full" />
                                </div>
                                <div className="justify-start text-Background text-sm sm:text-base font-semibold font-['Inter'] leading-tight">
                                    View Production
                                </div>
                            </a>
                        )}
                    </div>
                </footer>
            </article>
        </section>
    );
};

export default ProjectModal;

