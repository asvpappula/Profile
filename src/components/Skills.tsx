import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiPython, SiJavascript, 
  SiTypescript, SiPostgresql, SiSupabase, SiFirebase, SiRedis,
  SiDocker, SiVercel, SiAmazon, SiTensorflow, SiPytorch, SiOpenai,
  SiFastapi, SiFlask, SiNodedotjs, SiGraphql, SiApachekafka
} from 'react-icons/si'
import { FaCode, FaDatabase, FaCloud, FaMicrochip, FaBrain, FaPalette, FaJava, FaRobot } from 'react-icons/fa'

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const skillIcons: { [key: string]: React.ReactNode } = {
     'Python': <SiPython className="w-4 h-4" />,
     'C/C++': <FaCode className="w-4 h-4" />,
     'JavaScript': <SiJavascript className="w-4 h-4" />,
     'TypeScript': <SiTypescript className="w-4 h-4" />,
     'Java': <FaJava className="w-4 h-4" />,
     'SQL': <FaDatabase className="w-4 h-4" />,
     'React': <SiReact className="w-4 h-4" />,
     'Next.js': <SiNextdotjs className="w-4 h-4" />,
     'Tailwind CSS': <SiTailwindcss className="w-4 h-4" />,
     'HTML/CSS': <FaCode className="w-4 h-4" />,
     'Framer Motion': <SiFramer className="w-4 h-4" />,
     'FastAPI': <SiFastapi className="w-4 h-4" />,
     'Flask': <SiFlask className="w-4 h-4" />,
     'Node.js': <SiNodedotjs className="w-4 h-4" />,
     'REST APIs': <FaCode className="w-4 h-4" />,
     'GraphQL': <SiGraphql className="w-4 h-4" />,
     'TensorFlow': <SiTensorflow className="w-4 h-4" />,
     'PyTorch': <SiPytorch className="w-4 h-4" />,
     'OpenAI API': <SiOpenai className="w-4 h-4" />,
     'Gemini AI': <FaRobot className="w-4 h-4" />,
     'Embeddings': <FaBrain className="w-4 h-4" />,
     'RAG': <FaBrain className="w-4 h-4" />,
     'PostgreSQL': <SiPostgresql className="w-4 h-4" />,
     'Supabase': <SiSupabase className="w-4 h-4" />,
     'Firebase': <SiFirebase className="w-4 h-4" />,
     'Pinecone': <FaDatabase className="w-4 h-4" />,
     'Redis': <SiRedis className="w-4 h-4" />,
     'Docker': <SiDocker className="w-4 h-4" />,
     'Vercel': <SiVercel className="w-4 h-4" />,
     'Azure AI Foundry': <FaCloud className="w-4 h-4" />,
     'AWS': <SiAmazon className="w-4 h-4" />,
     'Kafka': <SiApachekafka className="w-4 h-4" />,
     'RISC-V': <FaMicrochip className="w-4 h-4" />,
     'Embedded Systems': <FaMicrochip className="w-4 h-4" />,
     'Verilog': <FaMicrochip className="w-4 h-4" />,
     'Digital Design': <FaMicrochip className="w-4 h-4" />
   }

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "C/C++", proficiency: 85 },
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 88 },
        { name: "Java", proficiency: 80 },
        { name: "SQL", proficiency: 85 }
      ],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300",
      progressColor: "bg-blue-500",
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", proficiency: 92 },
        { name: "Next.js", proficiency: 88 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "Framer Motion", proficiency: 85 }
      ],
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300",
      progressColor: "bg-green-500",
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", proficiency: 90 },
        { name: "Flask", proficiency: 85 },
        { name: "Node.js", proficiency: 82 },
        { name: "REST APIs", proficiency: 92 },
        { name: "GraphQL", proficiency: 75 }
      ],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300",
      progressColor: "bg-purple-500",
    },
    {
      title: "AI & ML",
      skills: [
        { name: "TensorFlow", proficiency: 85 },
        { name: "PyTorch", proficiency: 88 },
        { name: "OpenAI API", proficiency: 92 },
        { name: "Gemini AI", proficiency: 90 },
        { name: "Embeddings", proficiency: 85 },
        { name: "RAG", proficiency: 88 }
      ],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300",
      progressColor: "bg-orange-500",
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", proficiency: 88 },
        { name: "Supabase", proficiency: 85 },
        { name: "Firebase", proficiency: 82 },
        { name: "Pinecone", proficiency: 80 },
        { name: "Redis", proficiency: 75 }
      ],
      color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 border-teal-300",
      progressColor: "bg-teal-500",
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", proficiency: 85 },
        { name: "Vercel", proficiency: 90 },
        { name: "Azure AI Foundry", proficiency: 80 },
        { name: "AWS", proficiency: 78 },
        { name: "Kafka", proficiency: 70 }
      ],
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300",
      progressColor: "bg-red-500",
    },
    {
      title: "Hardware & Systems",
      skills: [
        { name: "RISC-V", proficiency: 85 },
        { name: "Embedded Systems", proficiency: 80 },
        { name: "Verilog", proficiency: 82 },
        { name: "Digital Design", proficiency: 85 }
      ],
      color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 border-indigo-300",
      progressColor: "bg-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring" as const,
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const skillHoverAnimation = {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      type: "spring" as const,
      stiffness: 300,
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const filteredCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(category => category.title === activeFilter)

  const filterOptions = ['All', ...skillCategories.map(cat => cat.title)]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive toolkit for building modern applications, from 
            AI-powered backends to 
            responsive frontends and 
            scalable cloud infrastructure.
          </p>
          
          {/* Filter Buttons */}
          <motion.div 
            variants={filterVariants}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={`${activeFilter}-${category.title}`}
              variants={categoryVariants}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.05, delayChildren: categoryIndex * 0.1 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={`${activeFilter}-${skill.name}`} 
                    variants={skillVariants}
                    whileHover={skillHoverAnimation}
                    className="w-full max-w-xs"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className={`${category.color} text-sm font-medium px-3 py-1 border flex items-center gap-2`}
                        >
                          {skillIcons[skill.name]}
                          {skill.name}
                        </Badge>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 ml-auto">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full ${category.progressColor} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Skills;