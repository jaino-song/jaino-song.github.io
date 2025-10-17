const HeroTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <h1 className={`text-center justify-start text-Main-Text text-3xl phone:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-snug ${className}`}>{children}</h1>
  );
};

export default HeroTitle;