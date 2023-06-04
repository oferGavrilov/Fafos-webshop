import { Product } from "../models/products.model"

const getProductsUrl = process.env.NODE_ENV === 'production' ? 'https://fafos-webshop.vercel.app/api/products' : '/api/products/'
const getProductUrl = process.env.NODE_ENV === 'production' ? 'https://fafos-webshop.vercel.app/api/product' : '/api/products/'

export const productService = {
      setSort,
      getEmptyFilter,
      getProductByIdAndItem,
      isInStock,
      getAmountFromStock,
      getProducts,
}

async function getProducts (category = 'all-swimwear') {
      let res = await fetch(`${getProductsUrl}/?category=${category}`, {
            method: 'GET',
            headers: {
                  'accept': 'application/json'
            }
      })
      let data = await res.json()
      return data
}

async function getProductById (id: string) {
      let res = await fetch(`${getProductUrl}/?id=${id}`, {
            method: 'GET',
            headers: {
                  'accept': 'application/json'
            }
      })
      let product = await res.json()
      return product
}

async function getProductByIdAndItem (id: string, itemId: string) {
      let res = await fetch(`${getProductUrl}/?id=${id}`, {
            method: 'GET',
            headers: {
                  'accept': 'application/json'
            }
      })
      let product = await res.json()
      const images = product?.inventory.filter(type => type.id === itemId).map(item => item.imgUrl).flat()
      const data = product?.inventory.find(type => type.id === itemId)
      return { ...product, images, ...data }
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

async function isInStock (id: string, itemId: string, size: string, itemAmount: number) {
      const amount = await getAmountFromStock(id, itemId, size)
      return amount >= itemAmount
}

async function getAmountFromStock (id: string, itemId: string, size: string) {
      const product = await getProductById(id)
      const { quantity } = product.inventory.find(item => item.id === itemId)
      return quantity.find(item => item.size === size).amount
}
