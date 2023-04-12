import { utilService } from "./util.service";

import { CarouselData, CategoriesData, Product } from "@/models/products.model";
import products from '../data/products.json'
import carouselData from '../carousel-data.json'
import hotCategoriesData from '../hot-categories.json'
import collectionsData from '../collections.json'
import { Filter } from "@/models/filter.model";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const PRODUCT_KEY = 'product_DB'

export const productService = {
      // query,
      getAllProducts,
      getCarouselData,
      getCategoriesData,
      getCollections,
      getEmptyFilter
}

// const options = {
//       method: 'GET',
//       headers: {
//             'X-RapidAPI-Key': API_KEY || '24742ecb58mshe745177d0d1ba7dp182a90jsnd43311155beb',
//             'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
//       }
// };

// async function query() {
//       let data = utilService.loadFromStorage(PRODUCT_KEY)
//       if (data) return data
//       try {
//             data = await fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
//                   .then((response) => response.json())
//             utilService.saveToStorage(PRODUCT_KEY, data.products)
//             return data.products
//       } catch (err) {
//             console.log(err)
//       }
// }

function getAllProducts(filter: Filter = getEmptyFilter(), sort: string = '') {
      let filteredProducts: Product[] = products.slice()
      if (filter.category && filter.category !== 'all-swimwear') {
            filteredProducts = products.filter(product => product.category === filter.category)
      }
      if (sort !== 'none') {
            filteredProducts = setSort(sort, filteredProducts)
      }
      return filteredProducts
}

function getEmptyFilter() {
      return { category: '' }
}

function setSort(sort: string, products: Product[]) {
      switch (sort) {
            case 'title-ascending': return products.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
            case 'title-descending': return products.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
            case 'price-ascending': return products.sort((a, b) => a.price - b.price)
            case 'price-descending': return products.sort((a, b) => b.price - a.price)
            default: return products
      }
}

function getCarouselData() {
      const carouselWithId = carouselData.map((item) => {
            return item = { ...item, id: utilService.makeId() } as CarouselData
      })
      return carouselWithId
}

function getCategoriesData() {
      const categoriesWithId = hotCategoriesData.map((item) => {
            return item = { ...item, id: utilService.makeId() } as CategoriesData
      })
      return categoriesWithId
}
function getCollections() {
      return collectionsData
}

