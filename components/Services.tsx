import servicesData from "@/data/services.json"
import ServiceCard from "./ServiceCard"
import Link from "next/link"

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
