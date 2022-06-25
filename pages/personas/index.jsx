import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

import PersonaFabio from '../../assets/images/FábioPerfil.jpg';
import PersonaFerdinando from '../../assets/images/FerdinandoPerfil.jpg';
import PersonaCarla from '../../assets/images/CarlaPerfil.jpg';

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
          Personas e Cenários
        </h1> 

        <Image src={PersonaFabio} alt={`Persona do Fábio`} />
        <Image src={PersonaFerdinando} alt={`Persona do Ferdinando`} />
        <Image src={PersonaCarla} alt={`Persona da Carla`} />
      </main>

      <Footer />
    </div>
  )
}
