import React from 'react';

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
      company: "IIT Patna",
      position: "Research Assistant",
      location: "Patna, Bihar, India",
      duration: "June 2024-July 2024",
      description: [
        "Fine tuning Open Source Visual Language Models to analyse Satellite Images",
        "Pre-processed and created Alpaca format dataset for LLMs fine-tuning",
        "Developed accident detection and explanation model using Qwen2-7B and LLAMA3-8B",
        "Successfully integrated with vector database and improved inferencing speed by implementing UnSloth AI"
      ],
      skills: [
        "LangChain ",
        "Weavite ",
        "Google Cloud Platform",
        "Large Language Models (LLM)"
      ]
    },
    {
      company: "Ignitus",
      position: "Research Intern",
      location: "Pittsburgh, Pennsylvania, United States",
      duration: "March 2024-May 2024",
      description: [
        "Created low-resolution versions of images and normalized them.",
        "Downscaled high-resolution images to provide sufficient training data for the model.",
        "Implemented batch processing to manage memory and speed up training by dividing the data into manageable batches.",
        "Developed an SRCNN model where the first layer extracts feature maps from low-resolution images, the second layer maps them into a high-dimensional space, and the final layer reconstructs the images from these high-dimensional features.",
        "Achieved an SSIM score of 96%, enhancing the clarity of remote sensing applications."
      ],
      skills: [
        "Python",
        "PyTorch",
        "OpenCV",
        "AWS Rekognition",
        "AWS SageMaker",
        "Generative Adversarial Networks (GANs)"
      ]
    },
    {
      company: "D'BUGGED Programmers",
      position: "Software Developer",
      location: "Mumbai, Maharashtra, India",
      duration: "Nov 2023-April 2024",
      description: [
        "Led software development projects in Full-Stack Development and Machine Learning on a contract basis with a 100% acceptance rate"
      ],
      skills: [
        "Django",
        "Tensorflow",
        "Exploratory Data Analysis",
        "React.js",
        "Scikit-Learn",
        "Node.js",
        "MongoDB"
      ]
    },
    {
      company: "EvaluAItor",
      position: "AI Engineer",
      location: "Hyderabad, Telangana, India",
      duration: "Dec 2023-March 2024",
      description: [
        "Led the development of the resume evaluation model using GPT-4 Turbo, which evaluated resumes on various parameters like strengths, weaknesses, phrasing, skills, and qualifications while comparing it with the job description.",
        "Provided the user with a detailed report regarding their shortcomings, tips to improve them, and scoring for each parameter.",
        "Improved the accuracy of the theory model by over 90%. Also helped with fine-tuning and testing the model, contributing to its overall optimization and performance enhancement.",
        "Generated data sets for the theory and resume model, keeping data engineering principles in mind."
      ],
      skills: [
        "Snowflake",
        "PySpark",
        "API Testing",
        "Google Cloud Platform",
        "Data Analysis"
      ]
    }
  ];
  
  const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
      <div className="rounded-xl p-6 mb-6 shadow-lg border border-black">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h3 className="text-2xl font-bold">{experience.company}</h3>
          <span className="text-sm mt-2 sm:mt-0">{experience.location}</span>
        </div>
  
        <h4 className="text-xl font-semibold mt-2">{experience.position}</h4>
        <p className="text-sm">{experience.duration}</p>
  
        {/* description */}
        <ul className="list-disc pl-5 mt-4 space-y-2">
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
    );
  };
  
  const Experiences = () => {
    return (
      <div id="experience" className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    );
  };
  
  export default Experiences;
  