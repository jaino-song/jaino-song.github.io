"use client";
import ProjectCard from "./ProjectCard";

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    onClick: () => void;
}

interface ProjectsProps {
    title?: string;
    subtitle?: string;
    projects: Project[];
}

const Projects = ({ 
    title = "Featured Projects",  
    subtitle = "Here are some of my recent projects that showcase my skills and creativity",
    projects 
}: ProjectsProps) => {
    return (
        <section className="w-full py-16 sm:py-20 md:py-30 inline-flex flex-col justify-center items-center gap-12 sm:gap-16 md:gap-20">
            <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-3 sm:gap-4 md:gap-5 px-4">
                <h2 className="self-stretch text-center justify-start text-Main-Text text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight sm:leading-10">
                    {title}
                </h2>
                <h4 className="self-stretch text-center justify-start text-neutral-400 text-base sm:text-lg font-medium font-['Poppins'] leading-snug">
                    {subtitle}
                </h4>
            </div>
            <article className="self-stretch rounded-xl inline-flex justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap content-center overflow-hidden">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        image={project.image || ""}
                        description={project.description}
                        onClick={project.onClick}
                    />
                ))}
            </article>
        </section>
    );
};

export default Projects;

