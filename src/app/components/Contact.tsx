import ContactBtn from './ContactBtn'

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 py-16 sm:py-20 md:py-30 px-4">
        <article className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <h2 className="self-stretch text-center justify-start text-white text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight sm:leading-10">Let&apos;s Work Together</h2>
            <h4 className="self-stretch text-center justify-start text-gray-300 text-base sm:text-lg md:text-xl font-medium font-['Poppins'] leading-snug">I&apos;m always interested in new opportunities and exciting projects.</h4>
        </article>
        <article className="w-full flex flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="phone:hidden flex-1 flex justify-center items-center">
            <ContactBtn text="Email" img="/svg/Mail.svg" link="mailto:david.jh.song@gmail.com" />
          </div>
          <div className="hidden phone:flex flex-1 justify-center items-center">
            <ContactBtn text="david.jh.song@gmail.com" img="/svg/Mail.svg" link="mailto:david.jh.song@gmail.com" />
          </div>
          <div className=" flex-1 flex justify-center items-center">
            <ContactBtn text="LinkedIn" img="/svg/Linkedin.svg" link="https://www.linkedin.com/in/jaino-developer/" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <ContactBtn text="GitHub" img="/svg/Github.svg" link="https://github.com/jaino-song" />
          </div>
        </article>
    </section>
  )
}

export default Contact