import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Cpu, Globe, Zap, Layers, Server, Palette } from "lucide-react";
import { useRef, useState } from "react";
import ProjectDetailView from "./ProjectDetailView";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsDetailViewOpen(true);
  };

  const handleCloseDetailView = () => {
    setIsDetailViewOpen(false);
    setSelectedProject(null);
  };

  // Tech icon mapping
  const techIcons: { [key: string]: any } = {
    "Flask": Server,
    "React": Code,
    "Tailwind": Palette,
    "Gemini AI": Cpu,
    "ChatGPT API": Zap,
    "Pinecone": Database,
    "Embeddings": Layers,
    "Python": Code,
    "Supabase": Database,
    "OpenAI": Cpu,
    "TypeScript": Code,
    "Tailwind CSS": Palette,
    "FastAPI": Server,
    "Docker": Layers,
    "PostgreSQL": Database,
    "Redis": Database,
  };

  const projects = [
    {
      title: "ResumeTailor AI",
      description: "AI-powered resume optimization platform that analyzes job descriptions and tailors resumes for maximum ATS compatibility and relevance.",
      expandedDescription: "Advanced AI system that uses natural language processing to understand job requirements and automatically optimize resumes. Features include ATS scoring, keyword optimization, and personalized suggestions.",
      tech: ["Flask", "React", "Tailwind", "Gemini AI", "ChatGPT API"],
      github: "https://github.com/adithyasaipappula/resumetailor",
      demo: "https://resumetailor-ai.vercel.app",
      featured: true,
      thumbnail: "/placeholder.svg",
      leadDeveloper: "Adithya Pappula",
      screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      architecture: "/placeholder.svg",
      keyFeatures: [
        {
          title: "ATS Optimization",
          description: "Advanced algorithms analyze job descriptions and optimize resumes for Applicant Tracking Systems."
        },
        {
          title: "AI-Powered Suggestions",
          description: "Intelligent recommendations for improving resume content and structure."
        },
        {
          title: "Real-time Analysis",
          description: "Instant feedback and scoring for resume improvements."
        },
        {
          title: "Multiple Formats",
          description: "Support for various resume formats and templates."
        }
      ],
      techStack: [
        { category: "Backend", items: ["Flask", "Python"] },
        { category: "Frontend", items: ["React", "Tailwind CSS"] },
        { category: "AI/ML", items: ["Gemini AI", "ChatGPT API"] }
      ],
      credits: {
        productTeam: ["Lead Developer: Adithya Pappula", "AI Consultant: OpenAI Team"],
        specialThanks: ["Beta testers for valuable feedback", "Open-source community"]
      }
    },
    {
      title: "RAG AI Tool",
      description: "Retrieval-Augmented Generation system for intelligent document querying with semantic search capabilities and contextual responses.",
      expandedDescription: "A modern knowledge management system that leverages Retrieval-Augmented Generation (RAG) technology to enable organizations to efficiently organize, search, and retrieve information from their documents. The application combines semantic search capabilities with advanced question answering, providing a powerful tool for knowledge management and information retrieval.",
      tech: ["Flask", "Pinecone", "Embeddings", "Gemini AI", "Python"],
      github: "https://github.com/adithyasaipappula/rag-ai-tool",
      demo: "https://rag-ai-demo.vercel.app",
      featured: true,
      thumbnail: "/rag1.png",
      leadDeveloper: "Adithya Pappula",
      screenshots: ["/rag1.png", "/rag2.png", "/rag3.png", "/rag4.png"],
      architecture: "/sa1.png",
      keyFeatures: [
        {
          title: "Semantic Search",
          description: "Utilizes Pinecone vector database for meaning-based searches using cosine similarity for relevance measurement."
        },
        {
          title: "Advanced Question Answering",
          description: "Powered by Google's Gemini 1.5 Flash for understanding complex questions and generating relevant answers."
        },
        {
          title: "Document Processing",
          description: "Supports PDF and text document ingestion with efficient processing, chunking, and indexing."
        },
        {
          title: "Interactive Interface",
          description: "User-friendly chat interface for natural conversational interactions."
        }
      ],
      techStack: [
        { category: "Programming Language", items: ["Python 3.8+"] },
        { category: "Vector Database", items: ["Pinecone (cosine similarity)"] },
        { category: "LLM", items: ["Google Gemini 1.5 Flash"] },
        { category: "Embedding Model", items: ["all-MiniLM-L6-v2"] },
        { category: "Web Framework", items: ["Flask"] },
        { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] }
      ],
      credits: {
        productTeam: [
          "Lead Developer: Adithya Pappula"
        ],
        specialThanks: []
      }
    },
    {
      title: "AI Study Planner",
      description: "Personalized study schedule generator using machine learning to optimize learning patterns and track progress effectively.",
      expandedDescription: "Intelligent study companion that adapts to your learning style, tracks progress, and optimizes study schedules using machine learning algorithms.",
      tech: ["React", "Supabase", "OpenAI", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/adithyasaipappula/ai-study-planner",
      demo: "https://study-planner-ai.vercel.app",
      featured: false,
      thumbnail: "/placeholder.svg",
      leadDeveloper: "Adithya Pappula",
      screenshots: ["/placeholder.svg", "/placeholder.svg"],
      architecture: "/placeholder.svg"
    },
    {
      title: "Distributed Task Manager",
      description: "Scalable task management system with real-time collaboration features, built for high-performance distributed environments.",
      expandedDescription: "Enterprise-grade task management with microservices architecture, real-time collaboration, and advanced analytics for team productivity.",
      tech: ["FastAPI", "Docker", "PostgreSQL", "Supabase", "Redis"],
      github: "https://github.com/adithyasaipappula/distributed-tasks",
      demo: "https://task-manager-demo.vercel.app",
      featured: false,
      thumbnail: "/placeholder.svg",
      leadDeveloper: "Adithya Pappula",
      screenshots: ["/placeholder.svg", "/placeholder.svg"],
      architecture: "/placeholder.svg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
    }
  };

  return (
    <section ref={ref} id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-light">
            A showcase of my work in AI, full-stack development, and product design.
          </p>
        </motion.div>

        {/* Featured Projects Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Gradient Line Divider */}
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mb-6"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <motion.div 
              className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scaleX: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Featured Projects Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary/80 font-medium"
          >
            <span>Featured Projects</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.15,
            delayChildren: 0.1,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const isHovered = hoveredCard === index;
            return (
              <motion.div 
                key={project.title} 
                variants={itemVariants}
                transition={{ duration: 0.7, ease: "easeOut" }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <motion.div
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`h-[600px] overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm
                    shadow-lg hover:shadow-2xl transition-all duration-500
                    ${project.featured ? 'ring-2 ring-primary/30 shadow-primary/10' : 'ring-1 ring-border/50'}
                    relative
                  `}>
                    
                    {/* Project Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-muted/20">
                      <motion.img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                        initial={{ scale: 1.1, filter: "grayscale(100%)" }}
                        whileHover={{ scale: 1.2, filter: "grayscale(0%)" }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                      
                      {/* Featured Badge with Animation */}
                      {project.featured && (
                        <motion.div
                          className="absolute top-4 right-4"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg border-0">
                            <motion.span
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              ✨ Featured
                            </motion.span>
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed transition-all duration-300">
                        {isHovered ? project.expandedDescription : project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 relative z-10">
                      {/* Tech Stack with Icons */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => {
                          const IconComponent = techIcons[tech] || Code;
                          return (
                            <motion.div
                              key={tech}
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: "hsl(var(--primary) / 0.1)"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="group/badge px-3 py-1 rounded-full border-border/50 hover:border-primary/50 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                              >
                                <IconComponent className="w-3 h-3 mr-1.5 group-hover/badge:text-primary transition-colors" />
                                <span className="group-hover/badge:text-primary transition-colors">{tech}</span>
                              </Badge>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="group/btn border-border/50 hover:border-primary/50 transition-all duration-300"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                              <span className="group-hover/btn:translate-x-0.5 transition-transform duration-300">Code</span>
                            </a>
                          </Button>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              <span className="group-hover/btn:translate-x-0.5 transition-transform duration-300">Demo →</span>
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/adithyasaipappula" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
      
      {/* Project Detail View Modal */}
      {selectedProject && (
        <ProjectDetailView
          project={selectedProject}
          isOpen={isDetailViewOpen}
          onClose={handleCloseDetailView}
        />
      )}
    </section>
  );
};

export default Projects;