const categories: { [key: string]: string } = {
  panales: 'Pañales',
  toallitas: 'Toallitas',
  'cremas-y-oleos': 'Cremas y Óleos',
  accesorios: 'Accesorios',
}

export const categoryList = [
  { slug: 'panales', name: 'Pañales' },
  { slug: 'toallitas', name: 'Toallitas' },
  { slug: 'cremas-y-oleos', name: 'Cremas y Óleos' },
  { slug: 'accesorios', name: 'Accesorios' },
]

export function getCategory(url: string): string {
  return categories[url] || 'Categoría no encontrada'
}
