# Suvija Technologies - Static Website

A modern, fully static, SEO-optimized multi-page website for Suvija Technologies built with Next.js, Tailwind CSS, and JSON-driven content management.

## Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS v4 for styling
- ✅ JSON-based content management (no backend required)
- ✅ Full SEO optimization (metadata, Open Graph, sitemap, robots.txt)
- ✅ Responsive design (mobile-first)
- ✅ Production-ready code
- ✅ Zero backend dependency
- ✅ Instant deployment to Vercel/Netlify

## Project Structure

\`\`\`
suvija-technologies/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── projects/page.tsx   # Projects page
│   ├── contact/page.tsx    # Contact page
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots.txt
│   └── globals.css         # Global styles
├── components/             # Reusable React components
├── data/                   # JSON content files
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## Getting Started

### Installation

1. Clone the repository or download the project
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Content Management

All website content is managed through JSON files in the `/data` directory:

- **siteMetadata.json** - Site-wide configuration (name, URL, contact info, colors)
- **about.json** - About page content
- **services.json** - Services and features
- **projects.json** - Portfolio projects
- **testimonials.json** - Client testimonials
- **team.json** - Team members

### Updating Content

Simply edit the JSON files to update website content. No code changes needed!

Example: To add a new service, add an entry to `data/services.json`:

\`\`\`json
{
  "id": "new-service",
  "title": "New Service",
  "description": "Service description",
  "icon": "🎯",
  "features": ["Feature 1", "Feature 2"]
}
\`\`\`

## Design System

- **Primary Color**: #0F172A (Dark Blue)
- **Accent Color**: #38BDF8 (Sky Blue)
- **Background**: #F8FAFC (Light Gray)
- **Fonts**: Poppins (headings), Open Sans (body)

## SEO Features

- ✅ Dynamic metadata for each page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Canonical URLs
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Structured data ready

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy to GitHub Pages

1. Update `next.config.js` for static export
2. Run: `npm run build`
3. Deploy the `out` directory

## Customization

### Adding New Pages

1. Create a new folder in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file
3. Add metadata and content
4. Update navigation in `components/Header.tsx`

### Styling

- Global styles: `app/globals.css`
- Component styles: Use Tailwind CSS classes
- Design tokens: Defined in `globals.css` using CSS variables

### Components

All reusable components are in the `components/` directory:
- Header.tsx - Navigation header
- Footer.tsx - Footer with links
- Hero.tsx - Hero section
- Services.tsx - Services showcase
- Projects.tsx - Projects showcase
- Testimonials.tsx - Client testimonials
- ContactForm.tsx - Contact form

## Performance

- Static generation for all pages
- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind CSS
- Minimal JavaScript bundle
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues, please contact: hello@suvija.com

---

Built with ❤️ by Suvija Technologies
