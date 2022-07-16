import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';

export default function Informacoes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Informações</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          HMW - How Might We...
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            Como podemos ajudar as pessoas a controlarem suas dívidas,<br/>planejando melhor seus gastos,<br/>e lembrar das contas e recebimentos pendetes?
          </code>
        </p>

        <h1 className={styles.title}>
          Metas de Design
        </h1> 
        <div className={styles.info}>
          <ol>
            <li>Eficiência</li>
            <li>Segurança</li>
            <li>Eficácia</li>
            <li>Utilidade</li>
            <li>Memorização</li>
            <li>Aprendizagem</li>
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  )
}
