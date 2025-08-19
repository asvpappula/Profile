import Hero from '@/components/Hero'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      {/* Hero Section */}
      <section className="h-full">
        <Hero />
      </section>
    </motion.div>
  )
}

export default Home