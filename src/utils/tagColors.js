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

// Generate HSL color from hash with good contrast and saturation
function generateColorFromHash(text, type = 'genre') {
  const hash = hashCode(text);

  // Different hue ranges for different tag types to create visual grouping
  let hueBase;
  switch (type) {
    case 'genre':
      hueBase = 0; // Red to orange range
      break;
    case 'subgenre':
      hueBase = 200; // Blue to purple range
      break;
    case 'imprint':
      hueBase = 100; // Green to yellow range
      break;
    default:
      hueBase = 0;
  }

  // Generate hue within a 60-degree range for the tag type
  const hue = (hueBase + (Math.abs(hash) % 60)) % 360;
  const saturation = 65 + (Math.abs(hash) % 25); // 65-90% saturation
  const lightness = 35 + (Math.abs(hash) % 15); // 35-50% lightness (darker for white text)

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Pre-defined color mappings with highly distinct, contrasting colors
// Each color is chosen to be maximally different from all others
export const GENRE_COLORS = {
  'Action': '#ff0000',           // Pure red - high energy
  'Horror': '#4b0082',           // Indigo - dark and mysterious
  'Science Fiction': '#00bfff',  // Deep sky blue - futuristic
  'Romance': '#ff69b4',          // Hot pink - romantic
  'Spy': '#2f4f2f'              // Dark slate gray - secretive
};

export const SUBGENRE_COLORS = {
  '1970s Grindhouse Style': '#ff4500',      // Orange red - retro energy
  '1950s B-Movie Horror': '#800080',        // Purple - classic horror
  'Gothic Vampires': '#8b0000',             // Dark red - blood/gothic
  'Contemporary Horror': '#556b2f',         // Dark olive green - modern edge
  '1960s Retro-Futuristic': '#00ced1',     // Dark turquoise - space age
  '1950s Teen Romance': '#dc143c',          // Crimson - passionate
  'YA Supernatural Teen Drama': '#9370db',  // Medium purple - mystical
  '60s Style Action Adventure': '#b8860b'   // Dark golden rod - adventure
};

export const IMPRINT_COLORS = {
  'Redline': '#ff1493',          // Deep pink - vibrant energy
  'Atomic Screen': '#00ff7f',    // Spring green - atomic glow
  'Night Chapel': '#191970',     // Midnight blue - gothic night
  'Lido Noir': '#000000',        // Pure black - noir darkness
  'StarLark': '#ffd700',         // Gold - stellar brightness
  'Blue Ribbon': '#4169e1',      // Royal blue - premium quality
  'Moon & Locker': '#da70d6',    // Orchid - magical/mystical
  'Shadow Bureau': '#696969'     // Dim gray - shadowy operations
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