"use client"

import styles from "./balance-display.module.css"

interface BalanceDisplayProps {
  balance: number
}

export function BalanceDisplay({ balance }: BalanceDisplayProps) {
  const [integer, fraction] = balance.toFixed(2).split(".")

  return (
    <div className={styles.balanceWrap}>
      <p className={styles.balanceLabel}>Ваш баланс</p>
      <div className={styles.balanceAmount}>
        <svg 
          className={styles.tonIcon} 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path 
            d="M12 2L3 9L12 22L21 9L12 2Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          <path 
            d="M3 9H21" 
            stroke="white" 
            strokeWidth="2"
          />
          <path 
            d="M12 2V22" 
            stroke="white" 
            strokeWidth="2"
          />
        </svg>
        <span className={styles.balanceInteger}>{integer}</span>
        <span className={styles.balanceFraction}>.{fraction}</span>
      </div>
    </div>
  )
}
