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
        <div>
            <div>
                <h3>{project.title}</h3>
                {project.link && (
                    <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                    >
                        {project.link.includes("github") ? (
                            <span>github Logo</span>
                        ): (
                            <span>🔗</span>
                        )}
                    </a>
                )}
            </div>

            <p>
                <div>
                    {project.technologies.map((tech, index) => (
                        <span>
                            {tech}
                        </span>
                    ))}
                </div>
            </p>
        </div>
    )
}

