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