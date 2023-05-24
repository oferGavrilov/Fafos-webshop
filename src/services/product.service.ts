import { makeId } from "../utils/util.service"
import { CategoriesData, Product } from "../models/products.model"
import products from '../data/products.json'
import hotCategoriesData from '../hot-categories.json'
import collectionsData from '../collections.json'
import { Filter } from "../models/filter.model"

// eslint-disable-next-line import/prefer-default-export
export const productService = {
      getAllProducts,
      getCategoriesData,
      getCollections,
      getEmptyFilter,
      getProductById,
      isInStock,
      getAmountFromStock
}

function getAllProducts (filter: Filter = getEmptyFilter(), sort = '') {
      let filteredProducts: Product[] = products.slice()
      if (filter.category && filter.category !== 'all-swimwear') {
            filteredProducts = products.filter(product => product.category === filter.category)
      }
      if (sort !== 'none') {
            filteredProducts = setSort(sort, filteredProducts)
      }
      return filteredProducts
}

function getProductById (id: string) {
      return products.find(product => product.id === id)
}

function getEmptyFilter () {
      return { category: '' }
}

function setSort (sort: string, products: Product[]) {
      switch (sort) {
            case 'title-ascending': return products.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
            case 'title-descending': return products.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
            case 'price-ascending': return products.sort((a, b) => a.price - b.price)
            case 'price-descending': return products.sort((a, b) => b.price - a.price)
            default: return products
      }
}

function getCategoriesData () {
      const categoriesWithId = hotCategoriesData.map((item) => item = { ...item, id: makeId() } as CategoriesData)
      return categoriesWithId
}
function getCollections () {
      return collectionsData
}

function isInStock (id: string, itemId: string, size: string, itemAmount: number) {
      const amount = getAmountFromStock(id, itemId, size)
      return amount >= itemAmount
}

function getAmountFromStock (id: string, itemId: string, size: string) {
      const product = products.find(product => product.id === id)
      const { quantity } = product.inventory.find(item => item.id === itemId)
      return quantity.find(item => item.size === size).amount
}
