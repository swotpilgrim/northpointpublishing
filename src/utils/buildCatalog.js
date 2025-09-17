// Import all genre files (only non-empty ones)
import A_1 from '../data/A_1.json' assert { type: 'json' };
import H_1 from '../data/H_1.json' assert { type: 'json' };
import H_2 from '../data/H_2.json' assert { type: 'json' };
import H_3 from '../data/H_3.json' assert { type: 'json' };
import R_1 from '../data/R_1.json' assert { type: 'json' };
import R_2 from '../data/R_2.json' assert { type: 'json' };
import SF_1 from '../data/SF_1.json' assert { type: 'json' };
import S_1 from '../data/S_1.json' assert { type: 'json' };

const genreFiles = [A_1, H_1, H_2, H_3, R_1, R_2, SF_1, S_1];

function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function consolidateCatalog() {
  const catalog = {
    publisher: {
      name: "North Point Publishing",
      founded: "1975",
      mission: "Preserving classic genre fiction traditions"
    },
    genres: [],
    authors: [],
    books: []
  };

  const genreMap = new Map();
  const authorMap = new Map();
  let bookId = 1;

  genreFiles.forEach(genreFile => {
    // Add genre if not exists
    if (!genreMap.has(genreFile.line_code)) {
      const genre = {
        name: genreFile.genre,
        code: genreFile.line_code,
        sub_genres: []
      };
      genreMap.set(genreFile.line_code, genre);
      catalog.genres.push(genre);
    }

    // Add sub-genre
    const genre = genreMap.get(genreFile.line_code);
    const subGenre = {
      name: genreFile.sub_genre,
      code: genreFile.sub_code,
      imprint: genreFile.imprint,
      imprint_code: genreFile.imprint_code,
      spine_code: genreFile.spine_code
    };
    genre.sub_genres.push(subGenre);

    // Process authors and books
    genreFile.authors.forEach(authorEntry => {
      const authorName = authorEntry.author.name;
      const authorSlug = createSlug(authorName);

      // Add author if not exists
      if (!authorMap.has(authorSlug)) {
        const author = {
          id: authorSlug,
          name: authorName,
          bio: authorEntry.author.trade_description,
          specialty: genreFile.sub_genre,
          image: `/northpointpublishing/images/authors/${authorSlug}.jpg`
        };
        authorMap.set(authorSlug, author);
        catalog.authors.push(author);
      }

      // Add books
      authorEntry.works.forEach(work => {
        const bookSlug = createSlug(work.title);
        const book = {
          id: bookSlug,
          title: work.title,
          author_id: authorSlug,
          genre_code: genreFile.line_code,
          sub_genre_code: genreFile.sub_code,
          imprint: genreFile.imprint,
          imprint_code: genreFile.imprint_code,
          spine_code: `${genreFile.spine_code}-${String(bookId).padStart(3, '0')}`,
          description: work.description,
          publication_year: work.publication_year || (1975 + Math.floor(Math.random() * 10)).toString(),
          page_count: work.page_count || (140 + Math.floor(Math.random() * 120)),
          isbn: work.isbn || `978-0-${String(bookId).padStart(6, '0')}-${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}`,
          cover_image: work.cover_image || `/northpointpublishing/images/covers/${genreFile.sub_code}/${bookSlug}.png`,
          price: work.price || "$" + (2.50 + Math.random() * 2).toFixed(2)
        };
        catalog.books.push(book);
        bookId++;
      });
    });
  });

  return catalog;
}

// Export the consolidated catalog
export default consolidateCatalog();