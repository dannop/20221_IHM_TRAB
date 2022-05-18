import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

export default function Entrevista() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Entrevista</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Entrevista
        </h1>

        <p className={styles.description}>
          Pesquisa realizada para o desenvolvimento da ideia
        </p>
      </main>

      <Footer />
    </div>
  )
}
