"use client";
import Image from "next/image";
import Button from "./Button";
import Title from "./text/Title";
import Subtitle from "./text/Subtitle";
import Paragraph from "./text/Paragraph";

interface InfoSectionProps {
    title: string;
    image: string;
    subtitle: React.ReactNode;
    text: string;
    buttonText: string;
    buttonOnClick: () => void;
    id?: string;
}

const InfoSection = ({
    title,
    subtitle,
    text,
    buttonText,
    buttonOnClick,
    image,
    id
}: InfoSectionProps) => {
    return (
        <section id={id} className="w-full py-16 sm:py-20 md:py-30 inline-flex flex-col justify-center items-center gap-12 sm:gap-16 md:gap-20">
            {/* Title and Subtitle */}
            <div className="w-full max-w-[800px] inline-flex flex-col justify-center items-center gap-10 sm:gap-4 md:gap-5">
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </div>
            {/* Text and Button and Image */}
            <article className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                {/* Text and Button */}
                <div className="flex flex-col justify-around items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-2xl">
                    <Paragraph>{text}</Paragraph>
                    <Button
                        text={buttonText}
                        onClick={buttonOnClick}
                        bgColor="ButtonBg"
                        textColor="Main-Text"
                        className="w-72"
                    />
                </div>
                {/* Image */}
                <div className="flex-shrink-0">
                    <Image src={image} alt="About David" width={300} height={300} className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px] object-cover" style={{ borderRadius: "12px" }}/>
                </div>
            </article>
        </section>
    );
};

export default InfoSection;

