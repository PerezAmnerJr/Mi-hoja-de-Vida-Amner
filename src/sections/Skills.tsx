import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAngular,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa"
import { SiTypescript, SiVite } from "react-icons/si"

const skills = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Vite", icon: <SiVite color="#646CFF" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Angular", icon: <FaAngular color="#DD0031" /> },
  { name: "NodeJS", icon: <FaNodeJs color="#339933" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="reveal mb-5">
      <h2 className="h3 mb-3">Skills</h2>
      <div className="d-flex flex-wrap gap-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="text-center"
            style={{ width: 80 }}
          >
            <div style={{ fontSize: "3rem" }}>{s.icon}</div>
            <div className="small mt-1 text-white-50">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
