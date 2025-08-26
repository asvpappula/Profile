import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github, Code, Database, Cpu, Globe, Zap, Layers, Server, Palette, Users, Award } from "lucide-react";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    expandedDescription: string;
    tech: string[];
    github: string;
    demo: string;
    featured: boolean;
    thumbnail: string;
    leadDeveloper?: string;
    screenshots?: string[];
    architecture?: string;
    keyFeatures?: {
      title: string;
      description: string;
    }[];
    techStack?: {
      category: string;
      items: string[];
    }[];
    credits?: {
      productTeam?: string[];
      specialThanks?: string[];
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailView = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    "HTML": Code,
    "CSS": Palette,
    "JavaScript": Code,
    "Monaco Editor": Code,
    "Vite": Zap,
    "React 18": Code,
    "shadcn/ui": Palette,
    "React Router DOM": Code,
    "Lucide React": Palette,
    "React hooks": Code,
    "React context": Code,
    "Next-themes": Palette,
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1
    },
    exit: { 
      opacity: 0, 
      scale: 0.8
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-background rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 sm:p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                  AP
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-foreground">{project.title}</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                  {project.leadDeveloper && (
                    <p className="text-sm sm:text-base text-blue-600 font-medium">Lead Developer: {project.leadDeveloper}</p>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-muted"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="p-4 sm:p-6 space-y-6 sm:space-y-8"
              >
                {/* Tech Stack Badges */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </motion.div>

                {/* Project Description */}
                <motion.div variants={itemVariants}>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg">
                    {project.expandedDescription}
                  </p>
                </motion.div>

                {/* Project Screenshots Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <Code className="w-4 h-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold">Project Screenshots</h2>
                  </div>
                  
                  {/* Main Screenshot Display */}
                  <Card className="overflow-hidden mb-6">
                    <CardContent className="p-0">
                      <div className="aspect-video flex items-center justify-center">
                        <img
                          src={project.screenshots?.[activeScreenshot] || project.thumbnail}
                          alt="Project Screenshot"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Screenshot Grid */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {project.screenshots.map((screenshot, index) => (
                        <Card 
                          key={index} 
                          className={`overflow-hidden cursor-pointer transition-all ${
                            activeScreenshot === index 
                              ? 'ring-2 ring-blue-500 shadow-lg' 
                              : 'hover:ring-2 hover:ring-blue-300 hover:shadow-md'
                          }`}
                          onClick={() => setActiveScreenshot(index)}
                        >
                          <CardContent className="p-0">
                             <div className="aspect-square flex items-center justify-center">
                               <img
                                 src={screenshot}
                                 alt={`Screenshot ${index + 1}`}
                                 className="w-full h-full object-cover"
                               />
                             </div>
                           </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </motion.div>
                
                {/* System Architecture Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <Layers className="w-4 h-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold">System Architecture</h2>
                  </div>
                  
                  <Card>
                    <CardContent className="p-4 sm:p-6">
                      {project.architecture ? (
                        <div className="rounded-lg p-4 flex items-center justify-center min-h-[300px]">
                          <img
                            src={project.architecture}
                            alt="System Architecture Diagram"
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="h-32 sm:h-48 bg-muted/20 rounded-lg flex items-center justify-center">
                          <p className="text-sm sm:text-base text-muted-foreground text-center px-4">System Architecture and Data Flow Diagram</p>
                        </div>
                      )}
                      <div className="mt-4 text-center">
                        <p className="text-sm text-muted-foreground">System Architecture and Data Flow Diagram</p>
                        <Button variant="link" className="text-xs mt-2">
                          Scroll to explore →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Key Features Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold">Key Features</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {(project.keyFeatures || [
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
                    ]).map((feature, index) => (
                      <Card key={index} className="p-3 sm:p-4">
                        <h3 className="text-sm sm:text-base font-semibold mb-2">{feature.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                      </Card>
                    ))}
                  </div>
                </motion.div>

                {/* Technology Stack Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <Server className="w-4 h-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold">Technology Stack</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {(project.techStack || [
                      {
                        category: "Programming Language",
                        items: ["Python 3.8+"]
                      },
                      {
                        category: "Vector Database",
                        items: ["Pinecone (cosine similarity)"]
                      },
                      {
                        category: "LLM",
                        items: ["Google Gemini 1.5 Flash"]
                      },
                      {
                        category: "Embedding Model",
                        items: ["all-MiniLM-L6-v2"]
                      },
                      {
                        category: "Web Framework",
                        items: ["Flask"]
                      },
                      {
                        category: "Frontend",
                        items: ["HTML, CSS, JavaScript"]
                      }
                    ]).map((stack, index) => (
                      <div key={index}>
                        <h3 className="text-sm sm:text-base font-semibold mb-2">{stack.category}</h3>
                        {stack.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2 mb-1">
                            {techIcons[item] && (
                              <div className="w-4 h-4">
                                {React.createElement(techIcons[item], { className: "w-4 h-4 text-blue-600" })}
                              </div>
                            )}
                            <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Credits & Acknowledgments Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold">Credits & Acknowledgments</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Product Team
                      </h3>
                      <div className="space-y-2">
                        {(project.credits?.productTeam || [
                          "Lead Developer: Adithya Pappula"
                        ]).map((member, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-xs sm:text-sm">{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Special Thanks
                      </h3>
                      <div className="space-y-2">
                        {(project.credits?.specialThanks || [
                          "CXPA Global team for their valuable feedback and support",
                          "Open-source community for their excellent tools and documentation",
                          "Beta testers who provided invaluable feedback during development"
                        ]).map((thanks, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-xs sm:text-sm">{thanks}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button asChild className="w-full sm:w-auto">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailView;