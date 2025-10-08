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
        <section className="w-full py-30 inline-flex flex-col justify-center items-center gap-20">
            <div className="w-[800px] flex flex-col justify-start items-center gap-5">
                <h2 className="self-stretch text-center justify-start text-Main-Text text-5xl font-bold font-['Poppins'] leading-10">
                    {title}
                </h2>
                <h4 className="self-stretch text-center justify-start text-neutral-400 text-lg font-medium font-['Poppins'] leading-snug">
                    {subtitle}
                </h4>
            </div>
            <article className="self-stretch rounded-xl inline-flex justify-center items-center gap-8 flex-wrap content-center overflow-hidden">
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

