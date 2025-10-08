import Image from "next/image";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    onClick: () => void;
}

const ProjectCard = ({ title, description, image, onClick }: ProjectCardProps) => {
    return (
        <section 
            onClick={onClick}
            className="w-80 h-100 bg-white rounded-xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start cursor-pointer hover:shadow-[0px_6px_12px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300"
        >
            <div className="self-stretch h-48 bg-white rounded-xl flex flex-col justify-center items-center">
                    <Image src={image || ""} alt={title} width={400} height={400} style={{ borderRadius: "12px 12px 0px 0px" }} />
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

