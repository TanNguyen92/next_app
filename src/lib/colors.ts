// lib/colors.ts
export function houseColor(house?: string): string {
  if (!house) return '#f3f4f6';
  const h = house.toLowerCase();
  if (h.includes('gryffindor')) return '#fee2e2';
  if (h.includes('slytherin')) return '#d1fae5';
  if (h.includes('ravenclaw')) return '#dbeafe';
  if (h.includes('hufflepuff')) return '#fff7cd';
  return '#f3f4f6';
}
