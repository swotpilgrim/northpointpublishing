# North Point Publishing - Handoff Documentation

## 🎯 Current Status
The North Point Publishing catalog website is **fully functional** and deployed at:
- **Repository:** https://github.com/swotpilgrim/northpointpublishing.git
- **Live Site:** https://swotpilgrim.github.io/northpointpublishing
- **Last Commit:** Initial release with complete functionality

## 📊 What's Complete
✅ **Fully functional Astro.js website**
✅ **115 books across 7 genre categories**
✅ **Complete catalog data structure**
✅ **Black & white responsive design**
✅ **Search & filter functionality** 
✅ **Individual book detail pages**
✅ **GitHub Pages deployment**
✅ **Placeholder images system**

## 🚧 Next Priority Tasks

### 1. Add Book Cover Images (HIGH PRIORITY)
**Current Status:** All books use `cover_placeholder.png`

**What to do:**
- Replace placeholder with actual book cover images for all 115 books
- Images should be stored in: `public/images/covers/`
- Recommended dimensions: **300x450px (2:3 ratio)**
- Format: JPG or PNG
- Naming: Use the book's slug/ID (e.g., `atomic-ant-colony.jpg`)

**Files that reference covers:**
- `src/utils/buildCatalog.js` (line 84) - Sets cover_image path
- `src/components/BookCard.astro` (lines 17-21) - Displays covers on listing
- `src/pages/books/[slug].astro` (lines 32-36, 89-93) - Detail page covers

### 2. Add Author Images (HIGH PRIORITY)  
**Current Status:** All authors use `author_placeholder.jpg`

**What to do:**
- Add individual author photos for each author
- Images should be stored in: `public/images/authors/`
- Recommended dimensions: **200x200px (square)**
- Format: JPG recommended
- Naming: Use author slug (e.g., `rex-maddox.jpg`, `jessica-moonworth.jpg`)

**Files that reference author images:**
- `src/components/BookCard.astro` (line 26) - Small author image on cards
- `src/pages/books/[slug].astro` (line 74) - Larger author image on detail pages

## 📚 Complete Book & Author List

### Action (A-1: 1970s Grindhouse Style)
**Authors:** 
- Jake 'Rattlesnake' Murphy (5 books)
- Candy Savage (5 books)  
- Tony 'The Blade' Romano (5 books)

### Horror (H-1: 1950s B-Movie Horror)
**Authors:**
- Rex 'Buzz' Maddox (5 books)
- Vincent Torrino (5 books)
- Chester 'Chet' Grimwald (5 books)

### Horror (H-2: Gothic Vampires)
**Authors:**
- Vivienne Blackwood (5 books)
- Alessandro Grimm (5 books)

### Horror (H-3: Contemporary Horror) 
**Authors:**
- Marcus Holloway (5 books)
- Sophia Darkwell (5 books)
- Gabriel Cross (10 books)

### Romance (R-1: 1950s Teen Romance)
**Authors:**
- Betty Williams (10 books)
- Chuck Harrison (10 books)

### Romance (R-2: YA Supernatural Teen Drama)
**Authors:**
- Jessica Moonworth (5 books) - Vampire romance
- Morgan Blackthorne (5 books) - Witch academy stories

### Science Fiction (SF-1: 1960s Retro-Futuristic)
**Authors:**
- Robert Mitchell (5 books)
- Diana Sterling (5 books)

**Total: 115 books across ~20+ authors**

## 🛠 Technical Details

### Project Structure
```
northpointpublishing/
├── public/images/
│   ├── covers/           # Book cover images go here
│   ├── authors/          # Author photos go here  
│   └── icons/           # Logo and icons
├── src/
│   ├── components/      # Reusable components
│   ├── data/           # JSON catalog files
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── utils/          # Helper functions
```

### Image Specifications

**Book Covers:**
- **Size:** 300x450px (2:3 aspect ratio)
- **Format:** JPG or PNG
- **Style:** Should match retro pulp fiction aesthetic
- **Colors:** Can be full color (design handles any palette)
- **Path:** `/public/images/covers/[book-slug].jpg`

**Author Photos:**
- **Size:** 200x200px (1:1 aspect ratio) 
- **Format:** JPG recommended
- **Style:** Professional headshots, can be vintage-styled
- **Path:** `/public/images/authors/[author-slug].jpg`

### How Images Are Used

1. **Book Cards (Listing Page):**
   - Cover: 225px height, auto width
   - Author: 24px circular thumbnail
   
2. **Book Detail Pages:**
   - Cover: 450px height, auto width
   - Author: 60px circular photo next to "About the Author"
   
3. **Related Books:**
   - Cover: 180px height, auto width

### Fallback System
- If individual images don't exist, placeholders are used
- No code changes needed - just add images with correct names
- System automatically detects and uses real images when available

## 🎨 Design Guidelines

### Book Covers Should Feature:
- **Bold, readable typography**
- **Retro color palettes** (oranges, browns, yellows for horror; bright colors for sci-fi)
- **Genre-appropriate imagery** 
- **Consistent "North Point Publishing" branding**
- **Price badge in corner** (optional, can be added)

### Author Photos Should Be:
- **Professional looking**
- **Period-appropriate styling** (1950s-1980s feel)
- **Consistent lighting/quality**
- **Clear facial visibility**

## 🚀 Testing After Adding Images

1. **Local testing:** `npm run dev` 
2. **Build test:** `npm run build`
3. **Check both listing and detail pages**
4. **Verify responsive behavior**
5. **Test search/filter still works**

## 📝 Commit Guidelines

When adding images, use descriptive commits:
```bash
git add public/images/covers/
git commit -m "Add book cover images for Horror genre (H-1, H-2, H-3)"

git add public/images/authors/  
git commit -m "Add author photos for all Horror authors"
```

## 🔄 Deployment
- **Auto-deploys** on push to main branch
- **GitHub Actions** handles build and deployment
- **Live within 5-10 minutes** of commit

## 📞 Technical Notes

- **Base path:** All paths include `/northpointpublishing/` for GitHub Pages
- **Responsive:** Images automatically adapt to mobile/tablet/desktop
- **Performance:** Images are lazy-loaded and optimized by Astro
- **SEO:** All images include proper alt text from book/author data

## 🎯 Success Criteria

**Phase 1 Complete When:**
- [ ] All 115 books have unique cover images
- [ ] All ~20+ authors have individual photos
- [ ] Images display correctly on both listing and detail pages
- [ ] Site maintains performance and responsive design
- [ ] All images follow design guidelines

**Future Enhancements:**
- Genre landing pages
- Advanced search features  
- Reading lists/favorites
- Author detail pages
- Print-friendly layouts