import type { Product } from '../types'

const products: Product[] = [
  // === PAÑALES ===
  {
    id: 1,
    name: 'Pampers Premium Care RN',
    price: 8500,
    discount: 0,
    img: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Pampers+RN',
    description:
      'Pañales Pampers Premium Care para recién nacidos. Hasta 4,5 kg.\n\nMáxima suavidad y protección para la piel del bebé.\n\nCanales de aire que ayudan a mantener la piel seca.\n\nIndicador de humedad que cambia de color.',
    category: 'Pañales',
    url: 'pampers-premium-care-rn',
    units: ['x20', 'x36', 'x72'],
  },
  {
    id: 2,
    name: 'Pampers Premium Care M',
    price: 9200,
    discount: 0,
    img: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Pampers+M',
    description:
      'Pañales Pampers Premium Care talle M. De 6 a 9,5 kg.\n\nSuavidad superior y ajuste cómodo.\n\nTecnología de 3 capas absorbentes.\n\nProtección hasta 12 horas.',
    category: 'Pañales',
    url: 'pampers-premium-care-m',
    units: ['x16', 'x34', 'x68', 'x100'],
  },
  {
    id: 3,
    name: 'Pampers Premium Care G',
    price: 9500,
    discount: 0,
    img: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Pampers+G',
    description:
      'Pañales Pampers Premium Care talle G. De 9 a 12,5 kg.\n\nMáxima suavidad tipo algodón.\n\nBandas elásticas para mejor ajuste.\n\nProtección hasta 12 horas.',
    category: 'Pañales',
    url: 'pampers-premium-care-g',
    units: ['x16', 'x32', 'x64', 'x100'],
  },
  {
    id: 4,
    name: 'Pampers Premium Care XG',
    price: 9800,
    discount: 0,
    img: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Pampers+XG',
    description:
      'Pañales Pampers Premium Care talle XG. De 12 a 15 kg.\n\nSuavidad y protección premium.\n\nCanales de aire para una mejor ventilación.\n\nIndicador de humedad.',
    category: 'Pañales',
    url: 'pampers-premium-care-xg',
    units: ['x16', 'x30', 'x60'],
  },
  {
    id: 5,
    name: 'Pampers Premium Care XXG',
    price: 10200,
    discount: 0,
    img: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Pampers+XXG',
    description:
      'Pañales Pampers Premium Care talle XXG. Más de 14 kg.\n\nDiseñado para bebés más grandes.\n\nTecnología absorbente de 3 capas.\n\nMáxima comodidad y ajuste.',
    category: 'Pañales',
    url: 'pampers-premium-care-xxg',
    units: ['x16', 'x28', 'x56'],
  },
  {
    id: 6,
    name: 'Huggies Natural Care RN',
    price: 7800,
    discount: 0,
    img: 'https://placehold.co/400x400/e3f2fd/1565c0?text=Huggies+RN',
    description:
      'Pañales Huggies Natural Care para recién nacidos. Hasta 4,5 kg.\n\nCubierta exterior suave con algodón orgánico.\n\nXtra-Care System para máxima suavidad.\n\nIndicador de humedad.',
    category: 'Pañales',
    url: 'huggies-natural-care-rn',
    units: ['x20', 'x34', 'x68'],
  },
  {
    id: 7,
    name: 'Huggies Natural Care M',
    price: 8500,
    discount: 0,
    img: 'https://placehold.co/400x400/e3f2fd/1565c0?text=Huggies+M',
    description:
      'Pañales Huggies Natural Care talle M. De 5,5 a 9,5 kg.\n\nAlgodón orgánico en la cubierta.\n\nCintura elástica 360° para mejor ajuste.\n\nProtección hasta 12 horas.',
    category: 'Pañales',
    url: 'huggies-natural-care-m',
    units: ['x16', 'x32', 'x64', 'x100'],
  },
  {
    id: 8,
    name: 'Huggies Natural Care G',
    price: 8800,
    discount: 0,
    img: 'https://placehold.co/400x400/e3f2fd/1565c0?text=Huggies+G',
    description:
      'Pañales Huggies Natural Care talle G. De 9 a 12,5 kg.\n\nTecnología Xtra-Care System.\n\nBarrera anti-derrames.\n\nSuavidad de algodón orgánico.',
    category: 'Pañales',
    url: 'huggies-natural-care-g',
    units: ['x16', 'x30', 'x60', 'x100'],
  },
  {
    id: 9,
    name: 'Huggies Natural Care XG',
    price: 9200,
    discount: 0,
    img: 'https://placehold.co/400x400/e3f2fd/1565c0?text=Huggies+XG',
    description:
      'Pañales Huggies Natural Care talle XG. De 12 a 15 kg.\n\nSuavidad natural con algodón orgánico.\n\nMáxima absorción y protección.\n\nCintura elástica para comodidad.',
    category: 'Pañales',
    url: 'huggies-natural-care-xg',
    units: ['x16', 'x28', 'x56'],
  },
  {
    id: 10,
    name: 'Babysec Ultra M',
    price: 6000,
    discount: 0,
    img: 'https://placehold.co/400x400/fff3e0/e65100?text=Babysec+M',
    description:
      'Pañales Babysec Ultra talle M. De 5 a 9,5 kg.\n\nExcelente relación calidad-precio.\n\nSistema de absorción rápida.\n\nBarreras anti-derrames.',
    category: 'Pañales',
    url: 'babysec-ultra-m',
    units: ['x16', 'x34', 'x68', 'x100'],
  },
  {
    id: 11,
    name: 'Babysec Ultra G',
    price: 6500,
    discount: 0,
    img: 'https://placehold.co/400x400/fff3e0/e65100?text=Babysec+G',
    description:
      'Pañales Babysec Ultra talle G. De 9 a 12 kg.\n\nAbsorción rápida y segura.\n\nCintura elástica para mejor ajuste.\n\nProtección hasta 12 horas.',
    category: 'Pañales',
    url: 'babysec-ultra-g',
    units: ['x16', 'x32', 'x64', 'x100'],
  },
  {
    id: 12,
    name: 'Babysec Ultra XG',
    price: 7000,
    discount: 10,
    img: 'https://placehold.co/400x400/fff3e0/e65100?text=Babysec+XG',
    description:
      'Pañales Babysec Ultra talle XG. De 11 a 15 kg.\n\nMáxima absorción Ultra.\n\nBarreras anti-derrames reforzadas.\n\nSuave al contacto con la piel del bebé.',
    category: 'Pañales',
    url: 'babysec-ultra-xg',
    units: ['x16', 'x30', 'x60'],
  },

  // === TOALLITAS ===
  {
    id: 13,
    name: 'Toallitas Pampers Sensitive',
    price: 3200,
    discount: 0,
    img: 'https://placehold.co/400x400/fce4ec/c62828?text=Toallitas+Pampers',
    description:
      'Toallitas húmedas Pampers Sensitive.\n\nClínicamente probadas para pieles sensibles.\n\nSin alcohol ni perfume.\n\nSuaves y resistentes para una limpieza delicada.',
    category: 'Toallitas',
    url: 'toallitas-pampers-sensitive',
    units: ['x52', 'x104', 'x208'],
  },
  {
    id: 14,
    name: 'Toallitas Huggies Pure',
    price: 2800,
    discount: 0,
    img: 'https://placehold.co/400x400/e3f2fd/1565c0?text=Toallitas+Huggies',
    description:
      'Toallitas húmedas Huggies Pure.\n\n99% agua pura.\n\nSin fragancia, alcohol ni parabenos.\n\nAptas para pieles sensibles de recién nacidos.',
    category: 'Toallitas',
    url: 'toallitas-huggies-pure',
    units: ['x48', 'x96', 'x192'],
  },
  {
    id: 15,
    name: 'Toallitas Babysec Ultra',
    price: 2200,
    discount: 0,
    img: 'https://placehold.co/400x400/fff3e0/e65100?text=Toallitas+Babysec',
    description:
      'Toallitas húmedas Babysec Ultra.\n\nCon aloe vera y vitamina E.\n\nSuaves y resistentes.\n\nIdeales para la limpieza diaria del bebé.',
    category: 'Toallitas',
    url: 'toallitas-babysec-ultra',
    units: ['x50', 'x100', 'x200'],
  },

  // === CREMAS Y ÓLEOS ===
  {
    id: 16,
    name: 'Crema Hipoglós x40g',
    price: 2500,
    discount: 0,
    img: 'https://placehold.co/400x400/f3e5f5/7b1fa2?text=Hipoglos',
    description:
      'Crema protectora Hipoglós. Tubo de 40g.\n\nPreviene y trata la dermatitis del pañal.\n\nCon vitaminas A y D.\n\nCrea una barrera protectora en la piel del bebé.',
    category: 'Cremas y Óleos',
    url: 'crema-hipoglos-x40g',
    units: ['x1'],
  },
  {
    id: 17,
    name: "Óleo Calcáreo Johnson's 200ml",
    price: 1800,
    discount: 0,
    img: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Oleo+Johnsons',
    description:
      "Óleo Calcáreo Johnson's Baby. Botella de 200ml.\n\nLimpia suavemente la piel del bebé.\n\nIdeal para el cambio de pañal.\n\nDermatológicamente testeado.",
    category: 'Cremas y Óleos',
    url: 'oleo-calcareo-johnsons-200ml',
    units: ['x1', 'x2'],
  },
  {
    id: 18,
    name: 'Crema Dermodex Prevent x60g',
    price: 3500,
    discount: 0,
    img: 'https://placehold.co/400x400/f3e5f5/7b1fa2?text=Dermodex',
    description:
      'Crema preventiva Dermodex Prevent. Tubo de 60g.\n\nPreviene irritaciones en la zona del pañal.\n\nCon óxido de zinc y vitamina E.\n\nProtección duradera.',
    category: 'Cremas y Óleos',
    url: 'crema-dermodex-prevent-x60g',
    units: ['x1'],
  },

  // === ACCESORIOS ===
  {
    id: 19,
    name: 'Mamadera Avent Natural 260ml',
    price: 12000,
    discount: 0,
    img: 'https://placehold.co/400x400/e0f7fa/00695c?text=Mamadera+Avent',
    description:
      'Mamadera Philips Avent Natural 260ml.\n\nTetina de flujo natural que imita el pecho materno.\n\nSistema anti-cólicos con válvula.\n\nFácil de limpiar y armar.',
    category: 'Accesorios',
    url: 'mamadera-avent-natural-260ml',
    units: ['x1', 'x2'],
  },
  {
    id: 20,
    name: 'Chupete Avent Ultra Air 0-6m',
    price: 5500,
    discount: 0,
    img: 'https://placehold.co/400x400/e0f7fa/00695c?text=Chupete+Avent',
    description:
      'Chupete Philips Avent Ultra Air para 0-6 meses.\n\nDiseño ultra liviano y aireado.\n\nOrificios extra grandes para la circulación del aire.\n\nTetina simétrica de silicona.',
    category: 'Accesorios',
    url: 'chupete-avent-ultra-air-0-6m',
    units: ['x1', 'x2'],
  },
  {
    id: 21,
    name: 'Babero Impermeable con Bolsillo',
    price: 2800,
    discount: 15,
    img: 'https://placehold.co/400x400/e0f7fa/00695c?text=Babero',
    description:
      'Babero impermeable con bolsillo recolector.\n\nMaterial suave y fácil de limpiar.\n\nCierre ajustable con broches.\n\nIdeal para la hora de la comida.',
    category: 'Accesorios',
    url: 'babero-impermeable-con-bolsillo',
    units: ['x1', 'x3', 'x6'],
  },
]

export const getProducts = async () => {
  return products
}

export const getProductsByCategory = async (category: string) => {
  return products.filter((p) => p.category === category)
}

export const getProductBySlug = async (slug: string) => {
  return products.find((p) => p.url === slug) || null
}
