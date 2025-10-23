interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: string
    features: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
