interface ValueCardProps {
  title: string
  description: string
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
