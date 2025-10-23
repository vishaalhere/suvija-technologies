interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    category: string
    image: string
    technologies: string[]
    results: {
      [key: string]: string
    }
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48 bg-gray-200">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="inline-block bg-accent text-white text-sm px-3 py-1 rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Results:</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {Object.entries(project.results).map(([key, value]) => (
              <div key={key}>
                <p className="text-accent font-bold">{value}</p>
                <p className="text-xs text-gray-600 capitalize">{key}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
