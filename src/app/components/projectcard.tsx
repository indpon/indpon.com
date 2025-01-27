import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string,
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-3xl shadow-lg justify-between h-full"
  >
    <a href={link} className="text-2xl font-semibold text-blue-400 mb-4">{title}</a>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default ProjectCard

