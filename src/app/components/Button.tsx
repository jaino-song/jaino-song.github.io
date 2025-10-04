interface ButtonProps {
    text: string;
    onClick: () => void;
    bgColor: string;
    textColor: string;
    addOn?: React.ReactNode;
}

const Button = ({ text, onClick, bgColor, textColor, addOn }: ButtonProps) => {
  return (
      <button onClick={onClick} className={`w-44 h-12 bg-${bgColor} cursor-pointer rounded-lg flex justify-center items-center gap-1.5`}>
          {addOn}
            <p
              className={`text-${textColor} text-base font-medium font-['Poppins'] leading-relaxed flex items-center justify-center`}
            >
              {text}
            </p>
      </button>
  );
};

export default Button;