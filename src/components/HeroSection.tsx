import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container px-4 mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-cosmic-blue font-medium tracking-wider">Hi there, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6 text-glow"
          >
            Rishi Raj 
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-3xl font-display text-gray-300 mb-8 h-20"
          >
            <TypeAnimation
              sequence={[
                'Computer Science Student',
                1000,
                'Frontend Developer',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
              className="text-cosmic-purple"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-gray-400 max-w-xl mb-10"
          >
            Computer Science student with strong analytical skills and
            experience in web development, and problem-solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              className="bg-cosmic-blue hover:bg-cosmic-blue/80 text-white px-8 py-6"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            
            <Button
              variant="outline"
              className="text-white border-cosmic-purple hover:bg-cosmic-purple/10 px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-cosmic-blue animate-bounce"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDownIcon size={24} />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;