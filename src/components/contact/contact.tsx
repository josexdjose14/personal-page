const ContactComponent: React.FC = () => {

  const goToGitHub = () => {
    window.open('https://github.com/josexdjose14', '_blank');
  }
  const goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/josexdjose14/', '_blank');
  }

  return (
    <section id='contact' className='w-full h-full md:h-screen flex flex-col justify-start items-center bg-slate-950 bg-[url("/images/global_map.png")] p-4 gap-4'>
      <h3 className="font-bold text-xl text-white mt-16">Contact me</h3>
      <aside className="w-full h-full flex flex-row flex-wrap justify-center items-center gap-4">
        <article className='flex flex-row gap-2 justify-center items-center rounded-lg bg-cyan-400 py-4 px-8'>
          <figure>
            <img src="images/adressIcon.svg" alt="" className="w-12 aspect-square md:w-16" />
          </figure>
          <div>
            <p className="font-semibold text-lg">Adress</p>
            <p>Colombia, Cundinamarca, Bogota</p>
          </div>
        </article>
        <article className='flex flex-row gap-2 justify-center items-center rounded-lg bg-cyan-400 py-4 px-8'>
          <figure>
            <img src="images/emailIcon.svg" alt="" className="w-12 aspect-square md:w-16" />
          </figure>
          <div>
            <p className="font-semibold text-lg">Email</p>
            <p>Josexdjose14@gmail.com</p>
          </div>
        </article>
        <article className='flex flex-row gap-2 justify-center items-center rounded-lg bg-cyan-400 py-4 px-8'>
          <figure>
            <img src="images/phoneIcon.svg" alt="" className="w-12 aspect-square md:w-16" />
          </figure>
          <div>
            <p className="font-semibold text-lg">Phone</p>
            <p>+57 3023787113</p>
          </div>
        </article>
        <figure className='flex flex-row gap-2 justify-center items-center rounded-lg bg-cyan-400 py-4 px-8'>
          <img src="images/linkedinIcon.svg" alt="linkedin-link" onClick={goToLinkedIn} className="w-12 aspect-square md:w-16 cursor-pointer" />
          <img src="images/githubIcon.svg" alt="github-link" onClick={goToGitHub} className="w-12 aspect-square md:w-16 cursor-pointer" />
        </figure>
      </aside>
    </section>
  )
}

export default ContactComponent