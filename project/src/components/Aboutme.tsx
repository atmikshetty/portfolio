const Aboutme = () => {
    return(
        <section id="#aboutme" className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center p-8">

            <div className="mb-8 md:mb-0 md:mr-28">
                <img 
                src="/assets/photo-cv.jpg"
                alt="Personal Image"
                className="rounded-full shadow-lg"
                />
            </div>

            <div className="max-w-md text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">A little bit about myself...</h2>
                <p className="text-lg leading-relaxed">
                Hi! I am an AI researcher, machine learning engineer, and backend engineer with a passion for building scalable, intelligent systems. I specialize in developing innovative solutions using state-of-the-art technologies and enjoy tackling challenging problems at the intersection of AI and software engineering.
                </p>
            </div>

        </section>
    )
}

export default Aboutme;