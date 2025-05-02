import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or reach out via email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      value: "rishiraj96315@gmail.com",
      href: "mailto:rishiraj96315@gmail.com"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+91-6200512589",
      href: "tel:+916200512589"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "Patna, Bihar, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-space-darker">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-space-dark to-transparent z-10"></div>
      
      <div className="container px-4 mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Let's <span className="text-cosmic-blue">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a web development project in mind or interested in my skills? I'd love to hear from you!
            Feel free to reach out through the form or via direct contact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="bg-space-light border-cosmic-blue/20 hover:border-cosmic-blue/50 transition-colors"
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cosmic-blue/10 text-cosmic-blue">
                    <item.icon size={24} />
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-gray-300 hover:text-cosmic-blue transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="pt-6">
              <h3 className="font-medium text-lg mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Raj2002Rishi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-space-light text-gray-300 hover:text-cosmic-blue hover:bg-space-light/80 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/rishi-raj-10541524b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-space-light text-gray-300 hover:text-cosmic-blue hover:bg-space-light/80 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="bg-space-light border-cosmic-blue/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-space-darker border-gray-700 focus:border-cosmic-blue"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-space-darker border-gray-700 focus:border-cosmic-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-space-darker border-gray-700 focus:border-cosmic-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your data analysis needs, questions, or just say hello!"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-space-darker border-gray-700 focus:border-cosmic-blue resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-blue text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <SendIcon className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;