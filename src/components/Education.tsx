import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {

  const educationData = [
    {
      degree: "High School Diploma",
      institution: "California High School",
      period: "2019 - 2023",
      location: "San Ramon, CA",
      activities: "Social Media Manager for NSTEM (National STEM Honors Society)",
      skills: ["Design", "Engineering", "Leadership", "Social Media Management"]
    },
    {
      degree: "B.S. Computer Engineering",
      institution: "University of California, Santa Cruz",
      period: "Sep 2023 - Present",
      location: "Santa Cruz, CA",
      gpa: "3.8/4.0",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Computer Architecture",
        "Machine Learning",
        "Database Systems",
        "Software Engineering",
        "Digital Design",
        "Operating Systems",
        "Computer Networks"
      ]
    }
  ];

  return (
    <motion.section 
      id="education" 
      className="py-20 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey in Computer Engineering, 
            building a strong foundation in technology and 
            innovation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
          
          {/* Education Timeline */}
          {educationData.map((education, index) => (
            <div key={education.institution} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className={`absolute left-6 top-12 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg`} />
              
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="ml-16"
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {education.degree}
                          </span>
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold">
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {education.institution}
                          </span>
                        </CardDescription>
                      </div>
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{education.location}</span>
                      </div>
                      {education.gpa && (
                         <div className="flex items-center gap-2">
                           <Award className="h-4 w-4 text-yellow-600" />
                           <span className="text-sm font-semibold text-yellow-700">GPA: {education.gpa}</span>
                         </div>
                       )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Relevant Courses for College */}
                    {education.relevantCourses && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 mb-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
                            Relevant Coursework ({education.relevantCourses.length} courses)
                          </h4>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {education.relevantCourses.map((course, courseIndex) => (
                              <motion.div
                                key={course}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: courseIndex * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="w-full justify-center text-center py-2 hover:bg-secondary/50 transition-colors"
                                >
                                  {course}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Activities and Skills for High School */}
                    {education.activities && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 mb-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                            Activities and Societies
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4">{education.activities}</p>
                          
                          {education.skills && (
                            <>
                              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                                Skills ({education.skills.length} skills)
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {education.skills.map((skill, skillIndex) => (
                                  <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                                    viewport={{ once: true }}
                                  >
                                    <Badge 
                                      variant="outline" 
                                      className="w-full justify-center text-center py-2 hover:bg-secondary/50 transition-colors"
                                    >
                                      {skill}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;