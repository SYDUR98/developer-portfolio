"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Download } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Sydur
              <span className="text-primary">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
            
            {/* Resume Download Button - Assignment Requirement */}
            <a
              href="/resume.pdf" 
              download="Md_Sydur_Rahaman_Resume.pdf"
              className="ml-4 flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            >
              <Download size={16} />
              Resume
            </a>

            {/* GitHub Icon Link */}
            <a
              href="https://github.com/SYDUR98" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2.5 text-muted-foreground hover:text-primary border border-border rounded-full hover:bg-muted transition-all"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-in slide-in-from-top duration-300">
            <div className="flex flex-col py-6 px-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                    activeSection === link.href.replace("#", "") ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-base font-medium">{link.name}</span>
                </Link>
              ))}
              
              <hr className="my-2 border-border" />

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold bg-primary text-primary-foreground rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <Download size={18} />
                Download Resume
              </a>
              
              <a
                href="https://github.com/SYDUR98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium border border-border text-foreground rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <Github size={18} />
                GitHub Profile
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}