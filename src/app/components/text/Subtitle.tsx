const Subtitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
      <h5 className={`text-center justify-center text-neutral-400 text-base sm:text-lg font-medium font-['Poppins'] leading-snug ${className}`}>{children}</h5>
    );
  };
  
  export default Subtitle;