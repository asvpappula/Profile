import Skills from '../src/components/Skills'
import Education from '../src/components/Education'
import Layout from '../src/components/Layout'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Github, Linkedin, ExternalLink, Download, MessageCircle, ChevronDown } from 'lucide-react'

const AboutPage = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const ctaRef = useRef(null)
  
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [isClient, setIsClient] = useState(false)
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 })
  const educationInView = useInView(educationRef, { once: true, amount: 0.2 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const slideInFromRight = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const staggeredTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const textLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const gradientAnimation = {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      ease: "linear" as const,
      repeat: Infinity
    }
  }

  return (
    <Layout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20"
      >
        {/* Animated background gradient */}
        <motion.div
          animate={gradientAnimation}
          className="absolute inset-0 bg-gradient-to-br from-background to-secondary/20 bg-[length:400%_400%]"
        />
        
        {/* Enhanced Floating particles */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => {
              const size = Math.random() * 8 + 4; // Random size between 4-12px
              const colors = [
                'bg-blue-500/40',
                'bg-purple-500/40', 
                'bg-pink-500/40',
                'bg-cyan-500/40',
                'bg-indigo-500/40'
              ];
              const color = colors[Math.floor(Math.random() * colors.length)];
              
              return (
                <motion.div
                  key={i}
                  className={`absolute ${color} rounded-full blur-sm`}
                  animate={{
                    y: [-30, -150],
                    x: [0, Math.random() * 150 - 75],
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              );
            })}
            
            {/* Additional larger glowing orbs */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`glow-${i}`}
                className="absolute w-6 h-6 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-md"
                animate={{
                  y: [-40, -200],
                  x: [0, Math.random() * 200 - 100],
                  opacity: [0, 0.6, 0],
                  scale: [0.3, 1.5, 0.3]
                }}
                transition={{
                  duration: Math.random() * 6 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section with Profile Avatar */}
          <motion.div 
            ref={heroRef}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <div className="flex justify-center">
              {/* About Me Text - Centered */}
              <motion.div 
                variants={slideInFromLeft}
                className="text-center max-w-4xl"
              >
                <motion.div variants={staggeredTextVariants}>
                  <motion.div className="mb-4">
                    <motion.h1 
                      variants={textLineVariants}
                      className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600"
                    >
                      About Me
                    </motion.h1>
                  </motion.div>
                  <motion.div className="space-y-6 mt-8">
                    <motion.p 
                      variants={textLineVariants}
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                      I'm a passionate software engineer and AI enthusiast with a strong foundation in 
                      full-stack development and machine learning. Currently pursuing my Master's in Computer Science 
                      at UC Santa Cruz, I love building innovative solutions that bridge the gap between 
                      cutting-edge technology and real-world applications.
                    </motion.p>
                    
                    <motion.p 
                      variants={textLineVariants}
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                      My journey in tech began with a curiosity about how things work under the hood. 
                      This led me to explore everything from frontend frameworks like React and Next.js 
                      to backend technologies like Node.js and Python. I've also delved deep into 
                      machine learning, working with TensorFlow and PyTorch to build intelligent systems 
                      that can learn and adapt.
                    </motion.p>
                    
                    <motion.p 
                      variants={textLineVariants}
                      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                      When I'm not coding, you'll find me exploring the latest AI research papers, 
                      contributing to open-source projects, or working on my startup ResumeTailor AI. 
                      I believe in the power of technology to solve real problems and make people's lives better. 
                      Whether it's building a user-friendly interface or training a complex neural network, 
                      I approach every project with enthusiasm and attention to detail.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: showScrollIndicator ? 1 : 0, 
                y: showScrollIndicator ? 0 : 20 
              }}
              transition={{ delay: showScrollIndicator ? 1.5 : 0, duration: 0.8 }}
            >
              <motion.div 
                className="flex flex-col items-center cursor-pointer group"
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                onClick={() => {
                  skillsRef.current?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                  Scroll to explore
                </span>
                <motion.div
                  className="p-2 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronDown className="h-6 w-6 text-primary" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            ref={skillsRef}
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.div
              variants={slideInFromBottom}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.02,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Skills />
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            ref={educationRef}
            variants={containerVariants}
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.div
              variants={slideInFromBottom}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.02,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Education />
            </motion.div>
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div 
            ref={ctaRef}
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.div
              variants={slideInFromBottom}
              className="relative overflow-hidden"
            >
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20 shadow-2xl">
                <CardContent className="p-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
                      Let's Build Something Amazing Together
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                      I'm always excited to work on innovative projects and 
                      collaborate with talented teams. 
                      Whether you have a project in mind or just want to connect, I'd love to hear from you!
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('mailto:adithyasaipappula@gmail.com', '_blank')}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = '/resume.pdf'
                        link.download = 'Adithya_Pappula_Resume.pdf'
                        link.click()
                      }}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6"
                  >
                    <motion.a
                      href="https://github.com/adithyasaipappula"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">GitHub</span>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/adithyasaipappula"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">LinkedIn</span>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                      href="mailto:adithyasaipappula@gmail.com"
                      className="flex items-center gap-2 text-muted-foreground hover:text-green-600 transition-colors duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="font-medium">Email</span>
                    </motion.a>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl translate-x-16 translate-y-16" />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default AboutPage