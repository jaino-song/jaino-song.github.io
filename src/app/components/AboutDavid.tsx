import InfoSection from "./InfoSection";
import { toast } from "react-toastify";
import MobileInfoSection from "./MobileInfoSection";

const handleMoreAboutDavid = () => {
    toast.warning("Info Page Under Work");
}

const AboutDavid = () => {
    return (
        <> {/* Desktop Info Section */}
            <div className="hidden phone:block">
                <InfoSection
                    id="about-david"
                    image="/png/Profile.jpeg"
                    title="About David"
                    subtitle={<>Passionate About Solving Problems<br className="phone:hidden" /><span className="hidden phone:inline"> </span>With Deliberate Software Design</>}
                    text="I'm a full stack software engineer with over 3 years of hands-on experience using HTML, CSS, TypeScript, React, Next.js, and modern web development libraries to build scalable, high-performance, problem-solving web applications. I enjoy providing intuitive user experiences, automating real-world workflows, and continuously refining architecture to ensure maintainability and growth, thereby fulfilling business needs."
                    buttonText="More About David"
                    buttonOnClick={handleMoreAboutDavid}
                />
            </div>
            {/* Mobile Info Section */}
            <div className="phone:hidden">
                <MobileInfoSection
                    id="about-david"
                    image="/png/Profile.jpeg"
                    title="About David"
                    subtitle={<>Passionate About Solving Problems<br className="phone:hidden" /><span className="hidden phone:inline"> </span>With Deliberate Software Design</>}
                    text="I'm a full stack software engineer with over 3 years of hands-on experience using HTML, CSS, TypeScript, React, Next.js, and modern web development libraries to build scalable, high-performance, problem-solving web applications. I enjoy providing intuitive user experiences, automating real-world workflows, and continuously refining architecture to ensure maintainability and growth, thereby fulfilling business needs."
                    buttonText="More About David"
                    buttonOnClick={handleMoreAboutDavid}
                />
            </div>
        </>
    );
};

export default AboutDavid;