
export interface ICarousel {
      imgUrl: string
      title: string
      price: number
      id: string
      itemId: string,
      color: string
      category: string
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
      _id?: string
      id: string
      imgUrl: string
      title: string
      price: number
      category: string
      inventory: Inventory[]
}

interface Inventory {
      id: string
      color: string
      bulletColor: string
      imgUrl: string[]
      quantity: Quantity[]
}

interface Quantity {
      size: string
      amount: number
}

export interface Cart  {
      itemId: string
      bulletColor: string
      color: string;
      id: string;
      imgUrl: string[];
      size: string;
      title: string;
      price: number;
      quantity?: number;
}