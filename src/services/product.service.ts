import { httpService } from "./http.service"
import { Product } from "../models/products.model"
import productsJson from '../data/products.json'
import collectionsData from '../collections.json'
import carousel from '../carousel-data.json'
import { Filter } from "../models/filter.model"

const findOneUrl = process.env.NODE_ENV === 'production' ? 'https://fafos-webshop.vercel.app/api/product' : 'http://localhost:3000/api/product/'

// eslint-disable-next-line import/prefer-default-export
export const productService = {
      getCarouselData,
      setSort,
      getCollections,
      getEmptyFilter,
      getProductById,
      isInStock,
      getAmountFromStock,
      getProductsFromJson
}

function getProductsFromJson () {
      return productsJson
}

function getCarouselData () {
      return carousel

}

async function getProductById (id: string) {
      let res = await fetch(`${findOneUrl}/?id=${id}`, {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json'
            }
      })
      let data = await res.json()
      return data
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
