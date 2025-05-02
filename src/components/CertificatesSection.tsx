import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    title: string;
    image: string;
  }>(null);

  // Certificates data based on folder structure
  const certificates = [
    { title: "Backend Development", image: "/certificates/BACKEND.png" },
    { title: "C++ Programming", image: "/certificates/C++.jpeg" },
    { title: "DevOps", image: "/certificates/DEVOPS.png" },
    { title: "Data Structures and Algorithms", image: "/certificates/DSA.png" },
    { title: "Frontend Development", image: "/certificates/FRONTEND.png" },
    { title: "PHP Programming", image: "/certificates/PHP.png" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleOpenCertificate = (cert: { title: string; image: string }) => {
    setSelectedCertificate(cert);
  };

  return (
    <>
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
              <span className="text-cosmic-blue">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my certifications showcasing my skills and expertise.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative cursor-pointer"
                onClick={() => handleOpenCertificate(cert)}
              >
                <div className="rounded-lg overflow-hidden border-2 border-cosmic-blue/20 hover:border-cosmic-blue/50 shadow-lg transition-all duration-300 bg-space-light">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/certificate-placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-cosmic-blue/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ZoomIn className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-lg line-clamp-1 group-hover:text-cosmic-blue transition-colors duration-300">
                      {cert.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Dialog
        open={selectedCertificate !== null}
        onOpenChange={(open) => !open && setSelectedCertificate(null)}
      >
        <DialogContent className="bg-space-darker/95 border-cosmic-blue/30 max-w-7xl w-[95vw] h-[90vh] p-6 [&>button]:hidden">
          <div className="absolute top-4 right-4">
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6 text-gray-400 hover:text-white" />
              </Button>
            </DialogClose>
          </div>
          <div className="mt-2 md:flex md:items-start md:gap-6 h-full overflow-hidden">
            <div className="flex-1 h-full flex flex-col">
              {selectedCertificate?.image && (
                <div className="relative flex-1 overflow-auto rounded-lg border border-cosmic-blue/20 bg-black/20">
                  <img
                    src={selectedCertificate.image}
                    alt={`${selectedCertificate.title} Certificate`}
                    className="w-full h-auto object-contain max-h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/certificate-placeholder.jpg';
                    }}
                  />
                </div>
              )}
            </div>
            <div className="md:w-72 mt-4 md:mt-0">
              <div className="bg-space-light p-4 rounded-lg border border-cosmic-blue/20">
                <h3 className="text-xl font-bold font-display text-cosmic-blue mb-2">
                  {selectedCertificate?.title}
                </h3>
                <DialogClose asChild>
                  <Button className="w-full bg-cosmic-blue hover:bg-cosmic-blue/80 text-white">
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificatesSection;