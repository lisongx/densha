import Head from 'next/head'
import Player from '../components/Player'
import LEDText from '../components/LEDText'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Densha Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Player />

        <LEDText />

        <div className={styles.led}>
        </div>

        <div className={styles.image}>
        </div>

      </main>
    </div>
  )
}
