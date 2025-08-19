import Experience from '@/components/Experience'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'

const ResumePage = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Adithya_Pappula_Resume.pdf'
    link.click()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Resume & Experience</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey and experience in software development.
          </p>
          <Button onClick={handleDownloadResume} className="mb-12">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
        <Experience />
      </div>
    </motion.div>
  )
}

export default ResumePage