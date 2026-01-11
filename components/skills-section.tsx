"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "Stripe API", level: 75 },
    ],
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 lg:py-32 lg:ml-[50%]">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-2xl">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          <span className="h-px bg-border flex-1" />
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="text-foreground font-semibold text-lg mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${catIndex * 150 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
