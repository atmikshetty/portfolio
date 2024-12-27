import photo from "../assets/photo.jpg";

const Aboutme = () => {
  return (
    <section
      id="aboutme"
      className="min-h-screen flex flex-col items-center justify-center p-8 md:flex-row md:space-x-12"
    >
      <div className="mb-8 md:mb-0 md:w-1/3">
        <img
          src={photo}
          alt="Personal Image"
          className="rounded-full shadow-lg w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
      </div>

      <div className="max-w-md text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          A little bit about myself...
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          Hi! I am <b>Atmik Shetty</b>. An <b>AI researcher</b>,{" "}
          <b>machine learning engineer</b>, and <b>backend engineer</b> with a
          passion for building scalable, intelligent systems. I have interned with
          5 startups and have been freelancing for almost 2 years. Here's my{" "}
          <a
            href="https://drive.google.com/file/d/1bIqIKK8UQkwNhl3ctStcjdWGqeUpqhZA/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            CV
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
