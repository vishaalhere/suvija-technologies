import type { Metadata } from "next"
import projectsData from "@/data/projects.json"
import ProjectCard from "@/components/ProjectCard"

export const metadata: Metadata = {
  title: projectsData.title,
  description: projectsData.metaDescription,
  openGraph: {
    title: projectsData.title,
    description: projectsData.metaDescription,
  },
}

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{projectsData.title}</h1>
          <p className="text-xl text-blue-100">{projectsData.description}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
