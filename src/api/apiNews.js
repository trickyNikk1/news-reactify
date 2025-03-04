import axios from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async (signal) => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
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
