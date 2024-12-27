const Contacts = () => {
  return (
    <div
      id="contacts"
      className="flex max-w-6xl mx-auto py-10 items-center justify-between px-10"
    >
      <div className="flex items-center space-x-5">
        <a
          href="https://github.com/atmikshetty"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition duration-300"
        >
          <i className="devicon-github-original text-4xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/atmik-shetty-b85448249/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <i className="devicon-linkedin-plain text-4xl"></i>
        </a>
      </div>
      <p className="text-2xl font-bold text-center sm:text-left">
        Thank You!🥰
      </p>
    </div>
  );
};

export default Contacts;
