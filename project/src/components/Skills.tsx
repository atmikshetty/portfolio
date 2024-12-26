import React from "react";
import 'devicon/devicon.min.css';

// defining the structure 
interface Skill {
    name: string;
    icon: React.ReactNode;
    bgColor: string;
}

// implementing the interface
const skills: Skill[] = [
    { name: "JavaScript", icon: <i className="devicon-javascript-plain"></i>, bgColor: "bg-yellow-100" },
    { name: "TypeScript", icon: <i className="devicon-typescript-plain"></i>, bgColor: "bg-blue-100" },
    { name: "Python", icon: <i className="devicon-python-plain"></i>, bgColor: "bg-green-100" },
    { name: "Java", icon: <i className="devicon-java-plain"></i>, bgColor: "bg-red-100" },
    { name: "AWS", icon: <i className="devicon-amazonwebservices-plain"></i>, bgColor: "bg-orange-100" },
    { name: "Kubernetes", icon: <i className="devicon-kubernetes-plain"></i>, bgColor: "bg-blue-200" },
    { name: "Azure", icon: <i className="devicon-azure-plain"></i>, bgColor: "bg-purple-100" },
    { name: "Docker", icon: <i className="devicon-docker-plain"></i>, bgColor: "bg-cyan-100" },
    { name: "React", icon: <i className="devicon-react-original"></i>, bgColor: "bg-blue-200" },
    { name: "Next.js", icon: <i className="devicon-nextjs-original"></i>, bgColor: "bg-gray-200" },
    { name: "Express", icon: <i className="devicon-express-original"></i>, bgColor: "bg-green-200" },
    { name: "MongoDB", icon: <i className="devicon-mongodb-plain"></i>, bgColor: "bg-green-100" },
    { name: "Postgres", icon: <i className="devicon-postgresql-plain"></i>, bgColor: "bg-blue-100" },
    { name: "Redis", icon: <i className="devicon-redis-plain"></i>, bgColor: "bg-red-200" },
    { name: "Bash", icon: <i className="devicon-bash-plain"></i>, bgColor: "bg-gray-300" },
    { name: "Git", icon: <i className="devicon-git-plain"></i>, bgColor: "bg-orange-200" },
  ];

const Skills = () => {
  return(
    <div>
      <h2>Skills</h2>

      <div>
        {skills.map((skill, index) => (
          <div
            key={index}
            className=""
          >
            <div>{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;