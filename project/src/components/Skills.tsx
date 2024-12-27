import React from "react";
import "devicon/devicon.min.css";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="Python"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Go",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        alt="Go"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "C++",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        alt="C++"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "PyTorch",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
        alt="PyTorch"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Tensorflow",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
        alt="Tensorflow"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "OpenCV",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg"
        alt="OpenCV"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Next.Js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        alt="Next.Js"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Node.Js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        alt="Node.js"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Flask",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
        alt="Flask"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg"
        alt="FastAPI"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        alt="Git"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Linux",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
        alt="Linux"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Bash",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
        alt="Bash"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Redis",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
        alt="Redis"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        alt="PostgreSQL"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
        alt="MongoDB"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
        alt="Firebase"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Appwrite",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original-wordmark.svg"
        alt="Appwrite"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "AWS",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        alt="AWS"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Google Cloud Platform",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
        alt="GCP"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Azure",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg"
        alt="Azure"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        alt="Docker"
        className="h-8 w-8"
      />
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
        alt="Kubernetes"
        className="h-8 w-8"
      />
    ),
  },
];

// The component
const Skills = () => {
  return (
    <div id="skills" className="py-8 px-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Top Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg shadow-md`}
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-xl font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
