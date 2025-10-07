import Image from 'next/image'

interface ContactBtnProps {
    text: string
    img: string
    link: string
}


const ContactBtn = ({ text, img, link }: ContactBtnProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-48 inline-flex flex-col justify-start items-center gap-3">
        <div className="w-12 h-12 bg-ButtonBg rounded-3xl inline-flex justify-center items-center">
            <Image src={img} width={24} height={24} alt={text} className="w-6 h-6" />
        </div>
        <p className="justify-start text-white text-base font-medium font-['Poppin'] leading-tight">{text}</p>
    </a>
  )
}

export default ContactBtn