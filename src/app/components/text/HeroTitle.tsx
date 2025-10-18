const HeroTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <h1 className={`text-center justify-start text-Main-Text text-[2rem] phone:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-snug${className}`}>{children}</h1>
  );
};

export default HeroTitle;