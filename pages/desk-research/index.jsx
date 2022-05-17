import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

export default function DeskResearch() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Desk Research</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Desk Research
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>
            Como podemos ajudar as pessoas a controlarem suas dívidas e planejarem melhor seus gastos, além de lembrar contas futuras e recebimentos pendetes?
          </code>
        </p>
        
        <div className={styles.info}>
          <p>Certezas</p>
          <ul>
            <li>Os brasileiros ainda não possuem o hábito de poupar e fazer investimentos.</li>
            <li>Na maior parte dos casos é gerado desconforto ao cobrar dívidas a amigos e familiares.</li>
            <li>{`Uma pesquisa do Federal Reserve — o banco central dos EUA — em 2019 demonstrou que, frente a uma 
              despesa hipotética de US$ 400 que não pudesse ser paga de imediato, a segunda medida mais comum era pedir 
              emprestado a um amigo ou familiar (a primeira opção foi lançar a dívida no cartão de crédito). Durante a pandemia, 
              as pessoas podem estar mais propensas a procurar pessoas de confiança para pedir ajuda.`}</li>
            <li>De acordo com especialistas Norte Americanos a conversa sobre dinheiro ainda é um tabu na sociedade.</li>
          </ul>
          
          <p>Suposições</p>
          <ul>
            <li>Existe o sentimento de vergonha ao cobrar dinheiro emprestado de um conhecido.</li>
            <li>Eventualmente quem emprestou irá precisar do dinheiro de volta e não terá certeza se vai receber.</li>
            <li>Um relacionamento pode ser alterado pois irá existir um sentimento de poder sobre alguém que possue uma dívida.</li>
            <li>Planejar o pagamento de uma dívida pode evitar futuros problemas.</li>
          </ul>

          <p>Dúvidas</p>
          <ul>
            <li>A pessoa que deve irá pagar se for lembrado que possue uma dívida?</li>
            <li>Até quando cobrar ou não cobrar é ofensivo a alguém?</li>
            <li>Dinheiro é um tabu entre a sociedade?</li>
            <li>Com que frequência esquecemos de pagar uma conta ou dívida?</li>
            <li>Exibir datas com clareza e notificar irão ajudar a pagar as contas?</li>
          </ul>
        </div>  
      </main>
      
      <Footer />
    </div>
  )
}
