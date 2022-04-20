import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function DeskResearch() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="/">
        <p>Voltar</p>
      </a>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Desk Research
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            Como podemos ajudar as pessoas a controlarem e planejarem melhor seus gastos, além de gerenciar empréstimos de dinheiro a conhecidos?
          </code>
        </p>
        
        <div className={styles.info}>
          <p>Certezas</p>
          <ul>
            <li>Os brasileiros ainda não possuem o hábito de poupar e fazer investimentos.</li>
            <li>Quem empresta dinheiro não tem controle sobre o retorno do dinheiro.</li>
          </ul>
          
          <p>Suposições</p>
          <ul>
            <li>Existe o sentimento de vergonha ao cobrar dinheiro emprestado de um conhecido.</li>
            <li>Eventualmente quem emprestou irá precisar do dinheiro de volta.</li>
          </ul>

          <p>Dúvidas</p>
          <ul>
            <li>Quem recebeu o dinheiro irá pagar se for cobrado?</li>
            <li>Até quando cobrar ou não cobrar é ofensivo a alguém?</li>
          </ul>
        </div>  
      </main>

      <footer className={styles.footer}>
        <a
          href="http://www.ic.uff.br/index.php/pt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por{' '}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
          Daniel Lessa e Eduardo Martins
        </a>
      </footer>
    </div>
  )
}
