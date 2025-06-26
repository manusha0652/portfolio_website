"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, Calendar } from "lucide-react"

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
      <nav className="bg-slate-800 px-6 py-4 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl hover:text-blue-400 transition-colors duration-300">
            Manusha.dev
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform">
              Home
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform">
              About Me
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform">
              Projects
            </Link>
            <Link href="/certificates" className="text-blue-400 font-semibold">
              Certificates
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform">
              Contact
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 transition-all duration-300 hover:scale-105 transform hover:border-blue-400"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            My Certificates
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Professional certifications and courses that validate my skills and commitment to 
            continuous learning in technology and software development.
          </p>
        </div>
      </section>

      {/* Featured Certificates */}
      <section className="bg-slate-800 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in-up">
            Featured Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredCertificates.map((certificate, index) => (
              <Card 
                key={certificate.id} 
                className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 hover:scale-105 transform hover:shadow-xl animate-fade-in-up"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardHeader>
                  <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-white text-xl flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    {certificate.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {certificate.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {certificate.date}
                    </span>
                    <span>{certificate.issuer}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-600 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
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
