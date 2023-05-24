/* eslint-disable no-unused-expressions */
import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
      ? '/api/'
      : '//localhost:3000/api/products'

let axiosInstance = axios.create({ withCredentials: true })

export const httpService = {
      get (endpoint, data ) {
            return ajax(endpoint, 'GET', data)
      }

}

async function ajax (endpoint, method = 'GET', data = null) {
      try {
            const res = await axiosInstance({
                  url: `${BASE_URL}${endpoint}`,
                  method,
                  data,
                  params: (method === 'GET') ? data : null
            })
            return res.data
      } catch (err) {
            console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
            console.dir(err)
            if (err.response && err.response.status === 401) {
                  sessionStorage.clear()
                  window.location.assign('/')
            }
            throw err
      }
}
