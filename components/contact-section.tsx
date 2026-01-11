"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MessageCircle, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactMethods = [
  {
    name: "Email",
    value: "eng.sydur@gmail.com",
    href: "mailto:eng.sydur@gmail.com",
    icon: Mail,
  },
  {
    name: "Location",
    value: "Sylhet, Bangladesh",
    href: "#",
    icon: MapPin,
  },
  {
    name: "WhatsApp",
    value: "+880 1746-077593",
    href: "https://wa.me/8801746077593",
    icon: MessageCircle,
  },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SYDUR98", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/eng-md-sydur-rahaman/", icon: Linkedin },
]

export default function ContactSection() {
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
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 lg:ml-[50%]">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-2xl">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
          <span className="h-px bg-border flex-1" />
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;m always interested in hearing about new projects, creative ideas, or opportunities to collaborate.
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="grid gap-4 mb-10">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.href}
                className={`group glass-card rounded-lg p-5 flex items-center gap-4 hover:bg-card/80 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <method.icon className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium text-sm">{method.name}</p>
                  <p className="text-muted-foreground text-sm">{method.value}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg text-muted-foreground hover:text-primary hover:bg-card/80 transition-all"
                aria-label={link.name}
              >
                <link.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
