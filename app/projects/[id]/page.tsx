import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
// CORRECT IMPORT: Pointing to your new data file
import { projects } from "../../../data/projects"

/**
 * generateStaticParams creates routes at build time.
 */
export async function generateStaticParams() {
  // Defensive check to prevent build crash
  if (!projects || !Array.isArray(projects)) {
    return [];
  }

  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Await params for Next.js 15+ compatibility
  const { id } = await params;
  
  // Basic validation to ensure projects is available
  if (!projects) {
    notFound();
  }

  // Find project by matching the ID
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background gradient-radial">
      <div className="container mx-auto px-6 lg:px-12 pt-28 pb-16 max-w-4xl">
        {/* Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-card transition-colors"
            >
              <Github size={16} />
              Client Code
            </a>
            {project.githubServerUrl && (
              <a
                href={project.githubServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-card transition-colors"
              >
                <Github size={16} />
                Server Code
              </a>
            )}
          </div>
        </div>

        {/* Project Image Display */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-border mb-12">
          <Image 
            src={project.image || "/placeholder.svg"} 
            alt={project.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* Content Section */}
        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              About This Project
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/30 border border-border rounded-lg text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Challenges & Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Future Improvements
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.futureImprovements}</p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to All Projects</span>
          </Link>
        </div>
      </div>
    </main>
  )
}