"use client";
import Image from "next/image";
import Button from "./Button";

interface MobileInfoSectionProps {
    title: string;
    image: string;
    subtitle: React.ReactNode;
    text: string;
    buttonText: string;
    buttonOnClick: () => void;
    id?: string;
}

const MobileInfoSection = ({
    title,
    subtitle,
    text,
    buttonText,
    buttonOnClick,
    image,
    id
}: MobileInfoSectionProps) => {
    return (
        <section id={id} className="w-full py-16 sm:py-20 md:py-30 inline-flex flex-col justify-center items-center gap-12 sm:gap-16 md:gap-20">
            {/* Title and Subtitle */}
            <div className="w-full max-w-[800px] inline-flex flex-col justify-center items-center gap-10 sm:gap-4 md:gap-5 first:gap-3">
                <div className="self-stretch text-center justify-center text-Main-Text text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins']">
                    {title}
                </div>
                <div className="text-center justify-center text-neutral-400 text-m sm:text-lg font-medium font-['Poppins'] leading-snug">
                    {subtitle}
                </div>
            </div>
            {/* Image */}
            <div className="flex-shrink-0">
                <Image src={image} alt="About David" width={300} height={300} className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px] object-cover" style={{ borderRadius: "12px" }}/>
            </div>
            {/* Text and Button */}
            <div className="flex flex-col justify-around items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-2xl">
                <div className="self-stretch text-Text text-center text-sm sm:text-base font-medium font-['Poppins'] leading-7">
                    {text}
                </div>
                <Button
                    text={buttonText}
                    onClick={buttonOnClick}
                    bgColor="ButtonBg"
                    textColor="Main-Text"
                    className="w-50"
                />
            </div>
        </section>
    );
};

export default MobileInfoSection;

