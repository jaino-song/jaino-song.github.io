import Image from 'next/image'

interface ContactBtnProps {
    text: string
    img: string
    link: string
}


const ContactBtn = ({ text, img, link }: ContactBtnProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-48 inline-flex flex-col justify-start items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ButtonBg rounded-2xl sm:rounded-3xl inline-flex justify-center items-center">
            <Image src={img} width={24} height={24} alt={text} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <p className="justify-start text-white text-sm sm:text-base font-medium font-['Poppin'] leading-tight text-center">{text}</p>
    </a>
  )
}

export default ContactBtn