import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

const SectionHeader = ({ title, highlight, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 pointer-events-none -z-10 opacity-50">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-cosmic-blue/20 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cosmic-blue/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cosmic-blue/10 animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-cosmic-purple/10 animate-scale-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 w-2 h-2 bg-cosmic-blue rounded-full animate-orbit opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-cosmic-purple rounded-full animate-orbit opacity-70" style={{ animationDelay: '2s', animationDuration: '15s' }}></div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 relative inline-block">
        {title} <span className="text-cosmic-blue">{highlight}</span>
        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic-blue to-transparent"></div>
      </h2>
      
      <div className="w-24 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto mb-8 rounded-full"></div>
      
      {subtitle && (
        <p className="text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;