
export interface ICarousel {
      imgUrl: string[] | string
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
      id: string
      imgUrl: string
      description: string
      details: string
      model: string
      title: string
      price: number
      category: string
      inventory: Inventory[]
      _id?: string
      images?: string[]
      quantity?: Quantity[]
      bulletColor: string
      color: string
      pairs?:{
            id: string
            itemId: string
      }
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
      uid?: string
      itemId: string
      bulletColor: string
      color: string;
      id: string;
      images: string[];
      size: string;
      title: string;
      price: number;
      quantity?: number;
}