"use client";
import Image from "next/image";
import Button from "./Button";

interface InfoSectionProps {
    title: string;
    image: string;
    subtitle: string;
    text: string;
    buttonText: string;
    buttonOnClick: () => void;
    id?: string;
    width?: number;
}

const InfoSection = ({
    title,
    subtitle,
    text,
    buttonText,
    buttonOnClick,
    image,
    id,
    width
}: InfoSectionProps) => {
    return (
        <section id={id} className="w-full py-30 inline-flex flex-col justify-center items-center gap-20">
            {/* Title and Subtitle */}
            <div className="w-200.5 h-22 inline-flex flex-col justify-center items-center gap-5">
                <div className="self-stretch text-center justify-center text-Main-Text text-5xl font-bold font-['Poppins']">
                    {title}
                </div>
                <div className="text-center justify-center text-neutral-400 text-lg font-medium font-['Poppins'] leading-snug">
                    {subtitle}
                </div>
            </div>
            {/* Text and Button and Image */}
            <article className="w-full inline-flex justify-center items-center gap-20">
                {/* Text and Button */}
                <div className="flex flex-col justify-around items-center gap-20">
                    <div className="self-stretch text-Text text-balance font-medium font-['Poppins'] leading-7">
                        {text}
                    </div>
                    <Button
                        text={buttonText}
                        onClick={buttonOnClick}
                        bgColor="ButtonBg"
                        textColor="Main-Text"
                        width={width}
                    />
                </div>
                {/* Image */}
                    <Image src={image} alt="About David" width={300} height={300} style={{ borderRadius: "12px" }}/>
            </article>
        </section>
    );
};

export default InfoSection;

