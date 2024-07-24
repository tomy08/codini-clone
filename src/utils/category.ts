const categories: { [key: string]: string } = {
  'lavarropas-automaticos': 'Lavarropas automático',
  'lavarropas-semiautomaticos': 'Lavarropas semiautomático',
  'horno-electrico': 'Horno eléctrico',
  secarropas: 'Secarropas',
  'ventiladores-de-techo': 'Ventilador de techo',
  'ventiladores-de-pie': 'Ventilador de pie',
}

export function getCategory(url: string): string {
  return categories[url] || 'Categoría no encontrada'
}
