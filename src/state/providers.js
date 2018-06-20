import { Provider } from 'cerebral'
import axios from 'axios'

export const http = Provider({
  get(...args) {
    return axios.get(...args)
  }
})

export const storage = Provider({
  get(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
})
