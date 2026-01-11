import { Github, Linkedin } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SYDUR98", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/eng-md-sydur-rahaman/", icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="py-8 lg:ml-[50%] border-t border-border/50">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-2xl">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4 lg:hidden">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs text-center font-mono">
            Designed & Built by{" "}
            <a
              href="https://github.com/SYDUR98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4"
            >
              Md Sydur Rahaman
            </a>
          </p>
          <p className="text-muted-foreground/60 text-xs text-center font-mono">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
