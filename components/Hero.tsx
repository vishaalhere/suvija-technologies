import Link from "next/link"
import siteMetadata from "@/data/siteMetadata.json"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-white py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">{siteMetadata.tagline}</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">{siteMetadata.description}</p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/projects"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-300 transition"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
