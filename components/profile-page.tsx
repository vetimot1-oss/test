"use client"

import Image from "next/image"
import styles from "./profile-page.module.css"

export default function ProfilePage() {
  return (
    <div className={styles.pageWrap}>
      {/* Red glow background effects */}
      <div className={styles.blurEffects}>
        <div className={styles.blurTop} />
      </div>

      {/* Avatar Header */}
      <div className={styles.avatarHeader}>
        <div className={styles.avatarRing}>
          <Image 
            src="/photo_1_2026-04-07_23-03-26.jpg" 
            alt="Avatar"
            width={60}
            height={60}
            className={styles.avatarImg}
          />
        </div>
        <p className={styles.avatarName}>ensare</p>
        <p className={styles.avatarSubtitle}>ensare</p>
      </div>

      {/* Balance Section */}
      <div className={styles.balanceSection}>
        <p className={styles.balanceLabel}>Ваш баланс</p>
        <div className={styles.balanceWrap}>
          <svg className={styles.tonIcon} viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M12 2L2 8.5L12 22L22 8.5L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M2 8.5H22" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8.5V22" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className={styles.balanceInteger}>0</span>
          <span className={styles.balanceFraction}>.00</span>
        </div>
      </div>

      {/* Main Glass Card */}
      <div className={styles.mainCardArea}>
        <div className={styles.glassCard}>
          {/* Diagonal light reflection */}
          <div className={styles.glassReflection} />
          
          {/* Wallet Header Row */}
          <div className={styles.walletRow}>
            <span className={styles.walletTitle}>Кошелек</span>
            <button className={styles.connectBtn}>Подключить</button>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionsRow}>
            <button className={styles.actionBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <span>Пополнить</span>
            </button>
            <button className={styles.actionBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              <span>Вывести</span>
            </button>
          </div>

          {/* Transfer Button */}
          <button className={styles.transferBtn}>
            Перевод
          </button>

          {/* Inventory Label */}
          <div className={styles.centerLabel}>
            <div className={styles.line} />
            <span className={styles.smallLabel}>Инвентарь</span>
            <div className={styles.line} />
          </div>

          {/* Inventory Grid */}
          <div className={styles.inventoryGrid}>
            <div className={styles.inventoryItem}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/>
                <path d="M12 3v12M12 3l4 4M12 3L8 7"/>
                <rect x="3" y="8" width="18" height="4" rx="1"/>
              </svg>
            </div>
            <div className={styles.inventoryItem}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/>
                <path d="M12 3v12M12 3l4 4M12 3L8 7"/>
                <rect x="3" y="8" width="18" height="4" rx="1"/>
              </svg>
            </div>
            <div className={styles.inventoryItemArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>

          {/* Blockchain Label */}
          <div className={styles.centerLabel}>
            <div className={styles.line} />
            <span className={styles.smallLabel}>Блокчейн</span>
            <div className={styles.line} />
          </div>

          {/* Blockchain Grid */}
          <div className={styles.inventoryGrid}>
            <div className={styles.inventoryItem}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/>
                <path d="M12 3v12M12 3l4 4M12 3L8 7"/>
                <rect x="3" y="8" width="18" height="4" rx="1"/>
              </svg>
            </div>
            <div className={styles.inventoryItem} />
            <div className={styles.inventoryItemArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation with SVG Shape */}
      <nav className={styles.bottomNav}>
        {/* SVG Background Shape */}
        <svg className={styles.navBgShape} width="318" height="101" viewBox="0 0 318 101" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <foreignObject x="-30" y="-30" width="378" height="161">
            <div style={{backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', clipPath: 'url(#bgblur_nav_clip)', height: '100%', width: '100%'}} />
          </foreignObject>
          <g>
            <path d="M159.5 0C172.697 0 184.381 6.47218 191.553 16.4154C197.049 24.0348 204.774 31 214.169 31H298C309.046 31 318 39.9543 318 51V81C318 92.0457 309.046 101 298 101H20C8.95431 101 4.83225e-07 92.0457 0 81V51C0 39.9543 8.95431 31 20 31H104.831C114.226 31 121.951 24.0348 127.447 16.4154C134.619 6.47218 146.303 0 159.5 0Z" fill="url(#paint0_nav)" fillOpacity="0.3"/>
            <path d="M159.5 0.25C172.613 0.25 184.223 6.68067 191.351 16.5615C196.858 24.196 204.648 31.2499 214.169 31.25H298C308.908 31.25 317.75 40.0924 317.75 51V81C317.75 91.9076 308.908 100.75 298 100.75H20C9.09238 100.75 0.25 91.9076 0.25 81V51C0.25 40.0924 9.09238 31.25 20 31.25H104.831C114.352 31.2499 122.142 24.196 127.649 16.5615C134.777 6.68066 146.387 0.25 159.5 0.25Z" stroke="url(#paint1_nav)" strokeOpacity="0.7" strokeWidth="0.5"/>
            <path d="M159.5 0.25C172.613 0.25 184.223 6.68067 191.351 16.5615C196.858 24.196 204.648 31.2499 214.169 31.25H298C308.908 31.25 317.75 40.0924 317.75 51V81C317.75 91.9076 308.908 100.75 298 100.75H20C9.09238 100.75 0.25 91.9076 0.25 81V51C0.25 40.0924 9.09238 31.25 20 31.25H104.831C114.352 31.2499 122.142 24.196 127.649 16.5615C134.777 6.68066 146.387 0.25 159.5 0.25Z" stroke="url(#paint2_nav)" strokeOpacity="0.7" strokeWidth="0.5"/>
          </g>
          <defs>
            <clipPath id="bgblur_nav_clip" transform="translate(30 30)">
              <path d="M159.5 0C172.697 0 184.381 6.47218 191.553 16.4154C197.049 24.0348 204.774 31 214.169 31H298C309.046 31 318 39.9543 318 51V81C318 92.0457 309.046 101 298 101H20C8.95431 101 4.83225e-07 92.0457 0 81V51C0 39.9543 8.95431 31 20 31H104.831C114.226 31 121.951 24.0348 127.447 16.4154C134.619 6.47218 146.303 0 159.5 0Z"/>
            </clipPath>
            <radialGradient id="paint0_nav" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70 -26) rotate(60) scale(148 148)">
              <stop stopColor="#11151A"/>
              <stop offset="1" stopColor="#040506"/>
            </radialGradient>
            <radialGradient id="paint1_nav" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.5 11) rotate(22.6679) scale(192.359 61.0951)">
              <stop stopColor="#35FFD0"/>
              <stop offset="1" stopColor="#35FFD0" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="paint2_nav" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290.5 0) rotate(151.918) scale(168.882 85.9671)">
              <stop stopColor="#4093FF"/>
              <stop offset="1" stopColor="#497FFF" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>

        {/* Navigation Items */}
        <div className={styles.navItems}>
          <div className={styles.navItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12,2 2,7 2,17 12,22 22,17 22,7"/>
            </svg>
            <span>Стайкинг</span>
          </div>
          <div className={styles.navItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="11" width="4" height="9" rx="1"/>
              <rect x="14" y="11" width="4" height="9" rx="1"/>
              <circle cx="8" cy="6" r="3"/>
              <circle cx="16" cy="6" r="3"/>
            </svg>
            <span>Соло</span>
          </div>

          {/* Center Button */}
          <div className={styles.navItemCenter}>
            <div className={styles.centerButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
                <path d="M13 19l6-6"/>
                <path d="M16 16l4 4"/>
                <path d="M19 21a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <span>Онлайн</span>
          </div>

          <div className={styles.navItem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7"/>
              <path d="M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7"/>
              <path d="M4 22h16"/>
              <path d="M10 22V10"/>
              <path d="M14 22V10"/>
              <path d="M8 6h8a4 4 0 014 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1a4 4 0 014-4z"/>
            </svg>
            <span>Турнир</span>
          </div>
          <div className={`${styles.navItem} ${styles.navItemActive}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="8" r="4"/>
              <path d="M20 21a8 8 0 10-16 0"/>
            </svg>
            <span>Профиль</span>
            <div className={styles.activeIndicator} />
          </div>
        </div>
      </nav>
    </div>
  )
}
