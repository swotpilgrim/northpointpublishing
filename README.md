# North Point Publishing Catalog

A retro-styled catalog website showcasing North Point Publishing's pulp fiction collection from the 1950s-1980s with house imprint codes.

## 🚀 Project Structure

```
north-point-catalog/
├── src/
│   ├── components/        # Reusable Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # File-based routing
│   ├── data/             # JSON data files
│   ├── utils/            # Helper functions
│   └── styles/           # Global styles
├── public/               # Static assets
└── dist/                 # Built site (auto-generated)
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |

## 🎨 Features

- **Retro Design**: 1970s-80s pulp fiction aesthetic with warm color palette
- **Responsive**: Works on desktop, tablet, and mobile devices  
- **Search & Filter**: Real-time search and filtering by genre, author
- **Book Details**: Individual pages for each book with author information
- **Static Generation**: Fast, SEO-friendly static site generation

## 📚 Data Structure

Book data is stored in `src/data/catalog.json` with information about:
- Publishers and authors
- Book details (title, description, publication info)
- Genre categorization
- Cover images and metadata

## 🚀 Deployment

This site is configured for deployment on GitHub Pages using GitHub Actions. Push to the `main` branch triggers automatic deployment.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Mobile browsers
