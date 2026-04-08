"use client"

import { Gift, ChevronRight } from "lucide-react"
import styles from "./blockchain-section.module.css"

export function BlockchainSection() {
  return (
    <div className={styles.sectionContainer}>
      {/* Section Label */}
      <div className={styles.centerLabel}>
        <div className={styles.line} />
        <span className={styles.smallLabel}>Блокчейн</span>
        <div className={styles.line} />
      </div>

      {/* Blockchain Grid */}
      <div className={styles.blockchainGrid}>
        <div className={styles.blockchainItem}>
          <Gift size={32} className={styles.giftIcon} />
        </div>
        <div className={styles.blockchainItem}>
          <ChevronRight size={24} className={styles.chevronIcon} />
        </div>
      </div>
    </div>
  )
}
