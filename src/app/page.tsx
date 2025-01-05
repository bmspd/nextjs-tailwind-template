import Image from 'next/image'
import styles from './page.module.css'
import animationSrc from '/public/animation.gif'
import Logo from '/public/icons/logo.svg'
export default function Home() {
  return (
    <main className={styles.main}>
      <Image className={styles.animation} src={animationSrc} alt="Main animation" unoptimized />
      <h1 className={styles.text}>Template for Next.js</h1>
      <Logo width="300" height="auto" />
    </main>
  )
}
