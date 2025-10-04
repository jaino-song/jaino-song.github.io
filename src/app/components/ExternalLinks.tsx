'use client';

const ExternalLinks = () => {
  return (
    <div className="px-6 py-2 inline-flex justify-center items-center gap-10">
      <a
        href="https://www.linkedin.com/in/jaino-developer"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <div className="justify-start text-Subtitle text-base font-bold font-['Poppins'] leading-normal">
          LinkedIn
        </div>
        <div className="w-4 h-2 relative origin-top-left -rotate-45 overflow-hidden">
          <div className="w-2.5 h-2.5 left-[13.24px] top-[13.22px] absolute origin-top-left -rotate-180 bg-Subtitle" />
        </div>
      </a>
      <a
        href="https://github.com/jaino-song"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <div className="justify-start text-Subtitle text-base font-bold font-['Poppins'] leading-normal">
          GIthub
        </div>
        <div className="w-4 h-2 relative origin-top-left -rotate-45 overflow-hidden">
          <div className="w-2.5 h-2.5 left-[13.24px] top-[13.22px] absolute origin-top-left -rotate-180 bg-Subtitle" />
        </div>
      </a>
    </div>
  );
};

export default ExternalLinks;
