import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <p className="text-blue-100 mb-8">Sorry, the page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
