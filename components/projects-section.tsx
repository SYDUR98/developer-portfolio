"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export const projects = [
  {
    id: "clubsphere",
    title: "ClubSphere",
    shortDescription: "A full-stack MERN application for club membership and event management.",
    description:
      "ClubSphere is a comprehensive membership & event management system designed to manage club memberships, events, and role-based user experiences.",
    image: "/clubsphere-screenshot.jpg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS", "Stripe API"],
    liveUrl: "https://club-sphere-app.web.app/",
    githubUrl: "https://github.com/SYDUR98/clubsphere-client",
    githubServerUrl: "https://github.com/SYDUR98/clubsphere-server",
    challenges:
      "Implementing role-based access control for Admin, Club Manager, and Member roles was complex. I solved this by creating a middleware-based authentication system and using React Context for client-side role management.",
    futureImprovements:
      "Planning to add email notifications for events, analytics dashboard for club managers, and mobile app integration.",
    featured: true,
  },
  {
    id: "rentwheels",
    title: "RentWheels",
    shortDescription: "A MERN-based online car rental platform with booking management.",
    description:
      "RentWheels is a comprehensive car rental platform that allows users to browse and rent cars online with full CRUD operations.",
    image: "/rentwheels-screenshot.jpg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    liveUrl: "https://rent-wheels-app.web.app/",
    githubUrl: "https://github.com/SYDUR98/rent-wheels-client",
    githubServerUrl: "https://github.com/SYDUR98/Rent-Wheels-server",
    challenges:
      "Building a real-time booking system with status updates and handling concurrent bookings was challenging.",
    futureImprovements: "Adding GPS tracking for vehicles, implementing a review and rating system.",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    shortDescription: "A modern, responsive portfolio website showcasing my work and skills.",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, dark theme, and responsive design.",
    image: "/modern-developer-portfolio-website-dark-theme.jpg",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/SYDUR98",
    challenges: "Creating smooth scroll animations and ensuring consistent design across all screen sizes.",
    futureImprovements: "Adding a blog section and implementing a contact form with email integration.",
    featured: true,
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32 lg:ml-[50%]">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-2xl">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <span className="h-px bg-border flex-1" />
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-5 border border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.shortDescription}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 group/link"
                >
                  View Details
                  <ArrowUpRight
                    size={16}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
