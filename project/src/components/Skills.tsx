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
    name: "React",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React"
        className="h-8 w-8"
      />
    ),
  },
];

// The component
const Skills = () => {
  return (
    <div className="py-8 px-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

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
