import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <section id='contact' className='portfolioContact'>
      <h3>Contact me</h3>
      <article className='portfolioContact__card'>
        <figure>
          <img src="/images/adressIcon.svg" alt="" />
        </figure>
        <div>
          <p>Adress</p>
          <p>Colombia, Bolívar, Cartagena</p>
        </div>
      </article>
      <article className='portfolioContact__card'>
        <figure>
          <img src="/images/emailIcon.svg" alt="" />
        </figure>
        <div>
          <p>Email</p>
          <p>Josexdjose14@gmail.com</p>
        </div>
      </article>
      <article className='portfolioContact__card'>
        <figure>
          <img src="/images/phoneIcon.svg" alt="" />
        </figure>
        <div>
          <p>Phone</p>
          <p>+57 3023787113</p>
        </div>
      </article>
      <figure className='portfolioContact__link'>
        <img src="/images/linkedinIcon.svg" alt="linkedin-link" />
        <img src="/images/githubIcon.svg" alt="github-link" />
      </figure>
    </section>
  )
}

export default Contact