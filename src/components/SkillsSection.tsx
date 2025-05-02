import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const SkillsSection = () => {
  // Updated with more reliable icon sources for problematic icons
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming & Development",
      skills: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", color: "#00599C" },
        { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC", color: "#A8B9CC" },
        { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
        { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6", color: "#1572B6" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
      ]
    },
    
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-space-darker">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-space-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-dark to-transparent z-10"></div>
      
      {/* Content container */}
      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-cosmic-blue">Technical</span> Expertise
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My extensive toolkit of programming languages,  and professional skills
            empowers me to deliver effective solutions across various domains.
          </p>
        </motion.div>

        {/* Skill categories */}
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20 last:mb-0">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-display font-bold mb-10 text-cosmic-blue text-center"
            >
              {category.name}
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={item}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="relative group">
                    {/* Card with icon */}
                    <div className="w-20 h-20 md:w-24 md:h-24 p-4 bg-space-light rounded-xl shadow-lg 
                                   flex items-center justify-center border border-gray-700/50 
                                   group-hover:border-cosmic-blue/50 group-hover:shadow-cosmic-blue/20
                                   transition-all duration-300">
                      <div className="w-full h-full relative flex items-center justify-center">
                        {/* Main icon */}
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                          style={{
                            filter: skill.name === "Tableau" ? "brightness(0) invert(1)" : "none"
                          }}
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<div class="text-2xl font-bold text-${skill.color}">${skill.name.charAt(0)}</div>`;
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-300"
                      style={{ backgroundColor: `${skill.color}30` }}
                    ></div>
                  </div>
                  
                  {/* Skill name */}
                  <div className="mt-4 text-center">
                    <h4 className="text-gray-300 font-medium group-hover:text-cosmic-blue transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;