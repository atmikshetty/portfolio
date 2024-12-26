interface Experience {
    company: string;
    position: string;
    location: string;
    duration: string;
    description: string[];
    skills: string[];
}

const experiences: Experience[] = [
    {
        company: "SimPPL",
        position: "Research Engineer",
        location: "Boston, Massachusetts, United States",
        duration: "June 2024-Present",
        description: [
            "Developed and implemented data collection pipelines for social media platforms, utilizing proxy servers, AWS S3, and EC2 to ensure efficient and scalable data retrieval.",
            "Processed and analyzed collected data for multimodal analysis, leveraging advanced models like Vision Transformers and LLaMA 3.2 Vision for enhanced insights.",
            "Dockerized applications to facilitate consistent development, deployment, and scalability across different environments.",
            "Implemented scripts for automated tests on processed data, ensuring reliability and efficiency in handling large datasets"
        ],
        skills: [
            "Python",
            "PyTorch",
            "Google Cloud Platform",
            "Aws"
        ]
    }, 
]

const ExperienceCard = ({experience} : {experience: Experience}) => {
    return(
        <div>

            <div>
                <h3>{experience.company}</h3>
                <span>{experience.location}</span>
            </div>

            <h4>{experience.position}</h4>
            <p>{experience.duration}</p>

            {/* description */}
            <ul>
                {experience.description.map((point, index) => (
                    <span>
                        {point}
                    </span>
                ))}
            </ul>

            {/* skills div */}
            <div>
                {experience.skills.map((skill, index) => (
                    <span>
                        {skill}
                    </span>
                ))}
            </div>



        </div>
    )
}

const Experiences = () => {
    return (
        <div>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
        </div>
    )
}

export default Experiences;