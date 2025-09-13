# North Point Publishing Catalog Directory Website - PRD

## Project Overview

**Project Name:** North Point Publishing Catalog Directory  
**Technology Stack:** Astro.js + GitHub Pages  
**Target Deployment:** GitHub Pages (Static Site)  
**Data Source:** JSON files  
**Timeline:** 2-3 weeks development

### Project Description
Create a retro-styled catalog directory website showcasing North Point Publishing's pulp fiction collection from the 1950s-1980s. The site should feel like browsing through a vintage publisher's catalog with modern web functionality.

## Technical Requirements

### Core Technologies
- **Framework:** Astro.js (latest stable)
- **Styling:** CSS/SCSS with retro 1970s-80s design aesthetic
- **Deployment:** GitHub Pages
- **Data:** Static JSON files
- **Build Tool:** Vite (built into Astro)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No IE support required

## Features & Functionality

### 1. Homepage/Index
- Grid layout displaying all book titles as cards
- Each card shows: cover image, title, author, genre badge
- Responsive grid (1-4 columns based on screen size)
- Search bar at top
- Filter controls (Genre/Sub-genre, Author)
- Sort options (Title A-Z, Author, Publication Order)

### 2. Book Detail Pages
- Dynamic route: `/books/[book-slug]`
- Full book cover image
- Complete book details (title, author, description, genre, publication info)
- "Back to catalog" navigation
- Related books section
- Share functionality (optional)

### 3. Search & Filter System
- Real-time search by title, author, or description keywords
- Genre/Sub-genre dropdown filters
- Author dropdown filter
- Multiple filters can be active simultaneously
- URL state preservation for bookmarkable searches
- Clear all filters button

### 4. Navigation
- Header with North Point Publishing branding
- Search bar always visible
- Genre navigation menu
- Footer with company information

## Data Structure

### JSON Schema

#### Main Catalog File: `src/data/catalog.json`
```json
{
  "publisher": {
    "name": "North Point Publishing",
    "founded": "1975",
    "mission": "Preserving classic genre fiction traditions"
  },
  "genres": [
    {
      "name": "Horror",
      "code": "H",
      "sub_genres": [
        {
          "name": "1950s B-Movie Horror",
          "code": "H-1"
        }
      ]
    }
  ],
  "authors": [
    {
      "id": "rex-maddox",
      "name": "Rex 'Buzz' Maddox",
      "bio": "Master of atomic-age monster terror...",
      "specialty": "Atomic-age creature features"
    }
  ],
  "books": [
    {
      "id": "atomic-ant-colony",
      "title": "The Atomic Ant Colony",
      "author_id": "rex-maddox",
      "genre_code": "H",
      "sub_genre_code": "H-1",
      "description": "When atomic testing goes wrong...",
      "publication_year": "1978",
      "page_count": 184,
      "isbn": "978-0-123456-78-9",
      "cover_image": "/images/covers/atomic-ant-colony.jpg",
      "price": "$2.95"
    }
  ]
}
```

### Image Assets
- Book cover images: `/public/images/covers/`
- Author photos: `/public/images/authors/`
- Genre icons: `/public/images/icons/`
- Publisher logo: `/public/images/logo/`

## User Interface Requirements

### Design Aesthetic
- **Retro 1970s-80s pulp fiction aesthetic**
- Color scheme: Deep oranges, browns, yellows, and cream
- Typography: Bold serif headings, clean sans-serif body text
- Book cover style placeholder images for missing covers
- Vintage paper texture backgrounds (subtle)

### Layout Components

#### Header
- North Point Publishing logo/wordmark
- Navigation menu (Genres, Authors, About)
- Search bar (prominent, centered)
- Tagline: "Intelligent Genre Fiction Since 1975"

#### Book Cards (Index Page)
- Book cover image (150x225px)
- Title (bold, large)
- Author name
- Genre badge/tag
- Price (vintage styling)
- Hover effects (subtle scale, shadow)

#### Filter Panel
- Genre dropdown (with sub-genres)
- Author dropdown (alphabetical)
- Sort dropdown (Title, Author, Year)
- Active filters display with remove buttons
- Results count

#### Book Detail Page
- Large cover image (300x450px)
- Book information panel
- Author bio section
- "More by this author" section
- Navigation breadcrumbs

