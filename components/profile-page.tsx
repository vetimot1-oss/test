"use client"

import { Avatar } from "@/components/ui/avatar"
import { BalanceDisplay } from "@/components/ui/balance-display"
import { WalletCard } from "@/components/ui/wallet-card"
import { InventorySection } from "@/components/ui/inventory-section"
import { BlockchainSection } from "@/components/ui/blockchain-section"
import { BottomNavigation } from "@/components/ui/bottom-navigation"
import styles from "./profile-page.module.css"

export default function ProfilePage() {
  return (
    <div className={styles.pageWrap}>
      {/* Red glow background effects */}
      <div className={styles.blurEffects}>
        <div className={styles.blurTop} />
        <div className={styles.blurMiddle} />
      </div>

      {/* Avatar Header */}
      <div className={styles.avatarHeader}>
        <Avatar 
          src="/photo_1_2026-04-07_23-03-26.jpg" 
          name="ensare" 
          subtitle="ensare" 
        />
      </div>

      {/* Balance Section */}
      <div className={styles.balanceSection}>
        <BalanceDisplay balance={0.00} />
      </div>

      {/* Main Card Area */}
      <div className={styles.mainCardArea}>
        <WalletCard />
      </div>

      {/* Inventory Section */}
      <InventorySection />

      {/* Blockchain Section */}
      <BlockchainSection />

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
