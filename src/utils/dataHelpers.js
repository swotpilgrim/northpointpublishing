import catalogData from './buildCatalog.js';

export function getAllBooks() {
  return catalogData.books;
}

export function getBookById(id) {
  return catalogData.books.find(book => book.id === id);
}

export function getAuthorById(id) {
  return catalogData.authors.find(author => author.id === id);
}

export function getGenreByCode(code) {
  return catalogData.genres.find(genre => genre.code === code);
}

export function getSubGenreByCode(genreCode, subGenreCode) {
  const genre = getGenreByCode(genreCode);
  return genre?.sub_genres.find(subGenre => subGenre.code === subGenreCode);
}

export function getAllSubGenres() {
  const subGenres = [];
  catalogData.genres.forEach(genre => {
    genre.sub_genres.forEach(subGenre => {
      subGenres.push({
        ...subGenre,
        parentGenre: genre.name,
        parentCode: genre.code
      });
    });
  });
  return subGenres;
}

export function getBooksBySubGenre(subGenreCode) {
  return catalogData.books.filter(book => book.sub_genre_code === subGenreCode);
}

export function getBooksByAuthor(authorId) {
  return catalogData.books.filter(book => book.author_id === authorId);
}

export function getBooksByGenre(genreCode) {
  return catalogData.books.filter(book => book.genre_code === genreCode);
}

export function searchBooks(query) {
  const lowercaseQuery = query.toLowerCase();
  return catalogData.books.filter(book => 
    book.title.toLowerCase().includes(lowercaseQuery) ||
    book.description.toLowerCase().includes(lowercaseQuery) ||
    getAuthorById(book.author_id)?.name.toLowerCase().includes(lowercaseQuery)
  );
}

export function getAllAuthors() {
  return catalogData.authors;
}

export function getAllGenres() {
  return catalogData.genres;
}

export function getPublisher() {
  return catalogData.publisher;
}

export function getAllImprints() {
  const imprints = [];
  const imprintMap = new Map();

  catalogData.genres.forEach(genre => {
    genre.sub_genres.forEach(subGenre => {
      if (subGenre.imprint && !imprintMap.has(subGenre.imprint)) {
        imprintMap.set(subGenre.imprint, {
          name: subGenre.imprint,
          code: subGenre.imprint_code,
          spine_code: subGenre.spine_code
        });
        imprints.push({
          name: subGenre.imprint,
          code: subGenre.imprint_code,
          spine_code: subGenre.spine_code
        });
      }
    });
  });

  return imprints.sort((a, b) => a.name.localeCompare(b.name));
}

export function getBooksGroupedByAuthor() {
  const authorGroups = [];
  const authorMap = new Map();

  // Group books by author
  catalogData.books.forEach(book => {
    if (!authorMap.has(book.author_id)) {
      const author = getAuthorById(book.author_id);
      authorMap.set(book.author_id, {
        author: author,
        books: []
      });
    }
    authorMap.get(book.author_id).books.push(book);
  });

  // Convert to array and sort by author name
  authorMap.forEach(group => {
    authorGroups.push(group);
  });

  return authorGroups.sort((a, b) => a.author.name.localeCompare(b.author.name));
}