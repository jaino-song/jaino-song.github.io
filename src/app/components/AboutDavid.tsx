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
            subtitle="Passionate About Solving Problems With Deliberate Software Design"
            text="I’m a full stack software engineer with over 3 years of hands-on experience using HTML, CSS, TypeScript, React, Next.js, and modern web development libraries to build scalable, high-performance, problem-solving web applications. I enjoy providing intuitive user experiences, automating real-world workflows, and continuously refining architecture to ensure maintainability and growth, thereby fulfilling business needs."
            buttonText="More About David"
            buttonOnClick={handleMoreAboutDavid}
            width={72}
        />
    );
};

export default AboutDavid;