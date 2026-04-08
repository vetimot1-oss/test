"use client"

import Image from "next/image"
import styles from "./avatar.module.css"

interface AvatarProps {
  src: string
  name: string
  subtitle?: string
}

export function Avatar({ src, name, subtitle }: AvatarProps) {
  return (
    <div className={styles.avatarHeader}>
      <div className={styles.avatarImgWrapper}>
        <Image
          src={src}
          alt={name}
          width={60}
          height={60}
          className={styles.avatarImg}
        />
      </div>
      <p className={styles.avatarName}>{name}</p>
      {subtitle && <p className={styles.avatarSubtitle}>{subtitle}</p>}
    </div>
  )
}
