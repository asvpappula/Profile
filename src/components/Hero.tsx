import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
// Using image from public folder
const profileImage = "/IMG_8944.JPG";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { 
      icon: Mail, 
      href: "mailto:pappule.asv@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/adithya-pappula/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    { 
      icon: Github, 
      href: "https://github.com/asvpappula",
      label: "GitHub",
      color: "hover:text-gray-700 dark:hover:text-gray-300"
    },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block"
            >
              {/* Outer pulsing ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-full bg-primary/10 blur-sm"
              />
              
              {/* Middle pulsing ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.2, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -inset-6 rounded-full bg-primary/15 blur-sm"
              />
              
              {/* Orbital ring particles */}
              <motion.div
                className="absolute -inset-4 rounded-full"
              >
                <div className="relative w-full h-full">
                  <motion.div 
                    className="absolute top-0 left-1/2 w-2 h-2 bg-primary/60 rounded-full transform -translate-x-1/2 -translate-y-1"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                  <motion.div 
                    className="absolute left-0 top-1/3 w-1 h-1 bg-purple-400/60 rounded-full"
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  />
                </div>
              </motion.div>
              
              {/* Orbital ring particles */}
              <motion.div
                className="absolute -inset-3 rounded-full"
              >
                <div className="relative w-full h-full">
                  <motion.div 
                    className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-green-400/60 rounded-full"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-yellow-400/60 rounded-full"
                    animate={{ scale: [1, 1.6, 1] }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                </div>
              </motion.div>
              
              {/* Main profile image */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(168, 85, 247, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 relative z-10"
              >
                <img
                  src={profileImage}
                  alt="Adithya Pappula"
                  className="w-full h-full object-cover scale-125"
                />
              </motion.div>
              
              {/* Single elegant rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/50"
              />
              
              {/* Floating particles */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  x: [-5, 5, -5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-3 h-3 bg-primary/40 rounded-full blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  x: [5, -5, 5]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-8 w-2 h-2 bg-blue-400/40 rounded-full blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                  x: [3, -3, 3]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-8 -left-6 w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-lg text-muted-foreground font-medium">
              Hi, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-blue-600"
          >
            Adithya Pappula
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6"
          >
            Computer Engineering @ UC Santa Cruz &bull; AI &amp; Full-Stack
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            I build user-friendly, AI-powered products. I love shipping clean UIs, 
            reliable backends, and practical ML that helps people every day.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="group bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#projects">
                Explore My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/5"
              asChild
            >
              <a href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-glow ${social.color}`}
                >
                  <IconComponent className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl"
      />
    </section>
  );
};

export default Hero;