const Title = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
      <h2 className={`self-stretch text-center justify-center text-Main-Text text-4xl sm:text-5xl font-bold font-['Poppins'] ${className}`}>{children}</h2>
    );
  };
  
  export default Title;
