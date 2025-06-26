import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail, Code, Lightbulb, Users, GraduationCap, School } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Manusha.dev</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About Me
            </a>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-400 mb-4">
              Manusha
              <br />
              <span className="text-gray-500">Ranaweera</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Computer Science Undergraduate | Passionate about building innovative software solutions
            </p>
           
            <div className="mb-8 space-y-4">
               <div className="flex items-center gap-2">
                <School className="text-blue-400 w-5 h-5" />
                <span className="text-gray-200">Rahula College, Matara</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-blue-400 w-5 h-5" />
                <span className="text-gray-200">University of Colombo School of Computing</span>
              </div>
            
            </div>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
                <Button
                variant="outline"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                asChild
                >
                <Link href="/certificates">My Certificates</Link>
                </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-600">
              <Image
                src="/profile.jpg?height=320&width=320"
                alt="Manusha Ranaweera"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-blue-200 mb-12">These are the technologies I worked with in my previous projects</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center items-center">
            {[
              { name: "React", src: "/images/react.png" },
              { name: "Java", src: "/images/java.svg" },
              { name: "Spring Boot", src: "/images/springboot.jpeg" },
              { name: "PHP", src: "/images/php.png" },
              { name: "Next.js", src: "/images/nextjs.png" },
              { name: "Tailwind CSS", src: "/images/tailwind.jpg" },
              { name: "Node.js", src: "/images/node.webp" },
              { name: "MySQL", src: "/images/mysql.png" },
              { name: "PostgreSQL", src: "/images/postgresql.jpg" },
              { name: "MongoDB", src: "/images/mongodb.png" },
              { name: "Git", src: "/images/git.png" },
              { name: "Laravel", src: "/images/laravel.avif" },
            ].map((skill) => (
              <Card key={skill.name} className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <Image
                src={skill.src}
                alt={skill.name}
                width={80}
                height={80}
                className="mb-2"
                />
              </CardContent>
              </Card>
            ))}
            </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-slate-800 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">About Me</h2>
          
            <div className="text-gray-300 space-y-4">
              <p>
                I'm a dedicated Computer Science undergraduate with a passion for creating innovative software
                solutions. My journey in technology is driven by curiosity and a desire to solve real-world problems
                through code. I specialize in web development technologies and am constantly learning new frameworks and
                tools to enhance my skillset.
              </p>
                <p>
                When I'm not coding, I love discovering the hidden gems of our beautiful country exploring scenic landscapes, unique destinations, and immersing myself in the rich culture and natural beauty that surrounds us.
                </p>
            </div>
            
         
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-blue-200 mb-12">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
          <Card className="bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  
                  <Input id="email" type="email" placeholder="Your email" className="w-full" />
                </div>
                <div>
                  
                
                  <Textarea id="message" placeholder="Your message" rows={5} className="w-full" />
                </div>
                <Button className="w-full bg-slate-800 hover:bg-slate-900">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/manusha0652"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manusha-ranaweera-200b06254/"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            
            <a
              href="mailto:kawshanmanusha7@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 transform"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
            <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Manusha Ranaweera. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  )
}
