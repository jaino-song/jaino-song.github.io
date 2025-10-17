const Paragraph = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
      <p className={`self-stretch text-Text text-center text-sm sm:text-base font-medium font-['Poppins'] leading-7 ${className}`}>{children}</p>
    );
  };
  
  export default Paragraph;