export interface Product {
  id: number
  name: string
  price: number
  discount: number
  img: string
  description: string
  category: string
  url: string
  units: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}
