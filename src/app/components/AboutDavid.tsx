"use client";
import InfoSection from "./InfoSection";

const handleMoreAboutDavid = () => {
    console.log("More About David");
}

const AboutDavid = () => {
    return (
        <InfoSection
            id="about-david"
            title="About David"
            subtitle="Passionate about creating innovative solutions and writing clean, efficient code"
            text="I'm a full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful designs."
            buttonText="More About David"
            buttonOnClick={handleMoreAboutDavid}
        />
    );
};

export default AboutDavid;