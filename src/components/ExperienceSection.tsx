import { motion } from 'framer-motion';
import { Calendar, Building2, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DATA ANALYST INTERN",
      company: "PRODIGY INFOTECH",
      period: "Aug 2024 - Sept 2024",
      details: [
        "Created predictive models using decision trees and analyzed the Titanic dataset through EDA to optimize customer targeting.",
        "Processed and visualized world population data using Jupyter, Pandas, and Seaborn to reveal trends.",
        "Evaluated Twitter sentiment patterns, generating insights to refine marketing strategies.",
        "Tech stacks used: Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn."
      ],
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
      title: "STIMULATED JOB",
      company: "JP MORGAN CHASE AND CO.",
      period: "Jun 2024 - Jul 2024",
      details: [
        "Leveraged advanced Excel techniques to execute dynamic data visualizations, enhancing decision-making processes.",
        "Automated complex tasks using VBA macros, improving data manipulation efficiency and reducing manual errors.",
        "Applied conditional formatting and graphical tools to design dashboards, effectively presenting data-driven stories to stakeholders.",
        "Tech stacks used: Microsoft Excel, VBA, Power BI, Tableau."
      ],
      tech: ["Microsoft Excel", "VBA", "Power BI", "Tableau"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="experience" className="py-24 relative bg-space-darker">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-space-dark to-transparent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Work <span className="text-cosmic-blue">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in the world of web development and technology.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative"
            >
              {/* Connecting line between experiences */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[15px] top-[80px] w-0.5 h-[calc(100%-40px)] bg-cosmic-blue/30 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-cosmic-blue flex items-center justify-center shrink-0">
                      <Building2 size={16} className="text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-gray-400 ml-10">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-medium text-cosmic-blue ml-10">{exp.title}</h4>
                </div>
                
                <div className="md:w-2/3 bg-space-light p-6 rounded-xl border border-cosmic-blue/10">
                  <ul className="space-y-3 text-gray-300">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight size={18} className="text-cosmic-blue shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <h5 className="text-sm font-medium text-gray-400">Tech stacks used:</h5>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs font-medium text-gray-300 bg-gray-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Advanced SQL",
      issuer: "HackerRank",
      date: "September 2024",
      link: "#"
    },
    {
      title: "Python Essentials",
      issuer: "Cisco",
      date: "August 2024",
      link: "#"
    },
    {
      title: "R Programming",
      issuer: "Board Infinity and Coursera",
      date: "June 2024",
      link: "#"
    },
    {
      title: "VI International Conference on Environmental Sustainability",
      issuer: "Indore Institute of Law",
      date: "May 2024",
      link: "#"
    },
    {
      title: "Excel Skills for Data Analytics and Visualization",
      issuer: "Coursera",
      date: "April 2024",
      link: "#"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-cosmic-blue">Certificates</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional certifications and recognition highlighting my ongoing commitment
            to learning and excellence in web development and technology.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-cyan-300 mb-8">Certificates</h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.div key={index} variants={item}>
                <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-cosmic-blue/10">
                        <Award className="text-cosmic-blue" size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">{cert.title}</h4>
                        <p className="text-gray-400 mb-3">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar size={14} />
                          <span>{cert.date}</span>
                        </div>
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center gap-1 text-cosmic-blue hover:underline text-sm"
                          >
                            View Certificate <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-bold text-cyan-300 mb-8">Achievements</h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={item}>
              <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg mb-2">NSS Executive</h4>
                  <p className="text-gray-400 mb-2">Since September 2022</p>
                  <p className="text-gray-300">Spearheaded social initiatives like blood donation, plantation drives, and women's rights campaigns.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg mb-2">HackOn with Amazon</h4>
                  <p className="text-gray-400 mb-2">May 2024</p>
                  <p className="text-gray-300">Competed in a hackathon focused on data structures and algorithms.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg mb-2">Google Girl Hackathon</h4>
                  <p className="text-gray-400 mb-2">April 2024</p>
                  <p className="text-gray-300">Tackled advanced coding challenges, showcasing algorithmic skills and collaborative development.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-md hover:shadow-cosmic-blue/20">
                <CardContent className="p-6">
                  <h4 className="font-medium text-lg mb-2">Event Management (Pentaomnia)</h4>
                  <p className="text-gray-400 mb-2">December 2023</p>
                  <p className="text-gray-300">Streamlined logistics and led teams to deliver a successful event.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;