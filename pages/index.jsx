import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Footer from '../components/footer/index'
import PayMe from '../assets/images/PayMe.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={PayMe} alt="Pay.me Logo" width={100} height={100} />
        
        <h1 className={styles.title}>
          Pay.me
        </h1>
        
        <p className={styles.description}>
          <code className={styles.code}>Simplificando</code> seu dinheiro
        </p>

        <div className={styles.grid}>
          <Link href="informacoes">
            <a className={styles.card}>
              <h2>Informações &rarr;</h2>
              <p>How Might We e Metas de Design.</p>
            </a>
          </Link>
          <Link href="desk-research">
            <a className={styles.card}>
              <h2>Desk Research &rarr;</h2>
              <p>Certezas, suposições e dúvidas.</p>
            </a>
          </Link>

          <Link href="analise-competitiva">
            <a className={styles.card}>
              <h2>Análise Competitiva &rarr;</h2>
              <p>Pontos positivos e negativos dos concorrentes.</p>
            </a>
          </Link>

          <Link href="questionario">
            <a className={styles.card}>
              <h2>Questionário &rarr;</h2>
              <p>Formulário e resultados.</p>
            </a>
          </Link>

          <Link href="grupo-focal">
            <a className={styles.card}>
              <h2>Grupo Focal &rarr;</h2>
              <p>Resultados da técnica de análise.</p>
            </a>
          </Link>

          <Link href="personas">
            <a className={styles.card}>
              <h2>Personas e Cenários &rarr;</h2>
              <p>Resultados do questionário e grupo focal.</p>
            </a>
          </Link>

          <Link href="prototipo">
            <a className={styles.card}>
              <h2>Protótipo &rarr;</h2>
              <p>Fluxo prototipado do Aplicativo.</p>
            </a>
          </Link>
        </div>
      </main>

     <Footer />
    </div>
  )
}
