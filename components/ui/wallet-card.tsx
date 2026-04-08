"use client"

import { Download, Upload } from "lucide-react"
import styles from "./wallet-card.module.css"

export function WalletCard() {
  return (
    <div className={styles.cardContainer}>
      {/* Wallet Header */}
      <div className={styles.walletRow}>
        <span className={styles.walletTitle}>Кошелек</span>
        <button className={styles.connectBtn}>Подключить</button>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionsRow}>
        <button className={styles.actionBtn}>
          <Download size={18} />
          <span>Пополнить</span>
        </button>
        <button className={styles.actionBtn}>
          <Upload size={18} />
          <span>Вывести</span>
        </button>
      </div>

      {/* Transfer Button */}
      <button className={styles.transferBtn}>
        Перевод
      </button>
    </div>
  )
}
