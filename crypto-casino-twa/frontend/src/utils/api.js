import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
client.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authenticateWithTelegram = (initData) => {
  return client.post('/api/auth/telegram', { initData })
}

export const getMe = () => {
  return client.get('/api/users/me')
}

export const getBalance = () => {
  return client.get('/api/users/me/balance')
}

export default client
