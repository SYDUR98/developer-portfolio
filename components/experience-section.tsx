"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Junior Instructor",
    company: "Sylhet Polytechnic Institute",
    url: "https://sylhet.polytech.gov.bd/site/view/teacher_list_faculty/Computer_Science_and_Technology",
    period: "Present",
    description:
      "Teaching frontend development, guiding students in client-side projects, and preparing project-based learning materials for the programming curriculum.",
    skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development"],
  },
  {
    title: "President, Programming Club",
    company: "Sylhet Polytechnic Institute",
    url: "https://sylhet.polytech.gov.bd/site/view/teacher_list_faculty/Computer_Science_and_Technology",
    period: "Present",
    description:
      "Leading the programming club, organizing coding events and workshops, mentoring students in web development projects, and fostering a collaborative learning environment.",
    skills: ["Leadership", "Mentoring", "Event Organization"],
  },
]

const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "Bangladesh University",
  status: "Jan 2019 - Dec 2022",
}

export default function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="py-24 lg:py-32 lg:ml-[50%]">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-2xl">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <span className="h-px bg-border flex-1" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group glass-card rounded-lg p-6 hover:bg-card/80 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm hover:underline underline-offset-4"
                  >
                    {exp.company}
                    <ExternalLink size={12} />
                  </a>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className={`mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Education
          </h3>
          <div className="glass-card rounded-lg p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-foreground font-medium">{education.degree}</h4>
                <p className="text-muted-foreground text-sm">{education.school}</p>
              </div>
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                {education.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
