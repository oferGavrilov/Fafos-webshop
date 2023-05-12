
export interface CarouselData {
      img: string
      title: string
      price: number
      id?: string
}

export interface CategoriesData {
      img: string
      title: string
      id?: string
}

export interface CollectionsData {
      img: string
      title: string
      id?: string
      category: string
}

export interface Product {
      id: string
      imgUrl: string
      title: string
      price: number
      category: string
      inventory: Inventory[]
}

interface Inventory {
      [x: string]: any
      id:string
      color: string
      bulletColor: string
      imgUrl: string[]
      quantity: Quantity[]
}

interface Quantity {
      size: string
      amount: number
}

export interface Cart  extends Product{
      quantity: number
}