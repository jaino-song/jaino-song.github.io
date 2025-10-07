"use client";
import { ReactNode } from "react";
import SampleGif from "./SampleGif";
import Image from "next/image";

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
}

interface ProjectModalProps {
    project: ProjectDetails;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    return (
        <div className="w-full min-h-full relative bg-Background rounded-[20px] p-25 flex flex-col justify-around">
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute right-[25px] top-[25px] w-12 h-12 bg-ButtonBg rounded-xl hover:opacity-80 transition-opacity flex items-center justify-center"
            >
                <div className="w-10 h-10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute w-5 h-[2px] bg-Background rotate-45" />
                    <div className="absolute w-5 h-[2px] bg-Background -rotate-45" />
                </div>
            </button>

            {/* Content */}
            <div className="max-w-[836px] mx-auto pt-[60px] inline-flex flex-col justify-center items-center gap-12">
                {/* Header */}
                <div className="w-full flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch inline-flex justify-start items-center">
                        <div className="text-center justify-center text-Main-Text text-6xl font-bold font-['Poppins'] leading-loose">
                            {project.title}
                        </div>
                    </div>
                    <div className="self-stretch justify-start text-Subtitle text-xl font-normal font-['Poppins'] leading-normal">
                        {project.subtitle}
                    </div>
                </div>

                {/* Sample GIFs */}
                {project.sampleGIFs && project.sampleGIFs.length > 0 && (
                    <div className="self-stretch inline-flex justify-start items-start gap-12 flex-wrap">
                        {project.sampleGIFs.map((gif, index) => (
                            <div key={index} className="w-96 h-[852px] relative rounded-[40px] overflow-hidden">
                                <SampleGif gif={gif} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Main Content */}
                <div className="w-full flex flex-col justify-center items-center gap-14">
                    <div className="self-stretch flex flex-col justify-center items-center gap-10">
                        {/* Project Overview */}
                        <div className="self-stretch min-h-72 p-5 bg-SubComponentBg rounded-xl flex flex-col justify-start items-start gap-4">
                            <div className="self-stretch justify-start text-Text text-2xl font-semibold font-['Poppins'] leading-snug">
                                Project Overview
                            </div>
                            {project.overview.map((item, index) => (
                                <div key={index} className="w-full inline-flex justify-start items-start gap-1">
                                    <div className="px-[5px] py-2 inline-flex flex-col justify-end items-center gap-2.5 overflow-hidden">
                                        <div className="w-1.5 h-1.5 bg-Subtitle rounded-full" />
                                    </div>
                                    <div className="flex-1 justify-start text-Subtitle text-sm font-normal font-['Poppins'] leading-tight">
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Technical Implementation */}
                        <div className="self-stretch min-h-72 p-5 bg-SubComponentBg rounded-xl flex flex-col justify-start items-start gap-4">
                            <div className="self-stretch justify-start text-Text text-2xl font-semibold font-['Poppins'] leading-snug">
                                Technical Implementation
                            </div>
                            {project.technicalImplementation.map((item, index) => (
                                <div key={index} className="w-full inline-flex justify-start items-start gap-1">
                                    <div className="px-[5px] py-2 inline-flex flex-col justify-end items-center gap-2.5 overflow-hidden">
                                        <div className="w-1.5 h-1.5 bg-Subtitle rounded-full" />
                                    </div>
                                    <div className="flex-1 justify-start text-Subtitle text-sm font-normal font-['Poppins'] leading-tight">
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Key Features */}
                        <div className="self-stretch min-h-72 p-5 bg-SubComponentBg rounded-xl flex flex-col justify-start items-start gap-4">
                            <div className="self-stretch justify-start text-Text text-2xl font-semibold font-['Poppins'] leading-snug">
                                Key Features
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                {project.keyFeatures.map((feature, index) => (
                                    <div key={index} className="self-stretch inline-flex justify-start items-center gap-2">
                                        <div className="w-4 h-4 relative border-emerald-500 overflow-hidden flex items-center justify-center">
                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4L3.5 6.5L9 1" stroke="#10b981" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="flex-1 justify-start text-Subtitle text-sm font-normal font-['Poppins'] leading-none">
                                            {feature}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Demo Section */}
                    {project.demoVideoUrl && (
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
                                                        <path d="M3 3L17 12L3 21V3Z" fill="#1f2937" stroke="#1f2937" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
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
                    )}

                    {/* Tech Stacks */}
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                        <div className="self-stretch justify-start text-Main-Text text-3xl font-semibold font-['Poppins'] leading-normal">
                            Tech Stacks
                        </div>
                        <div className="self-stretch inline-flex justify-start items-center gap-2 flex-wrap content-center">
                            {project.techStacks.map((tech, index) => (
                                <div key={index} className="px-4 py-2 bg-ButtonBg rounded-[20px] flex justify-center items-center">
                                    <div className="justify-start text-Text text-xs font-medium font-['Poppins'] leading-3">
                                        {tech}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="w-full max-w-[720px] flex flex-col justify-start items-start gap-4 pb-8">
                    <div className="self-stretch inline-flex justify-center items-center gap-4 flex-wrap">
                        {project.sourceCodeUrl && (
                            <a 
                                href={project.sourceCodeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 px-6 bg-ButtonBg rounded-lg flex justify-center items-center gap-3 hover:opacity-90 transition-opacity"
                            >
                                <div className="w-5 h-5 relative border-white overflow-hidden flex items-center justify-center">
                                    <Image src="/svg/Github.svg" alt="Github" width={20} height={20} className="w-full h-full" />
                                </div>
                                <div className="justify-start text-white text-base font-semibold font-['Inter'] leading-tight">
                                    View Source Code
                                </div>
                            </a>
                        )}
                        {project.productionUrl && (
                            <a 
                                href={project.productionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 px-6 bg-Main-Text rounded-lg flex justify-center items-center gap-3 hover:opacity-90 transition-opacity"
                            >
                                <div className="w-5 h-5 relative border-Background overflow-hidden flex items-center justify-center">
                                    <Image src="/svg/ExternalLink.svg" alt="External Link" width={20} height={20} className="w-full h-full" />
                                </div>
                                <div className="justify-start text-Background text-base font-semibold font-['Inter'] leading-tight">
                                    View Production
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;

