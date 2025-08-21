const HomeComponent: React.FC = () => {
    return (
        <section id='home' className="w-full h-screen flex flex-col md:flex-row bg-[url('/images/post-2.png')]">
            <article className='w-full h-1/2 flex flex-col justify-center items-center text-base md:w-1/2 md:h-full'>
                <h3 className='px-2 py-1 m-0 bg-red-900 rounded-t-xl rounded-br-xl font-semibold text-base'>Welcome to my portfolio, I’m</h3>
                <h1 className='px-2 py-1 font-bold text-xl'>José Roberto Henao Garcés</h1>
                <h3 className='px-2 py-1 font-semibold text-base text-center'>Mechatronics engineer and Frontend web developer</h3>
            </article>
            <article className="w-full h-1/2 flex justify-center items-center md:w-1/2 md:h-full">
                <figure className="w-1/2 aspect-square overflow-hidden rounded-full border-4 border-red-900">
                    <img
                        src="images/profile_image_02.jpeg"
                        alt="profile image"
                        className="w-full h-full object-cover"
                    />
                </figure>
            </article>
        </section>
    )
}

export default HomeComponent