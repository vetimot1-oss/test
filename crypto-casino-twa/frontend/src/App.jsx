import { useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram'
import { useAuth } from './hooks/useAuth'
import Home from './pages/Home'

export default function App() {
  const { webApp } = useTelegram()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (webApp) {
      webApp.ready()
      webApp.expand()
    }
  }, [webApp])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin">⏳</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0c0e18]">
      {user ? <Home /> : <div>Authenticating...</div>}
    </main>
  )
}
