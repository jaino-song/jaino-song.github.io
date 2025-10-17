"use client";
import ProjectCard from "./ProjectCard";
import Subtitle from "./text/Subtitle";
import Title from "./text/Title";

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
        <section className="w-full min-h-[75vh] py-16 sm:py-20 md:py-30 inline-flex flex-col justify-center items-center gap-12 sm:gap-16 md:gap-20">
            <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-3 sm:gap-4 md:gap-5">
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </div>
            <article className="self-stretch px-6 rounded-xl inline-flex justify-center items-center gap-10 flex-wrap content-center overflow-hidden">
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

