interface ProjectSectionProps {
    title: string;
    items: string[];
    iconType?: 'bullet' | 'checkmark';
}

const ProjectSection = ({ title, items, iconType = 'bullet' }: ProjectSectionProps) => {
    return (
        <section className="self-stretch px-7 py-8 bg-SubComponentBg rounded-xl flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-Text text-2xl font-semibold font-['Poppins'] leading-snug">
                {title}
            </div>
            {iconType === 'checkmark' ? (
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    {items.map((item, index) => (
                        <div key={index} className="self-stretch inline-flex justify-start items-center gap-2">
                            <div className="w-4 h-4 relative border-emerald-500 overflow-hidden flex items-center justify-center">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="#10b981" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex-1 justify-start text-Subtitle text-sm font-normal font-['Poppins'] leading-none">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {items.map((item, index) => (
                        <div key={index} className="w-full inline-flex justify-start items-start gap-1">
                            <div className="px-[5px] py-2 inline-flex flex-col justify-end items-center gap-2.5 overflow-hidden">
                                <div className="w-1.5 h-1.5 bg-Subtitle rounded-full" />
                            </div>
                            <div className="flex-1 justify-start text-Subtitle text-sm font-normal font-['Poppins'] leading-tight">
                                {item}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </section>
    );
};

export default ProjectSection;

