interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

const projectsData: Project[] = [
    {
      title: "OrganLink",
      description: "When life is at stake & time is a factor, OrganLink comes for rescue.",
      technologies: ["Typescript", "NextJs", "WebSockets"],
      link: "https://github.com/example/organlink",
    },
    {
      title: "DevTest",
      description: "What if Google Meet & Replit had a baby.",
      technologies: ["NextJs", "Typescript", "LiveKit", "Judge0 API"],
      link: "https://github.com/example/devtest",
    },
    {
      title: "GoMon",
      description: "Nodemon alternative for GoLang.",
      technologies: ["Go"],
      link: "https://github.com/example/gomon",
    },
    {
      title: "Vineet.tech",
      description: "A portfolio handcrafted by me in 7 hours.",
      technologies: ["NextJs", "WebSockets", "Shadcn", "Framer-motion", "Discord"],
      link: "https://vineet.tech",
    },
  ];

const ProjectCard = ({project} : {project: Project}) => {
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
                            <span className="text-2xl">github Logo</span>
                        ): (
                            <span className="text-2xl">🔗</span>
                        )}
                    </a>
                )}
            </div>

                <p className="text-sm text-teal-400 mt-2">{project.description}</p>
            
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            
        </div>
    )
}

const Projects = () => {
    return(
        <div className="max-w-6xl mx-auto py-10">
            <h2 className="text-4xl font-bold mb-6 text-center text-green-400">Project</h2>
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default Projects;