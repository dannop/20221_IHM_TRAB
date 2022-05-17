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
          <Link href="desk-research">
            <a className={styles.card}>
              <h2>Desk research &rarr;</h2>
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
              <p>Responda aqui um formulário para auxiliar no projeto.</p>
            </a>
          </Link>

          <Link href="entrevista">
            <a className={styles.card}>
              <h2>Entrevista &rarr;</h2>
              <p>Apresentação, aquecimento, parte principal e conclusão.</p>
            </a>
          </Link>
        </div>
      </main>

     <Footer />
    </div>
  )
}