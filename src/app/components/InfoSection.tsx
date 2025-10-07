"use client";
import Button from "./Button";
import { ReactNode } from "react";

interface InfoSectionProps {
    title: string;
    subtitle: string;
    text: string;
    buttonText: string;
    buttonOnClick: () => void;
    image?: ReactNode;
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
                    <div className="self-stretch text-Text text-base font-medium font-['Poppins'] leading-7">
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
                {image ? (
                    <div className="w-60 h-60 bg-gray-200 rounded-xl inline-flex flex-col justify-center items-center">
                        {image}
                    </div>
                ) : (
                    <div className="w-48 h-60 bg-gray-200 rounded-xl inline-flex flex-col justify-center items-center">
                        <div className="w-48 h-48 relative border-gray-400 overflow-hidden aspect-square flex items-center justify-center">
                            <div className="w-12 h-5 left-[16.67px] top-[50px] absolute outline outline-[6.67px] outline-offset-[-3.33px] outline-gray-400" />
                            <div className="w-7 h-7 left-[26.67px] top-[10px] absolute outline outline-[6.67px] outline-offset-[-3.33px] outline-gray-400" />
                        </div>
                    </div>
                )}
            </article>
        </section>
    );
};

export default InfoSection;

