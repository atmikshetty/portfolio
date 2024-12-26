interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projectsData: Project[] = [
  {
    title: "PhonicForge",
    description:
      "Stuttering Detection and Speech Therapy AI",
    technologies: ["PyTorch", "LLAMA 3.1", "FAISS"],
    link: "https://github.com/atmikshetty/Phonic_Forge",
  },
  {
    title: "InVigilator",
    description: "AI Proctoring Tool",
    technologies: ["OpenCV, MediaPipe"],
    link: "https://github.com/atmikshetty/In-Vigilator",
  },
  {
    title: "Online Voting System",
    description: "Voting System Developed for student council elections in college.",
    technologies: ["Java, MySql"],
    link: "https://github.com/atmikshetty/Online-Voting-System-JAVA",
  },
  {
    title: "Public Speaking Helper",
    description: "Helps you in building up confidence for public speaking.",
    technologies: [
      "NextJs",
      "WebSockets",
      "Shadcn",
      "Framer-motion",
      "Discord",
    ],
    link: "https://www.linkedin.com/in/atmik-shetty-b85448249/",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 mb-6 shadow-lg border border-purple-500">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-yellow-300">{project.title}</h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal-400"
          >
            {project.link.includes("github") ? (
              <i className="devicon-github-original text-3xl"></i>
            ) : (
              <span className="text-2xl">🔗</span>
            )}
          </a>
        )}
      </div>

      <p className="text-sm text-teal-400 mt-2">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg: grid-cols-2 gap-5">
        {projectsData.map((project, index) => ( 
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
