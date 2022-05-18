import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

export default function Questionario() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Questionário
        </h1> 

        <p className={styles.description}>
          Perguntas para esclarecer dúvidas relacionadas ao Desk Research e a Análise Competitiva
        </p>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmsazwfVEpFKnJTF_K28JofXcoX_uAM2rBsLkdec7s2sGoWA/viewform?embedded=true" width="640" height="2100" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
      </main>

      <Footer />
    </div>
  )
}
