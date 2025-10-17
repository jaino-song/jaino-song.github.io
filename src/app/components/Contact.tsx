import ContactBtn from './ContactBtn'
import Title from './text/Title';
import Subtitle from './text/Subtitle';

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 py-16 sm:py-20 md:py-30 px-4">
        <article className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5">
            <Title>Let&apos;s Work Together</Title>
            <Subtitle>I&apos;m always interested in new opportunities and exciting projects.</Subtitle>
        </article>
        <article className="w-full flex flex-row items-center justify-center">
          <div className="sm:hidden flex-1 flex justify-center items-center">
            <ContactBtn text="Email" img="/svg/Mail.svg" link="mailto:david.jh.song@gmail.com" />
          </div>
          <div className="hidden sm:flex flex-1 justify-center items-center">
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