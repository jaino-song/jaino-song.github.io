"use client";
import Button from "./Button";

const handleMoreAboutDavid = () => {
    console.log("More About David");
}

const AboutDavid = () => {
    return (
        <section className="w-full h-150 px-12 py-20 inline-flex flex-col justify-center items-center gap-15">
                <div className="w-200.5 h-22 inline-flex flex-col justify-center items-center gap-5">
                    <div className="self-stretch text-center justify-start text-Main-Text text-4xl font-bold font-['Poppins']">About David</div>
                    <div className="text-center justify-center text-Subtitle text-xl font-medium font-['Poppins'] leading-snug">Passionate about creating innovative solutions and writing clean, efficient code</div>
                </div>
                <div className="w-200.5 inline-flex justify-between items-center gap-12">
                    <div className="w-[549px] h-60 inline-flex flex-col justify-center items-center gap-12">
                        <div className="self-stretch flex flex-col justify-start items-start gap-5">
                            <div className="self-stretch justify-start text-Text text-base font-medium font-['Poppins'] leading-normal">I'm a full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful designs.</div>
                        </div>
                        <div data-focus="false" data-icon="false" data-layout="Icon and label (Default)" data-menu-button="false" data-size="Large" data-state="Rest" data-style="Primary" className="w-72 h-12 px-4 py-2 bg-neutral-600 rounded-lg inline-flex justify-center items-center gap-1.5">
                            <div className="h-6 flex justify-center items-center gap-1">
                                <div className="pb-0.5 flex justify-start items-start">
                                    <Button text="More About David" onClick={handleMoreAboutDavid} bgColor="var(--color-ButtonBg)" textColor="var(--color-Main-Text)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-48 h-60 bg-gray-200 rounded-xl inline-flex flex-col justify-center items-center">
                        <div className="w-20 h-20 relative border-gray-400 overflow-hidden">
                            <div className="w-12 h-5 left-[16.67px] top-[50px] absolute outline outline-[6.67px] outline-offset-[-3.33px] outline-gray-400" />
                            <div className="w-7 h-7 left-[26.67px] top-[10px] absolute outline outline-[6.67px] outline-offset-[-3.33px] outline-gray-400" />
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default AboutDavid;