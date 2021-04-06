import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Player from '../components/Player'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Densha Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Player />
        <img src="/densha.png" className={styles.densha} />
      </main>
    </div>
  )
}
