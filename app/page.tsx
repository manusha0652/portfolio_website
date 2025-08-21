"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, GraduationCap, School, Download } from "lucide-react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Toast, useToast } from "@/components/ui/toast-notification"
import { ContactForm } from "@/components/ui/contact-form"

export default function Portfolio() {
  const { toast, showToast, hideToast } = useToast()

  const handleDownloadCV = () => {
    // Create a link to download CV
    const link = document.createElement('a')
    link.href = '/cv/Manusha_Ranaweera_CV.pdf' // Make sure to add your CV to public/cv/ folder
    link.download = 'Manusha_Ranaweera_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast('CV download started!', 'success')
  }
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={hideToast} 
        />
      )}
      {/* Navigation */}
      <nav className="bg-slate-800/95 backdrop-blur-sm px-6 py-4 fixed top-0 w-full z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl hover:text-blue-400 transition-colors cursor-pointer">
            <span className="gradient-text">Manusha</span>.dev
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button
              variant="outline"
              size="sm"
              className="glass border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 transform"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Add padding to account for fixed navbar */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="gradient-bg-hero px-6 py-20 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-600"></div>
          <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Manusha</span>
              <br />
              <span className="text-gray-300">Ranaweera</span>
            </h1>
            <div className="relative mb-8">
              <p className="text-gray-400 text-lg max-w-md">
                Computer Science Undergraduate | Passionate about building innovative software solutions
              </p>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            </div>
           
            <div className="mb-8 space-y-4">
               <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <School className="text-blue-400 w-5 h-5" />
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors">Rahula College, Matara</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <GraduationCap className="text-blue-400 w-5 h-5" />
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors">University of Colombo School of Computing</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                className="glass border-gray-600 text-gray-300 hover:bg-white/20 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
                asChild
                >
                <Link href="/certificates">My Certificates</Link>
                </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600 animate-glow hover-lift">
                <Image
                  src="/profile.jpg?height=320&width=320"
                  alt="Manusha Ranaweera"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating icons around profile */}
              <div className="absolute -top-4 -right-4 p-3 bg-blue-500/20 rounded-full backdrop-blur-sm animate-float">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 bg-purple-500/20 rounded-full backdrop-blur-sm animate-float animation-delay-400">
                <Lightbulb className="w-6 h-6 text-purple-400" />
              </div>
              <div className="absolute top-1/2 -left-8 p-3 bg-pink-500/20 rounded-full backdrop-blur-sm animate-float animation-delay-200">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="gradient-bg-skills px-6 py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent"></div>
          <div className="grid grid-cols-8 gap-4 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-blue-200 mb-12 animate-fade-in-up animation-delay-200">
            These are the technologies I worked with in my previous projects
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center items-center">
            {[
              { name: "React", src: "/images/react.png", color: "from-blue-500 to-cyan-500" },
              { name: "Java", src: "/images/java.svg", color: "from-orange-500 to-red-500" },
              { name: "Spring Boot", src: "/images/springboot.jpeg", color: "from-green-500 to-emerald-500" },
              { name: "PHP", src: "/images/php.png", color: "from-purple-500 to-indigo-500" },
              { name: "Next.js", src: "/images/nextjs.png", color: "from-gray-500 to-slate-500" },
              { name: "Tailwind CSS", src: "/images/tailwind.jpg", color: "from-cyan-500 to-blue-500" },
              { name: "Node.js", src: "/images/node.webp", color: "from-green-500 to-lime-500" },
              { name: "MySQL", src: "/images/mysql.png", color: "from-blue-500 to-indigo-500" },
              { name: "PostgreSQL", src: "/images/postgresql.jpg", color: "from-blue-500 to-purple-500" },
              { name: "MongoDB", src: "/images/mongodb.png", color: "from-green-500 to-teal-500" },
              { name: "Git", src: "/images/git.png", color: "from-orange-500 to-red-500" },
              { name: "Laravel", src: "/images/laravel.avif", color: "from-red-500 to-pink-500" },
            ].map((skill, index) => (
              <Card 
                key={skill.name} 
                className="tech-card bg-white/10 border-white/20 backdrop-blur-sm hover-lift animate-fade-in-up group relative overflow-hidden w-32 h-32"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                  <div className="relative mb-2 w-12 h-12 flex items-center justify-center">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="transition-all duration-300 group-hover:scale-110 object-contain"
                      style={{ width: '48px', height: '48px' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  <span className="text-white font-medium text-xs group-hover:text-blue-200 transition-colors leading-tight">
                    {skill.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-slate-800 px-6 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in-up">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="glass p-8 rounded-2xl">
                <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
                  <div className="relative">
                    <p className="relative z-10">
                      I'm a dedicated <span className="text-blue-400 font-semibold">Computer Science undergraduate</span> with a passion for creating innovative software
                      solutions. My journey in technology is driven by curiosity and a desire to solve real-world problems
                      through code.
                    </p>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  <p>
                    I specialize in <span className="text-purple-400 font-semibold">web development technologies</span> and am constantly learning new frameworks and
                    tools to enhance my skillset. I believe in writing clean, efficient code that makes a difference.
                  </p>
                  <div className="relative">
                    <p>
                      When I'm not coding, I love discovering the hidden gems of our beautiful country, exploring scenic landscapes, unique destinations, and immersing myself in the rich culture and natural beauty that surrounds us.
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl text-center hover-lift">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="glass p-6 rounded-xl text-center hover-lift animation-delay-200">
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <div className="text-gray-300">Years Learning</div>
                </div>
                <div className="glass p-6 rounded-xl text-center hover-lift animation-delay-400">
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-gray-300">Technologies</div>
                </div>
                <div className="glass p-6 rounded-xl text-center hover-lift animation-delay-600">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-300">Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="gradient-bg-skills px-6 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float animation-delay-400"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-blue-200 mb-12 animate-fade-in-up animation-delay-200">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
          
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-6 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="https://github.com/manusha0652"
              className="group p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/manusha-ranaweera-200b06254/"
              className="group p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:shadow-blue-500/25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </a>
            <a
              href="mailto:kawshanmanusha7@gmail.com"
              className="group p-3 bg-red-600/20 rounded-full hover:bg-red-600/30 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:shadow-red-500/25"
            >
              <FaEnvelope className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
            </a>
          </div>
          <div className="text-center">
            <div className="text-gray-400 text-sm mb-2">
              © {new Date().getFullYear()} Manusha Ranaweera. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs">
              Built with ❤️ using Next.js and Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
