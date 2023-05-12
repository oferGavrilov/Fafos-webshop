import { utilService } from "./util.service"
import { CategoriesData, Product } from "@/models/products.model"
import products from '../data/products.json'
import hotCategoriesData from '../hot-categories.json'
import collectionsData from '../collections.json'
import { Filter } from "@/models/filter.model"

export const productService = {
      getAllProducts,
      getCategoriesData,
      getCollections,
      getEmptyFilter,
      getProductById
}

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

function getProductById(id: string) {
      return products.find(product => product.id === id)
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

function getCategoriesData() {
      const categoriesWithId = hotCategoriesData.map((item) => {
            return item = { ...item, id: utilService.makeId() } as CategoriesData
      })
      return categoriesWithId
}
function getCollections() {
      return collectionsData
}
