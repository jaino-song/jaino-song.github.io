import { ReactNode } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: ReactNode;
    onClick: () => void;
}

const ProjectCard = ({ title, description, image, onClick }: ProjectCardProps) => {
    return (
        <section 
            onClick={onClick}
            className="w-80 h-120 bg-white rounded-xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start cursor-pointer hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300"
        >
            <div className="self-stretch h-48 bg-white rounded-xl flex flex-col justify-center items-center">
                {image ? (
                    image
                ) : (
                    <div className="w-12 h-12 relative border-gray-400 overflow-hidden">
                        <div className="w-3 h-6 left-[32px] top-[12px] absolute outline outline-4 outline-offset-[-2px] outline-gray-400" />
                        <div className="w-3 h-6 left-[4px] top-[12px] absolute outline outline-4 outline-offset-[-2px] outline-gray-400" />
                    </div>
                )}
            </div>
            <div className="self-stretch h-72 p-6 bg-[#3a3a3a] rounded-bl-xl rounded-br-xl flex flex-col justify-center items-center gap-8">
                <div className="self-stretch justify-start text-Main-Text text-3xl font-bold font-['Poppins'] leading-normal">
                    {title}
                </div>
                <div className="self-stretch justify-start text-Subtitle text-base font-medium font-['Poppins'] leading-tight">
                    {description}
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;

