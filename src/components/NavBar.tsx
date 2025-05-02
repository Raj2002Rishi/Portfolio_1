import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RocketIcon, Menu, X, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' }, // Added certificates navigation item
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-space-dark/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <RocketIcon className="text-cosmic-blue" />
            <span className="font-display font-bold text-xl hidden sm:inline-block">
              <span className="text-cosmic-blue">&lt;</span>
              R..Raj
              <span className="text-cosmic-blue">/&gt;</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cosmic-blue transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            
            <a 
              href="\resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button variant="outline" className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10">
                Resume
              </Button>
            </a>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-space-darker z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <a href="#" className="flex items-center gap-2">
                  <RocketIcon className="text-cosmic-blue" />
                  <span className="font-display font-bold text-xl">
                    <span className="text-cosmic-blue">&lt;</span>
                    Rishi Raj
                    <span className="text-cosmic-blue">/&gt;</span>
                  </span>
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>
              
              <div className="flex flex-col p-4 gap-6">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="text-xl text-gray-300 hover:text-cosmic-blue transition-colors py-2 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                <a 
                  href="https://www.linkedin.com/in/rudhra-pratap-singh-69069624b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button className="w-full bg-cosmic-blue hover:bg-cosmic-blue/80 text-white">
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
