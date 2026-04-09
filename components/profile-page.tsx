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
        <svg className={styles.navBgShape} width="320" height="85" viewBox="0 0 320 85" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <foreignObject x="-30" y="-30" width="380" height="145">
            <div style={{backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)', clipPath: 'url(#bgblur_nav_clip)', height: '100%', width: '100%'}} />
          </foreignObject>
          <g>
            <path d="M160 0C171.5 0 181.8 5.5 188 14C193 20.5 199.5 26 208 26H300C310 26 320 34 320 44V67C320 77 310 85 300 85H20C10 85 0 77 0 67V44C0 34 10 26 20 26H112C120.5 26 127 20.5 132 14C138.2 5.5 148.5 0 160 0Z" fill="rgba(10, 0, 0, 0.5)"/>
            <path d="M160 0.5C171.3 0.5 181.4 5.9 187.5 14.3C192.6 20.9 199.2 26.5 208 26.5H300C309.7 26.5 319.5 34.3 319.5 44V67C319.5 76.7 309.7 84.5 300 84.5H20C10.3 84.5 0.5 76.7 0.5 67V44C0.5 34.3 10.3 26.5 20 26.5H112C120.8 26.5 127.4 20.9 132.5 14.3C138.6 5.9 148.7 0.5 160 0.5Z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          </g>
          <defs>
            <clipPath id="bgblur_nav_clip" transform="translate(30 30)">
              <path d="M160 0C171.5 0 181.8 5.5 188 14C193 20.5 199.5 26 208 26H300C310 26 320 34 320 44V67C320 77 310 85 300 85H20C10 85 0 77 0 67V44C0 34 10 26 20 26H112C120.5 26 127 20.5 132 14C138.2 5.5 148.5 0 160 0Z"/>
            </clipPath>
          </defs>
        </svg>

        {/* Navigation Items */}
        <div className={styles.navItems}>
          <div className={styles.navItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12,2 2,7 2,17 12,22 22,17 22,7"/>
            </svg>
            <span>Стайкинг</span>
          </div>
          <div className={styles.navItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
                <path d="M13 19l6-6"/>
                <path d="M16 16l4 4"/>
                <path d="M19 21a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <span>Онлайн</span>
          </div>

          <div className={styles.navItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            <svg viewBox="0 0 24 24" fill="currentColor">
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
