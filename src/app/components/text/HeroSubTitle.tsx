const HeroSubTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h4 className="text-center justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">{children}</h4>
    )
};

export default HeroSubTitle;