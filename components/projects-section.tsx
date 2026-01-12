"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects" // Import from the new data file

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
        <div className={`flex items-center gap-4 mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <span className="h-px bg-border flex-1" />
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Wrapped Image in Link */}
              <Link href={`/projects/${project.id}`} className="block relative aspect-video rounded-lg overflow-hidden mb-5 border border-border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </Link>

              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  {/* Title as Link */}
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 group/link">
                  View Full Project Details
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}