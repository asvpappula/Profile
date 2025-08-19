import Projects from '@/components/Projects'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Projects />
    </motion.div>
  )
}

export default ProjectsPage