### Responsive Breakpoints
- Mobile: 320px-768px (1 column)
- Tablet: 768px-1024px (2-3 columns)
- Desktop: 1024px+ (4 columns)

## Development Requirements

### File Structure
```
north-point-catalog/
├── src/
│   ├── components/
│   │   ├── BookCard.astro
│   │   ├── BookGrid.astro
│   │   ├── FilterPanel.astro
│   │   ├── SearchBar.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── BookLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── books/
│   │   │   └── [slug].astro
│   │   ├── genres/
│   │   │   └── [genre].astro
│   │   └── authors/
│   │       └── [author].astro
│   ├── data/
│   │   └── catalog.json
│   ├── styles/
│   │   ├── global.scss
│   │   ├── components.scss
│   │   └── variables.scss
│   └── utils/
│       ├── dataHelpers.js
│       └── urlHelpers.js
├── public/
│   ├── images/
│   │   ├── covers/
│   │   ├── authors/
│   │   └── icons/
│   └── favicon.ico
├── astro.config.mjs
├── package.json
└── README.md
```

### Key Components to Build

#### 1. BookCard.astro
- Displays book cover, title, author, genre
- Links to detail page
- Handles missing cover images

#### 2. FilterPanel.astro
- Genre/sub-genre filters
- Author filter
- Sort options
- URL state management

#### 3. SearchBar.astro
- Real-time search functionality
- Debounced input
- Clear search button

#### 4. BookGrid.astro
- Responsive grid layout
- Handles filtered/searched results
- Empty state messaging

### JavaScript Functionality
- Client-side filtering and search
- URL state management
- Responsive image loading
- Smooth scroll behaviors

## Deployment Configuration

### GitHub Pages Setup
- Repository: `north-point-publishing-catalog`
- Build command: `npm run build`
- Deploy directory: `dist/`
- Custom domain: (optional)

### Astro Configuration
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://[username].github.io',
  base: '/north-point-publishing-catalog',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
```

### GitHub Actions Workflow
- Automatic deployment on push to main
- Build and deploy to gh-pages branch
- Node.js version: 18+

## Content Requirements

### Initial Data Population
- Use all 8 sub-genres from provided catalog
- Include all 23 authors with biographical information
- Generate approximately 115 book titles (5 per author)
- Create placeholder book cover images with retro styling

### Book Cover Image Generation
- Consistent retro pulp fiction aesthetic
- Genre-appropriate color schemes
- Bold typography
- Publisher branding elements
- Dimensions: 300x450px (2:3 ratio)

## Performance Requirements

- Page load speed: <2 seconds
- Lighthouse score: 90+ (Performance, Accessibility, SEO)
- Mobile-friendly
- Optimized images (WebP with fallbacks)
- Minimal JavaScript bundle size

## SEO Requirements

- Semantic HTML structure
- Meta descriptions for all pages
- Open Graph tags
- Sitemap generation
- Proper heading hierarchy
- Alt text for all images

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratio: 4.5:1 minimum
- Focus indicators
- Skip navigation links

## Success Metrics

- Functional search and filter system
- Mobile-responsive design
- Fast loading times
- Easy navigation between books
- Retro aesthetic that matches brand
- Successful GitHub Pages deployment

## Future Enhancements (Post-MVP)

- Author detail pages
- Genre landing pages
- Reading lists/favorites
- Book recommendations
- Advanced search (by year, page count, etc.)
- Dark/light theme toggle
- Print-friendly book detail pages

## Development Timeline

### Week 1: Setup & Core Features
- Project initialization
- Data structure implementation
- Basic Astro components
- Index page with book grid
- Basic styling

### Week 2: Advanced Features
- Search functionality
- Filter system
- Book detail pages
- Responsive design
- Retro styling refinement

### Week 3: Polish & Deployment
- Performance optimization
- Accessibility testing
- GitHub Pages deployment
- Content population
- Final testing and bug fixes

## Technical Considerations

### Data Management
- Static JSON files for simplicity
- Consider splitting large JSON files if needed
- Implement data validation
- Create helper functions for data access

### State Management
- URL-based state for bookmarkable searches
- Local storage for user preferences (optional)
- Client-side filtering for performance

### Image Optimization
- Responsive images with multiple sizes
- Lazy loading implementation
- WebP format with fallbacks
- CDN consideration for production

This PRD provides a comprehensive roadmap for building the North Point Publishing catalog website with Astro and deploying it via GitHub Pages.