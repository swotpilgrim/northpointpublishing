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

// Pre-defined color mappings for better visual consistency
export const GENRE_COLORS = {
  'Action': '#c62d42',        // Red
  'Horror': '#8b2635',        // Dark red
  'Science Fiction': '#2563eb', // Blue
  'Romance': '#e91e63',       // Pink
  'Spy': '#1f2937'           // Dark gray/black
};

export const SUBGENRE_COLORS = {
  '1970s Grindhouse Style': '#dc2626',     // Bright red
  '1950s B-Movie Horror': '#7c2d12',       // Dark red-brown
  'Gothic Vampires': '#581c87',            // Dark purple
  'Contemporary Horror': '#374151',        // Dark gray
  '1960s Retro-Futuristic': '#0ea5e9',    // Cyan
  '1950s Teen Romance': '#ec4899',         // Hot pink
  'YA Supernatural Teen Drama': '#a855f7', // Purple
  '60s Style Action Adventure': '#475569'   // Slate gray
};

export const IMPRINT_COLORS = {
  'Redline': '#ef4444',          // Red (matches name)
  'Atomic Screen': '#22d3ee',     // Cyan (atomic/sci-fi feel)
  'Night Chapel': '#4c1d95',      // Dark purple (gothic)
  'Lido Noir': '#1f2937',         // Very dark gray (noir)
  'StarLark': '#3b82f6',          // Blue (space theme)
  'Blue Ribbon': '#2563eb',       // Blue (matches name)
  'Moon & Locker': '#6366f1',     // Indigo (mystical)
  'Shadow Bureau': '#374151'      // Dark gray (spy/shadow theme)
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