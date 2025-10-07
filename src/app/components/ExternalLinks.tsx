import Image from "next/image";

const ExternalLinks = () => {
  return (
    <div className="px-6 py-2 inline-flex justify-center items-center gap-10">
      <a
        href="https://www.linkedin.com/in/jaino-developer"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <div className="justify-start flex justify-center items-center pointer-cursor gap-2 text-Main-Text text-base font-bold font-['Poppins'] leading-normal">
          <Image src="/svg/ExternalLink.svg" alt="LinkedIn" width={24} height={24} className="invert brightness-0" />
          LinkedIn
        </div>
      </a>
      <a
        href="https://github.com/jaino-song"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <div className="justify-start flex justify-center items-center pointer-cursor gap-2 text-Main-Text text-base font-bold font-['Poppins'] leading-normal">
          <Image src="/svg/ExternalLink.svg" alt="Github" width={24} height={24} className="invert brightness-0" />
          GIthub
        </div>
      </a>
    </div>
  );
};

export default ExternalLinks;
