import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

export default function GrupoFocal() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Grupo Focal</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Grupo Focal
        </h1>

        <p className={styles.description}>
          Foi realizado um Grupo Focal discutindo sobre as perguntas no formulário e assim entender melhor a opnião sobre educação financeira no Brasil e a conexão do relacionamento entre pessoas e o dinheiro. Todos concordaram com os mesmos termos dos formulários.
        </p>

        <div className={styles.info}>
          <p>A reunião foi feita com 3 entrevistados</p>
          <ul>
            <li>Desempregado, sem conhecimentos sobre investimentos e que pega dinheiro emprestado;</li>
            <li>Empregado a pouco tempo, não faz investimos e empresta dinheiro;</li>
            <li>Empregado a muito tempo, faz investimentos e não tem hábito de emprestar dinheiro;</li>
          </ul>

          <p>Consenso geral</p>
          <ul>
            <li>As primeiras informações deveriam ser quem deve você e a quem você deve;</li>
            <li>Seria interessante ter dicas de como gerenciar melhor seu dinheiro;</li>
            <li>É muito importante ter datas nos empréstimos;</li>
            <li>Ter um lugar de fácil acesso aos gastos atuais e um histórico é interessante;</li>
            <li>Todos já passaram pela situação de dever ou estarem te devendo;</li>
          </ul>

          <p>Pontos importantes</p>
          <ul>
            <li>Lembretes na semana de vencimento da conta são importantes;</li>
            <li>O que imprestou dinheiro ficava sem saber como cobrar;</li>
            <li>Esses dados são bem sensíveis e devem ser protegidos;</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}
