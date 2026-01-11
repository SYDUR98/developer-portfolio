"use client"

import Image from "next/image"
import { Github, Linkedin, ChevronDown } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SYDUR98", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/eng-md-sydur-rahaman/", icon: Linkedin },
]

export default function HeroSplit() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="lg:grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Fixed Info Panel */}
        <div className="lg:fixed lg:w-1/2 lg:h-screen flex flex-col justify-between p-8 lg:p-12 xl:p-16 pt-28 lg:pt-12">
          <div className="flex flex-col justify-center flex-1">
            {/* Profile Image with unique styling */}
            <div className="relative mb-8 animate-slide-up">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-2 border-border relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/sydur-profile.jpg"
                  alt="Md Sydur Rahaman"
                  width={160}
                  height={160}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-primary/20 translate-x-2 translate-y-2 -rotate-3" />
            </div>

            {/* Name & Title */}
            <div className="space-y-4 animate-slide-up stagger-1">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance">
                Md Sydur Rahaman
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Junior Instructor (Computer Science & Technology)
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed">
                Frontend Web Developer & Educator | React & JavaScript Specialist | Building accessible, pixel-perfect
                digital experiences for the web.
              </p>
            </div>

            {/* Quick Nav - Desktop */}
            <nav className="hidden lg:block mt-12 animate-slide-up stagger-2">
              <ul className="space-y-3">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                      <span className="text-xs font-medium uppercase tracking-widest">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links - Bottom Left */}
          <div className="flex items-center gap-5 mt-8 lg:mt-0 animate-slide-up stagger-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={22} />
              </a>
            ))}
            <span className="h-px w-24 bg-border" />
          </div>
        </div>

        {/* Right Side - Scrollable Content Placeholder on Mobile */}
        <div className="lg:col-start-2 h-screen flex items-center justify-center p-8 lg:hidden">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
