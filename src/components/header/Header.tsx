function HeaderComponent() {
    return (
        <header className='fixed top-0 left-0 w-full z-50 border border-gray-200 bg-cyan-100 p-4'>
            <nav className="w-full">
                <ul className="flex flex-row justify-around w-full font-bold text-xl">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent