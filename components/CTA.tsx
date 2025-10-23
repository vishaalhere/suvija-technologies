import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's work together to create something amazing. Get in touch with our team today.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-300 transition"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  )
}
