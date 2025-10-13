import Image from "next/image";

const ExternalLinks = () => {
  return (
    <div className="px-4 sm:px-6 py-2 mx-auto inline-flex justify-center items-center gap-4 sm:gap-6 md:gap-10">
      <a
        href="https://www.linkedin.com/in/jaino-developer"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
      >
        <div className="justify-start flex justify-center items-center pointer-cursor gap-1.5 sm:gap-2 text-Main-Text text-sm sm:text-base font-bold font-['Poppins'] leading-normal">
          <Image src="/svg/ExternalLink.svg" alt="LinkedIn" width={24} height={24} className="invert brightness-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          LinkedIn
        </div>
      </a>
      <a
        href="https://github.com/jaino-song"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
      >
        <div className="justify-start flex justify-center items-center pointer-cursor gap-1.5 sm:gap-2 text-Main-Text text-sm sm:text-base font-bold font-['Poppins'] leading-normal">
          <Image src="/svg/ExternalLink.svg" alt="Github" width={24} height={24} className="invert brightness-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          GIthub
        </div>
      </a>
    </div>
  );
};

export default ExternalLinks;
