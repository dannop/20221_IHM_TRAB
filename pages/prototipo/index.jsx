import Head from 'next/head';

import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

export default function Prototipo() {
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
          Protótipo
        </h1> 

        <iframe className='figmaFrame' width="800" height="1000" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXx4BuLMOO3D334vTWBbyjR%2FPay.me-Aplicativo%3Fpage-id%3D1%253A2%26node-id%3D2%253A68%26viewport%3D2051%252C-2738%252C0.91%26scaling%3Dmin-zoom%26starting-point-node-id%3D2%253A68%26show-proto-sidebar%3D1" allowFullScreen></iframe>
      </main>

      <Footer />
    </div>
  )
}
