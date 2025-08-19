import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Dream College Path",
      role: "Software Engineering Intern",
      period: "Jul 2025 – Present",
      location: "Remote",
      type: "AI/Data Science",
      description: "Developing AI-powered college admission guidance platform with personalized recommendations.",
      achievements: [
        "Built machine learning models for college admission prediction with 85% accuracy",
        "Implemented real-time data pipeline processing 10k+ student profiles daily",
        "Developed responsive React dashboard reducing user onboarding time by 40%"
      ],
      tech: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      current: true,
    },
    {
      company: "ResumeTailor AI",
      role: "Founder",
      period: "2021 – Present",
      location: "Santa Cruz, CA",
      type: "Startup",
      description: "Founded and developed AI-powered resume optimization platform serving 1000+ users.",
      achievements: [
        "Built full-stack application with Flask backend and React frontend",
        "Integrated multiple AI APIs (ChatGPT, Gemini) for intelligent resume analysis",
        "Achieved 95% user satisfaction rate and 40% ATS pass-rate improvement"
      ],
      tech: ["Flask", "React", "AI APIs", "Tailwind CSS", "Vercel"],
      current: true,
    },
    {
      company: "RAG AI Tool",
      role: "AI Developer",
      period: "Feb – Apr 2025",
      location: "Santa Cruz, CA",
      type: "Project",
      description: "Developed intelligent document querying system using Retrieval-Augmented Generation.",
      achievements: [
        "Implemented semantic search with vector embeddings and Pinecone database",
        "Created contextual response system with 90% accuracy in document retrieval",
        "Optimized query processing time by 60% through efficient embedding strategies"
      ],
      tech: ["Python", "Pinecone", "Embeddings", "Gemini AI", "Flask"],
      current: false,
    },
    {
      company: "Unite Hacks",
      role: "Co-founder",
      period: "2021 – 2023",
      location: "California",
      type: "Non-profit",
      description: "Co-founded hackathon organization promoting diversity in tech with 500+ participants.",
      achievements: [
        "Organized 3 major hackathons with $50k+ in prizes and sponsorships",
        "Led team of 15 volunteers across marketing, logistics, and technical operations",
        "Established partnerships with major tech companies including Google and Microsoft"
      ],
      tech: ["Event Management", "Community Building", "Partnerships"],
      current: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey in software engineering, AI development, and entrepreneurship. 
            Building innovative solutions and leading impactful projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={`${exp.company}-${exp.role}`} variants={itemVariants}>
              <Card className={`hover-lift card-gradient border-l-4 ${
                exp.current ? 'border-l-primary shadow-glow' : 'border-l-muted'
              }`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                        {exp.current && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {exp.company}
                      </CardDescription>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:text-right">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary" className="text-xs w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="skill-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;