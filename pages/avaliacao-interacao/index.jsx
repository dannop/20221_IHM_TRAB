import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';

export default function AvaliacaoInteracao() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Avaliação da Interação</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Avaliação da Interação
        </h1>

        <p className={styles.description}>
          Resultados da pesquisa realizada para avaliar a interação do usuário no aplicativo.
        </p>

        <div className={styles.grid}>
          <Link href="/avaliacao-interacao/first-click">
            <a className={styles.card}>
              <h2>First Click &rarr;</h2>
              <p>Método de avaliação First Click.</p>
            </a>
          </Link>
          <Link href="/avaliacao-interacao/avaliacao-heuristica">
            <a className={styles.card}>
              <h2>Avaliação Heurística &rarr;</h2>
              <p>Método de inspeção: Avaliação Heurística.</p>
            </a>
          </Link>
          <Link href="/avaliacao-interacao/teste-usabilidade">
            <a className={styles.card}>
              <h2>Teste de Usabilidade &rarr;</h2>
              <p>Método de observação: Teste de Usabilidade.</p>
            </a>
          </Link>
        </div> 
      </main>
      
      <Footer />
    </div>
  )
}
