# Home Renovations Website

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS for showcasing home renovation services.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── portfolio/page.tsx # Portfolio page
│   └── contact/page.tsx   # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Layout.tsx         # Optional layout helper
│   ├── ServiceCard.tsx    # Service display component
│   └── ProjectGallery.tsx # Portfolio project gallery
├── content/               # Structured data files
│   ├── services.json      # Service offerings data
│   └── portfolio.json     # Portfolio projects data
└── utils/                 # Helper functions
    ├── formatters.ts      # Date and text formatting utilities
    └── index.ts          # Utility exports
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Formatting:** Prettier
- **Images:** Next.js Image component for optimization

## 🖼️ Adding Images

Add your project images to the `public/images/` directory:

### Service Images
- `kitchen-remodel.jpg`
- `bathroom-renovation.jpg`
- `home-addition.jpg`
- `flooring.jpg`
- `exterior-remodel.jpg`

### Portfolio Before/After Images
- `kitchen-before-1.jpg` / `kitchen-after-1.jpg`
- `bathroom-before-1.jpg` / `bathroom-after-1.jpg`
- `addition-before-1.jpg` / `addition-after-1.jpg`
- `flooring-before-1.jpg` / `flooring-after-1.jpg`
- `exterior-before-1.jpg` / `exterior-after-1.jpg`
- `master-before-1.jpg` / `master-after-1.jpg`

## 📊 Content Management

### Services Data
Edit `src/content/services.json` to update:
- Service titles and descriptions
- Feature lists
- Image paths

### Portfolio Data  
Edit `src/content/portfolio.json` to update:
- Project information
- Before/after image paths
- Project categories and locations

## 🛠️ Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `src/components/Header.tsx`

### Adding New Components
1. Create component files in `src/components/`
2. Use TypeScript interfaces for props
3. Import and use in your pages

### Styling
- Uses Tailwind CSS utility classes
- Global styles in `src/app/globals.css`
- Component-level styling with className

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the application: `npm run build`
2. Deploy the `.next` folder and `public` directory
3. Set up environment variables if needed

## 📋 Next Steps

After setting up the base framework:

1. **Add Real Content:** Replace placeholder content with actual services and projects
2. **Implement Contact Form:** Add form handling for the contact page  
3. **SEO Optimization:** Add meta tags, structured data, and sitemaps
4. **Performance:** Optimize images and implement loading strategies
5. **Analytics:** Add Google Analytics or other tracking
6. **CMS Integration:** Consider headless CMS for content management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
