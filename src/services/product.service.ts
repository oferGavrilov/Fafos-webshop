import { utilService } from "./util.service";
import { CarouselData, CategoriesData, Product } from "@/models/products.model";
import products from '../data/products.json'
import carouselData from '../carousel-data.json'
import hotCategoriesData from '../hot-categories.json'
import collectionsData from '../collections.json'
import { Filter } from "@/models/filter.model";
import { ParsedUrlQuery } from "querystring";

export const productService = {
      getAllProducts,
      getCarouselData,
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
