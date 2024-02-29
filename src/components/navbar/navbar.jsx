import React from 'react'
import './navbar.scss'

const Navbar = () => {
	return (
		<header className='portfolioHeader'>
			<nav>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar