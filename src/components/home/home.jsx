import React from 'react'
import './home.scss'

const Home = () => {
    return (
        <section id='home' className='portfolioHome'>
            <article className='portfolioHome__info'>
                <h3 className='portfolioHome__info__text1'>Welcome to my portfolio, I’m</h3>
                <h2 className='portfolioHome__info__text2'>José Roberto Henao Garcés</h2>
                <h3 className='portfolioHome__info__text3'>Mechatronics engineer and Frontend web developer</h3>
            </article>
            <article className='portfolioHome__image'>
                <figure>
                    <img src="images/profile_image_01.jpeg" alt="profile image" />
                </figure>
            </article>
        </section>
    )
}

export default Home