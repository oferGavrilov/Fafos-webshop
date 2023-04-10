import { utilService } from "./util.service";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const PRODUCT_KEY = 'product_DB'

export const productService = {
      query
}
console.log(process.env.NEXT_PUBLIC_API_KEY)
const options = {
      method: 'GET',
      headers: {
            'X-RapidAPI-Key': API_KEY || '24742ecb58mshe745177d0d1ba7dp182a90jsnd43311155beb',
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
};


async function query() {
      let data = utilService.loadFromStorage(PRODUCT_KEY)
      if (data) return data
      try {
            data = await fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
                  .then((response) => response.json())
            utilService.saveToStorage(PRODUCT_KEY, data.products)
            return data.products
      } catch (err) {
            console.log(err)
      }
}
