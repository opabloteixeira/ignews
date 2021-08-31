import Head from 'next/head';

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Home | ig.news
        </title>
      </Head> 
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>
            👏 Hew, welcome
            </span>
            <h1>New about the <span>React</span> world.</h1>
            <p>
              get access to all the publications <br />
              <span>for $9.90 month</span>
            </p>
          </section>
          <img src="/images/avatar.svg" alt="Girl coding" />
        </main>
    
    </>
  )
}