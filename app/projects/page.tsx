"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

// Project Image Slideshow Component
function ProjectImageSlideshow({ images, projectTitle, height = "h-80" }: { images: string[], projectTitle: string, height?: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-slide functionality
  useEffect(() => {
    if (images.length <= 1) return // Don't auto-slide if only one image

    const timer = setInterval(() => {
      // Only auto-slide if not hovered
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }
    }, 3000) 

    return () => clearInterval(timer)
  }, [images.length, isHovered])

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
  }

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
  }

  return (
    <div 
      className={`relative ${height} mb-4 rounded-lg overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ aspectRatio: "16/9" }} // Ensures a wide, full image view
    >
      <Image
        src={images[currentImageIndex]}
        alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
        fill
        className="object-contain bg-black transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 700px"
        priority={currentImageIndex === 0}
      />
      
      {/* Navigation Buttons - Only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}

export default function ProjectsPage() {
const projects = [
    {
        id: 1,
        title: "SoulGift - Gift Shop Platform",
        description: "A website to buy gifts online, built using the PHP Laravel framework. Features product browsing, secure checkout, and user accounts.",
        images: [
            "/images/soulgift_project/1.jpeg",
            "/images/soulgift_project/2.jpeg",
            "/images/soulgift_project/3.jpeg",
            "/images/soulgift_project/4.jpeg",
            "/images/soulgift_project/5.jpeg",
            "/images/soulgift_project/6.jpeg",
            "/images/soulgift_project/7.jpeg",
        ],
        technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
        githubUrl: "https://github.com/manusha0652/ecommerce-project",
        liveUrl: "https://your-ecommerce-demo.com",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates",
        images: [
            "/placeholder.jpg",
            "/placeholder.svg",
            "/images/react.png",
            "/images/node.webp"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        githubUrl: "https://github.com/manusha0652/task-manager",
        liveUrl: "https://your-task-app-demo.com",
        featured: true
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive weather application with location-based forecasts",
        images: [
            "/placeholder.jpg",
            "/images/react.png",
            "/images/tailwind.jpg"
        ],
        technologies: ["React", "API Integration", "CSS3"],
        githubUrl: "https://github.com/manusha0652/weather-app",
        liveUrl: "https://your-weather-demo.com",
        featured: false
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects and skills",
        images: [
            "/placeholder.jpg",
            "/images/nextjs.png",
            "/images/tailwind.jpg",
            "/profile.jpg"
        ],
        technologies: ["Next.js", "Tailwind CSS", "Vercel"],
        githubUrl: "https://github.com/manusha0652/portfolio",
        liveUrl: "https://manusha-portfolio.com",
        featured: false
    },
    {
        id: 5,
        title: "Blog Platform",
        description: "A modern blog platform with admin panel and content management",
        images: [
            "/placeholder.jpg",
            "/images/php.png",
            "/images/laravel.avif",
            "/images/mysql.png"
        ],
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        githubUrl: "https://github.com/manusha0652/blog-platform",
        liveUrl: "https://your-blog-demo.com",
        featured: false
    },
    {
        id: 6,
        title: "Chat Application",
        description: "Real-time chat application with user authentication",
        images: [
            "/placeholder.jpg",
            "/images/node.webp",
            "/images/mongodb.png",
            "/placeholder.svg"
        ],
        technologies: ["Node.js", "Socket.io", "MongoDB", "Express"],
        githubUrl: "https://github.com/manusha0652/chat-app",
        liveUrl: "https://your-chat-demo.com",
        featured: false
    }
]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

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
            <Link href="/projects" className="text-blue-400 font-semibold">
              Projects
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
            My Projects
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            A collection of projects I've worked on, showcasing my skills in web development, 
            software engineering, and problem-solving.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-800 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 hover:scale-105 transform hover:shadow-xl animate-fade-in-up"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardHeader>
                  <ProjectImageSlideshow images={project.images} projectTitle={project.title} />
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-600 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent border-gray-500 text-gray-300 hover:bg-gray-600"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in-up">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300 hover:scale-105 transform hover:shadow-lg animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardHeader>
                  <ProjectImageSlideshow images={project.images} projectTitle={project.title} height="h-40" />
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-600 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-slate-600 text-gray-300 text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 bg-transparent border-gray-500 text-gray-300 hover:bg-gray-600 text-xs"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-xs"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </Button>
                  </div>
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
            Let's Work Together
          </h2>
          <p className="text-blue-200 mb-8 animate-fade-in-up animation-delay-200">
            Interested in collaborating on a project or have a question about my work?
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
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
