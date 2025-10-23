import projectsData from "@/data/projects.json"
import ProjectCard from "./ProjectCard"
import Link from "next/link"

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Showcase of our recent work and success stories</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
