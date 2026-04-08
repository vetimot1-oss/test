"use client"

import { Diamond, Gamepad2, Swords, Trophy, User } from "lucide-react"
import styles from "./bottom-navigation.module.css"

const navItems = [
  { icon: Diamond, label: "Стайкинг", active: false },
  { icon: Gamepad2, label: "Соло", active: false },
  { icon: Swords, label: "Онлайн", active: false, center: true },
  { icon: Trophy, label: "Турнир", active: false },
  { icon: User, label: "Профиль", active: true },
]

export function BottomNavigation() {
  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`${styles.navItem} ${item.active ? styles.active : ""} ${item.center ? styles.centerItem : ""}`}
        >
          {item.center ? (
            <div className={styles.centerButton}>
              <item.icon size={24} />
            </div>
          ) : (
            <>
              <item.icon size={20} />
              <span className={styles.navLabel}>{item.label}</span>
            </>
          )}
        </button>
      ))}
    </nav>
  )
}
