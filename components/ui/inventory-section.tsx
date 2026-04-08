"use client"

import { Gift, ChevronRight } from "lucide-react"
import styles from "./inventory-section.module.css"

export function InventorySection() {
  return (
    <div className={styles.sectionContainer}>
      {/* Section Label */}
      <div className={styles.centerLabel}>
        <div className={styles.line} />
        <span className={styles.smallLabel}>Инвентарь</span>
        <div className={styles.line} />
      </div>

      {/* Inventory Grid */}
      <div className={styles.inventoryGrid}>
        <div className={styles.inventoryItem}>
          <Gift size={32} className={styles.giftIcon} />
        </div>
        <div className={styles.inventoryItem}>
          <Gift size={32} className={styles.giftIcon} />
        </div>
        <div className={styles.inventoryItem}>
          <ChevronRight size={24} className={styles.chevronIcon} />
        </div>
      </div>
    </div>
  )
}
