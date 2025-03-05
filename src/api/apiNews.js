import axios from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async ({ signal, page_number = 1, page_size = 10, category = 'All', keywords = '' }) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      signal,
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getCategories = async (signal) => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      signal,
      params: {
        apiKey: API_KEY,
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}
