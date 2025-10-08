interface ButtonProps {
    text: string;
    onClick: () => void;
    bgColor: string;
    textColor: string;
    addOn?: React.ReactNode;
    width?: number;
    height?: number;
}

const Button = ({ text, onClick, bgColor, textColor, addOn, width = 44, height = 12 }: ButtonProps) => {

  // const getDimensions = () => {
  //   const widthInPx = width * 4;
  //   const heightInPx = height * 4;
  //   return { width: widthInPx, height: heightInPx };
  // }

  // const { width: widthInPx, height: heightInPx } = getDimensions();

  return (
      <button 
        onClick={onClick} 
        className={`bg-${bgColor} cursor-pointer rounded-lg flex justify-center items-center gap-1.5`}
        style={{ width: `${width * 4}px`, height: `${height * 4}px` }}
      >
          {addOn}
          <p
            className={`text-${textColor} h-${height} text-base font-medium font-['Poppins'] leading-relaxed flex items-center justify-center`}
          >
            {text}
          </p>
      </button>
  );
};

export default Button;