import photo from '../assets/photo.jpg'

const Aboutme = () => {
    return(
        <section id="#aboutme" className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8">

            <div className="mb-8 md:mb-0 md:mr-28">
                <img 
                src={photo}
                alt="Personal Image"
                className="rounded-full shadow-lg"
                />
            </div>

            <div className="max-w-md text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">A little bit about myself...</h2>
                <p className="text-xl leading-relaxed">
                Hi! I am <b>Atmik Shetty</b>. An <b>AI researcher</b> ,<b>machine learning engineer</b> , and <b>backend engineer</b> with a passion for building scalable, intelligent systems. I have interned with 5 startups and have been freelancing for almost 2 years.
                </p>
            </div>

        </section>
    )
}

export default Aboutme; 