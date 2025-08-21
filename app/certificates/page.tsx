"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, Calendar, Download } from "lucide-react"

export default function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      description: "Professional certification for designing distributed systems on AWS",
      image: "/placeholder.jpg",
      issuer: "Amazon Web Services",
      date: "2024",
      skills: ["AWS", "Cloud Architecture", "Solutions Design", "EC2"],
      credentialUrl: "https://aws.amazon.com/certification/",
      featured: true
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description: "Comprehensive certification covering modern web development technologies",
      image: "/placeholder.jpg",
      issuer: "FreeCodeCamp",
      date: "2023",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      credentialUrl: "https://freecodecamp.org/certification/",
      featured: true
    },
    {
      id: 3,
      title: "Java Programming Masterclass",
      description: "Advanced Java programming concepts and enterprise development",
      image: "/placeholder.jpg",
      issuer: "Oracle",
      date: "2023",
      skills: ["Java", "Spring Boot", "OOP", "Enterprise Development"],
      credentialUrl: "https://oracle.com/java/certification/",
      featured: false
    },
    {
      id: 4,
      title: "React Developer Certificate",
      description: "Professional certification for React.js and modern frontend development",
      image: "/placeholder.jpg",
      issuer: "Meta",
      date: "2023",
      skills: ["React", "JavaScript", "Next.js", "Frontend Development"],
      credentialUrl: "https://developers.facebook.com/",
      featured: false
    },
    {
      id: 5,
      title: "Database Management Systems",
      description: "Comprehensive understanding of database design and management",
      image: "/placeholder.jpg",
      issuer: "Stanford University",
      date: "2022",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"],
      credentialUrl: "https://stanford.edu/",
      featured: false
    },
    {
      id: 6,
      title: "Modern Web Technologies",
      description: "Latest trends and technologies in web development",
      image: "/placeholder.jpg",
      issuer: "Coursera",
      date: "2022",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      credentialUrl: "https://coursera.org/",
      featured: false
    }
  ]

  const featuredCertificates = certificates.filter(cert => cert.featured)
  const otherCertificates = certificates.filter(cert => !cert.featured)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800/95 backdrop-blur-sm px-6 py-4 fixed top-0 w-full z-50 border-b border-slate-700/50 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl hover:text-blue-400 transition-colors duration-300">
            <span className="gradient-text">Manusha</span>.dev
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/certificates" className="text-blue-400 font-semibold relative">
              Certificates
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="glass border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 transform"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv/Manusha_Ranaweera_CV.pdf';
                link.download = 'Manusha_Ranaweera_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
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
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 gap-6 h-full">
            {[...Array(80)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse" style={{animationDelay: `${i * 75}ms`}}></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-yellow-500/20 rounded-full animate-float">
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            My <span className="gradient-text">Certificates</span>
          </h1>
          <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning in technology and software development.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <div className="text-gray-400 text-sm">Certificates Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4+</div>
              <div className="text-gray-400 text-sm">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Certificates */}
      <section className="bg-slate-800 px-6 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
            Featured <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 animate-fade-in-up animation-delay-200">
            My most significant professional certifications and achievements
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredCertificates.map((certificate, index) => (
              <Card 
                key={certificate.id} 
                className="glass border-slate-600/50 hover-lift animate-fade-in-up group relative overflow-hidden"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Award ribbon */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Featured
                  </div>
                </div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardTitle className="text-white text-xl flex items-center gap-2 group-hover:text-yellow-300 transition-colors">
                    <Award className="w-5 h-5 text-yellow-400" />
                    {certificate.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {certificate.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {certificate.date}
                    </span>
                    <span>{certificate.issuer}</span>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-yellow-600/20 text-yellow-300 border border-yellow-500/30 hover:bg-yellow-600/30 transition-colors"
                        style={{animationDelay: `${skillIndex * 100}ms`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 flex items-center gap-2 transition-all duration-300 hover:scale-105 transform"
                    asChild
                  >
                    <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Certificates */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in-up">
            Other Certificates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCertificates.map((certificate, index) => (
              <Card 
                key={certificate.id} 
                className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 transform hover:shadow-lg animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardHeader>
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    {certificate.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {certificate.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                    <Calendar className="w-3 h-3" />
                    <span>{certificate.date}</span>
                    <span>•</span>
                    <span>{certificate.issuer}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-600 text-gray-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-slate-600 text-gray-300 text-xs">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700 flex items-center gap-1 text-xs"
                    asChild
                  >
                    <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3" />
                      View Credential
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">
            Continuous Learning
          </h2>
          <p className="text-blue-200 mb-8 animate-fade-in-up animation-delay-200">
            I'm always pursuing new certifications and expanding my skill set. 
            Let's discuss how my expertise can benefit your projects!
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              className="bg-white text-blue-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform"
              asChild
            >
              <Link href="/#contact">Get In Touch</Link>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 transform"
              asChild
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
