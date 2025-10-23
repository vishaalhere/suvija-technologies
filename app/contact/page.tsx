import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import siteMetadata from "@/data/siteMetadata.json"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Suvija Technologies. We'd love to hear from you.",
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with Suvija Technologies.",
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100">We'd love to hear from you. Let's create something amazing together.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                  <a href={`mailto:${siteMetadata.email}`} className="text-gray-700 hover:text-accent transition">
                    {siteMetadata.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                  <a href={`tel:${siteMetadata.phone}`} className="text-gray-700 hover:text-accent transition">
                    {siteMetadata.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
                  <p className="text-gray-700">{siteMetadata.address}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {Object.entries(siteMetadata.socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-primary transition"
                      >
                        {platform.charAt(0).toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
