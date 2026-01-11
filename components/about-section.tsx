"use client"

import { useEffect, useRef, useState } from "react"

const technologies = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Firebase",
  "Git",
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 lg:ml-[50%]">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-2xl">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl font-bold text-foreground">About Me</h2>
          <span className="h-px bg-border flex-1" />
        </div>

        <div
          className={`space-y-5 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed">
            Hello! I&apos;m Sydur, a passionate Frontend Developer and Junior Instructor based in Sylhet, Bangladesh. I
            enjoy creating things that live on the internet, whether that be websites, applications, or anything in
            between.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            My current focus is on building accessible, human-centered products using the{" "}
            <span className="text-primary">MERN stack</span>. I&apos;m working on exciting projects like{" "}
            <a href="#projects" className="text-primary hover:underline underline-offset-4">
              ClubSphere
            </a>{" "}
            and{" "}
            <a href="#projects" className="text-primary hover:underline underline-offset-4">
              RentWheels
            </a>
            , while also guiding students as the <span className="text-primary">Programming Club President</span>.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I believe in learning by doing and sharing knowledge with others. My goal is to use
            technology to solve real-world problems and make a positive impact.
          </p>

          {/* Technologies */}
          <div className="pt-4">
            <p className="text-foreground font-medium mb-4">Technologies I work with:</p>
            <ul className="grid grid-cols-2 gap-2">
              {technologies.map((tech, index) => (
                <li
                  key={tech}
                  className={`flex items-center gap-2 text-sm text-muted-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
