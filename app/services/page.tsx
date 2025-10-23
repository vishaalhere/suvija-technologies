import type { Metadata } from "next"
import servicesData from "@/data/services.json"
import ServiceCard from "@/components/ServiceCard"

export const metadata: Metadata = {
  title: servicesData.title,
  description: servicesData.metaDescription,
  openGraph: {
    title: servicesData.title,
    description: servicesData.metaDescription,
  },
}

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{servicesData.title}</h1>
          <p className="text-xl text-blue-100">{servicesData.description}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
