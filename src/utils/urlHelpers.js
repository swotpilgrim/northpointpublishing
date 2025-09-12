export function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getBookSlug(book) {
  return book.id;
}

export function getAuthorSlug(author) {
  return author.id;
}

export function getGenreSlug(genre) {
  return genre.code.toLowerCase();
}