import { useEffect, useState } from 'react'

export function useTelegram() {
  const [webApp, setWebApp] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const app = window.Telegram?.WebApp
    if (app) {
      setWebApp(app)
      app.ready()
      
      const tgUser = app.initDataUnsafe?.user
      if (tgUser) {
        setUser({
          id: tgUser.id,
          firstName: tgUser.first_name,
          lastName: tgUser.last_name,
          username: tgUser.username,
          photoUrl: tgUser.photo_url,
          isPremium: tgUser.is_premium,
        })
      }
    }
  }, [])

  return {
    webApp,
    user,
    initData: window.Telegram?.WebApp?.initData,
  }
}
