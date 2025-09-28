// Color mapping for individual genres, sub-genres, and imprints
// Each tag gets a unique, distinct color

// Hash function to generate consistent colors from text
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

// Generate sophisticated HSL colors that match our professional palette
function generateColorFromHash(text, type = 'genre') {
  const hash = hashCode(text);

  // Sophisticated hue ranges for different tag types
  let hueBase;
  switch (type) {
    case 'genre':
      hueBase = 220; // Blue to purple range - professional
      break;
    case 'subgenre':
      hueBase = 40; // Orange to yellow range - warm accent
      break;
    case 'imprint':
      hueBase = 160; // Green to teal range - fresh and modern
      break;
    default:
      hueBase = 220;
  }

  // Generate hue within a 40-degree range for subtlety
  const hue = (hueBase + (Math.abs(hash) % 40)) % 360;
  const saturation = 45 + (Math.abs(hash) % 20); // 45-65% saturation (more muted)
  const lightness = 40 + (Math.abs(hash) % 15); // 40-55% lightness (professional darkness)

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Sophisticated, muted color palette for professional appearance
// Colors are distinctive but harmonious and easy on the eyes
export const GENRE_COLORS = {
  'Action': '#c53030',           // Muted red - confident energy
  'Horror': '#553c9a',           // Deep purple - mysterious elegance
  'Science Fiction': '#2b6cb0',  // Professional blue - technological
  'Romance': '#b83280',          // Muted rose - sophisticated romance
  'Spy': '#4a5568'              // Slate gray - understated authority
};

export const SUBGENRE_COLORS = {
  'Grindhouse': '#d69e2e',          // Warm amber - vintage appeal
  'B-Movie': '#e63946',             // Classic red - retro cinema
  'Gothic': '#702459',              // Deep burgundy - gothic elegance
  'Modern': '#f56565',              // Coral red - contemporary edge
  'Retro-Future': '#319795',        // Teal - space age sophistication
  'Teen Romance': '#e53e3e',        // Soft coral - youthful romance
  'Supernatural': '#6b46c1',        // Mystical purple - otherworldly
  'Spy Thriller': '#2c5282'         // Steel blue - covert operations
};

export const IMPRINT_COLORS = {
  'Redline': '#e53e3e',          // Refined coral - dynamic energy
  'Atomic Screen': '#48bb78',    // Professional green - scientific precision
  'Night Chapel': '#2d3748',     // Dark charcoal - gothic sophistication
  'Lido Noir': '#1a365d',        // Midnight blue - noir mystery
  'StarLark': '#ed8936',         // Warm gold - stellar warmth
  'Blue Ribbon': '#3182ce',      // Classic blue - trusted quality
  'Moon & Locker': '#9f7aea',    // Soft lavender - mystical allure
  'Shadow Bureau': '#4c1d95'     // Deep indigo - shadowy operations
};

// Main function to get color for any tag
export function getTagColor(tagName, tagType) {
  switch (tagType) {
    case 'genre':
      return GENRE_COLORS[tagName] || generateColorFromHash(tagName, 'genre');
    case 'subgenre':
      return SUBGENRE_COLORS[tagName] || generateColorFromHash(tagName, 'subgenre');
    case 'imprint':
      return IMPRINT_COLORS[tagName] || generateColorFromHash(tagName, 'imprint');
    default:
      return generateColorFromHash(tagName);
  }
}

// Helper functions for specific tag types
export function getGenreColor(genreName) {
  return getTagColor(genreName, 'genre');
}

export function getSubGenreColor(subGenreName) {
  return getTagColor(subGenreName, 'subgenre');
}

export function getImprintColor(imprintName) {
  return getTagColor(imprintName, 'imprint');
}