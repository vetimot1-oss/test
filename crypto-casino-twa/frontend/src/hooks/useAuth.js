import { useEffect, useState } from 'react'
import { useTelegram } from './useTelegram'
import { authenticateWithTelegram } from '../utils/api'

export function useAuth() {
  const { initData } = useTelegram()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!initData) {
      setIsLoading(false)
      return
    }

    authenticateWithTelegram(initData)
      .then(response => {
        setUser(response.data.user)
        localStorage.setItem('token', response.data.token)
      })
      .catch(err => {
        console.error('Auth error:', err)
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
  }, [initData])

  return { user, isLoading, error }
}
