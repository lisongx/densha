import Head from 'next/head'
import Player from '../components/Player'
import LEDText from '../components/LEDText'

import styles from '../styles/Home.module.css'
import classNames from "classnames"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>車 Che Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classNames("crt", styles.main)}>
        <section className={styles.densha}>
          <Player />

          <LEDText />

          <div className={styles.led}>
          </div>

          <div className={styles.image}>
          </div>
        </section>
      </main>
    </div>
  )
}
