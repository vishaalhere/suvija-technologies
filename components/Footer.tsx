import Link from "next/link"
import siteMetadata from "@/data/siteMetadata.json"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteMetadata.siteName}</h3>
            <p className="text-blue-100">{siteMetadata.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-accent transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-accent transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-blue-100 hover:text-accent transition">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-accent transition">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-accent transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-accent transition">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-accent transition">
                  E-Commerce
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${siteMetadata.email}`} className="text-blue-100 hover:text-accent transition">
                  {siteMetadata.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteMetadata.phone}`} className="text-blue-100 hover:text-accent transition">
                  {siteMetadata.phone}
                </a>
              </li>
              <li>
                <p className="text-blue-100">{siteMetadata.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-blue-800 pt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-blue-100">
            &copy; {currentYear} {siteMetadata.siteName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {Object.entries(siteMetadata.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center hover:bg-blue-300 transition"
              >
                {platform.charAt(0).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
