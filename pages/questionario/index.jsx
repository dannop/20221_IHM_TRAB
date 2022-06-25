import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

import Result from '../../assets/images/result.png';

export default function Personas() {
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
          Formulário para esclarecer dúvidas relacionadas ao Desk Research e a Análise Competitiva
        </p>

        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScmsazwfVEpFKnJTF_K28JofXcoX_uAM2rBsLkdec7s2sGoWA/viewform?usp=sf_link">
          <a target="_blank">
            <p>Iniciar Formulário</p>
          </a>
        </Link>

        <p className={styles.description}>
          Resultados
        </p>

        <Image src={Result} alt={`Resultados do Formulário`} />
      </main>

      <Footer />
    </div>
  )
}
