import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

export default function AnaliseCompetitiva() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Análise Competitiva
        </h1> 
      </main>

      <Footer />
    </div>
  )
}
