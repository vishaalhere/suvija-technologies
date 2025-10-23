import type { Metadata } from "next"
import aboutData from "@/data/about.json"
import ValueCard from "@/components/ValueCard"

export const metadata: Metadata = {
  title: aboutData.title,
  description: aboutData.metaDescription,
  openGraph: {
    title: aboutData.title,
    description: aboutData.metaDescription,
  },
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{aboutData.hero.title}</h1>
          <p className="text-xl text-blue-100">{aboutData.hero.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-4">{aboutData.mission.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{aboutData.mission.description}</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-4">{aboutData.vision.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{aboutData.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => (
              <ValueCard key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
