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
            "Led the research against the promotion of harmful products and services on social media platforms.",
            "Developed data collection pipelines for social media platforms, utilizing proxy servers, AWS S3, and EC2 to ensure efficient and scalable data retrieval.",
            "Processed and analyzed collected data for multimodal analysis, leveraging advanced models like Vision Transformers and LLaMA 3.2 Vision for enhanced insights.",
            "Dockerized applications to facilitate consistent development, deployment, and scalability across different environments.",
            "Implemented scripts for automated tests on processed data, ensuring reliability and efficiency in handling large datasets",
            "Developed models to detect hate speech and harassment against politicians using data collected from Twitter and YouTube",
            "Worked with Open Source Models like LLAMA3.1 and Mistral using Fine-tuning techniques like PEFT and QLoRA"
        ],
        skills: [
            "Python",
            "PyTorch",
            "Google Cloud BigQuery",
            "Aws S3",
            "Google Vertex AI",
            "FastAPI",
            "Natural Language Processing (NLP)",
            "LLMs",
            "HuggingFace",
            "Pinecone"
        ]
    }, 
    {
        company: "Stealth Startup",
        position: "Software Engineer",
        location: "Bengaluru, Karnataka, India",
        duration: "August 2024-January 2025",
        description: [
            "Led the development and maintenance of backend systems using Golang, integrating Kafka, Redis, and Postgres for real-time processing and data management.",
            "Deployed scalable services on AWS using EKS and ECS, optimizing performance with load balancers and monitoring system health via CloudWatch.",
            "Implemented concurrency across applications to enhance performance and resource utilization, ensuring responsive and efficient system operations.",
            "Set up payment integrations using Juspay, streamlining payment processing and improving user experience.",
            "Assisted in the management of cloud infrastructure, utilizing monitoring tools like CloudWatch for real-time insights and alerts to ensure system reliability and performance"
        ],
        skills: [
            "Go",
            "Apache Kafka",
            "AWS Lambda",
            "Amazon EKS",
            "Redis",
            "PostgreSQL",
            "Amazon ECS",
            "Amazon CloudWatch"
        ]
    }, 
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
        <div className="rounded-xl p-6 mb-6 shadow-lg border border-black">

            <div className=" flex justify-between items-center"> 
                <h3 className="text-2xl font-bold">{experience.company}</h3>
                <span className="text-sm">{experience.location}</span>
            </div>

            <h4 className="text-xl font-semibold ">{experience.position}</h4>
            <p className="text-sm ">{experience.duration}</p>

            {/* description */}
            <ul className="list-disc pl-5 mt-4 space-y-2 ">
                {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            {/* skills div */}
            <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>



        </div>
    )
}

const Experiences = () => {
    return (
        <div className="max-w-4xl mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
        </div>
    )
}

export default Experiences;