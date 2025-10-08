import ContactBtn from './ContactBtn'

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 py-30">
        <article className="w-full flex flex-col items-center justify-center gap-8">
            <h2 className="self-stretch text-center justify-start text-white text-5xl font-bold font-['Poppins'] leading-10">Let's Work Together</h2>
            <h4 className="self-stretch text-center justify-start text-gray-300 text-xl font-medium font-['Poppins'] leading-snug">I'm always interested in new opportunities and exciting projects.</h4>
        </article>
        <article className="w-full flex items-center justify-center gap-4">
            <ContactBtn text="david.jh.song@gmail.com" img="/svg/Mail.svg" link="mailto:david.jh.song@gmail.com" />
            <ContactBtn text="LinkedIn" img="/svg/LinkedIn.svg" link="https://www.linkedin.com/in/jaino-developer/" />
            <ContactBtn text="GitHub" img="/svg/Github.svg" link="https://github.com/jaino-song" />
        </article>
    </section>
  )
}

export default Contact