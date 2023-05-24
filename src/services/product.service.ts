import { makeId } from "../utils/util.service"
import { httpService } from "./http.service"
import { CategoriesData, Product } from "../models/products.model"
import productsJson from '../data/products.json'
import hotCategoriesData from '../hot-categories.json'
import collectionsData from '../collections.json'
import { Filter } from "../models/filter.model"

// eslint-disable-next-line import/prefer-default-export
export const productService = {
      getAllProducts,
      setSort,
      getCategoriesData,
      getCollections,
      getEmptyFilter,
      getProductById,
      isInStock,
      getAmountFromStock
}

function getAllProducts (products:Product[] = null, filter: Filter = getEmptyFilter(), sort = '' ) {
      console.log('products', products)
      let filteredProducts: Product[] = products?.slice() || productsJson.slice()
      if (filter.category && filter.category !== 'all-swimwear') {
            filteredProducts = products.filter(product => product.category === filter.category)
      }
      if (sort !== 'none') {
            filteredProducts = setSort(sort, filteredProducts)
      }
      return filteredProducts
}

async function getProductById (id: string) {
      // eslint-disable-next-line no-return-await
      return await httpService.get(`products/${  id}`)
      return productsJson.find(product => product.id === id)
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
      const product = productsJson.find(product => product.id === id)
      const { quantity } = product.inventory.find(item => item.id === itemId)
      return quantity.find(item => item.size === size).amount
}
