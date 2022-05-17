import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

import Splitwise from '../../assets/images/splitwise.jpg'
import PicPay from '../../assets/images/picpay.jpg'
import Organizze from '../../assets/images/organizze.jpg'
import MeuDinheiro from '../../assets/images/meudinheiro.jpg'

export default function AnaliseCompetitiva() {
  const analysis = [
    {
      id: 1, 
      link: 'https://www.splitwise.com/',
      name: 'Splitwise', 
      logo: Splitwise,
      description: 'Facilita a divisão de contas com amigos e familiares. Organiza todas as suas despesas compartilhadas em um só lugar, para que todos possam ver a quem devem.',
      positives: [
        'Armazenamento de dados na nuvem podendo ser acessado em qualquer lugar: no iPhone, Android ou no computador.',
        'Integração entre vários usuários',
        'Navegação offline',
        'Integração com pagamentos',
        'Calculo de saldos totais',
        'Simplificação das dívidas',
        'Categorização das despesas'
      ],
      negatives: [
        'Muitos dados na mesma tela'
      ],
      conclusion: ''
    },
    {
      id: 3, 
      link: 'https://picpay.com/site',
      name: 'PicPay', 
      logo: PicPay,
      description: 'Funciona como uma carteira digital. O programa permite fazer compras pelo smartphone com cartão de crédito ou valor de transferência',
      positives: [
        'Opção de compartilhar os gastos'
      ],
      negatives: [''],
      conclusion: ''
    },
    {
      id: 4, 
      link: 'https://www.organizze.com.br/',
      name: 'Organizze', 
      logo: Organizze,
      description: 'Organiza o dinheiro em tempo real oferecendo práticidade e segurança, com a garantia de controle total das suas finanças.',
      positives: [
        'Alertas: Receba alertas de todas as suas contas a pagar e dê adeus aos juros',
        'Relatórios: Resumos incríveis, com gráficos simples e completos',
        'Categorização dos gastos',
        'Bem organizado'
      ],
      negatives: [
        'Muita informação e opções',
        'É pago'
      ],
      conclusion: ''
    },
    {
      id: 5, 
      link: 'https://www.meudinheiroweb.com.br/',
      name: 'Meu Dinheiro', 
      logo: MeuDinheiro,
      description: '',
      positives: [
        'Controle de Metas',
        'Centro de Custos e Lucros'
      ],
      negatives: [
        'É pago'
      ],
      conclusion: ''
    }
  ];

  const createPositivesAndNegatives = (max, competitor) => {
    for (var i = 1; i<=max; i++) {
      console.log(max, i)
      return (
        <tr key={`A${i}`}>
          <td></td>
          <td></td>
          <td>{competitor.positives[i]}</td>
          <td>{competitor.negatives[i]}</td>
          <td></td>
        </tr>
      )
    }
  }

  const createCompetitor = (competitor) => {
    const max_height = competitor.positives.length > competitor.negatives.length ? competitor.positives.length : competitor.negatives.length;
    
    return (
      <>
        <tr key={competitor.id}>
          <td rowSpan={max_height}>
            <Link href={competitor.link}>
              <a target="_blank">
                <Image src={competitor.logo} alt={`${competitor.name} Logo`} />
                <p>{competitor.name}</p>
              </a>
            </Link>
          </td>
          <td rowSpan={max_height}>{competitor.description}</td>
          <td>{competitor.positives[0]}</td>
          <td>{competitor.negatives[0]}</td>
          <td rowSpan={max_height}>{competitor.conclusion}</td>
        </tr>
        {createPositivesAndNegatives(max_height, competitor)}
      </>
    );
  }
   
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Análise Competitiva</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Análise Competitiva
        </h1> 

        <table>
          <thead>
            <tr>
              <th>Concorrente</th>
              <th>Descrição</th>
              <th>Pontos Positivos</th>
              <th>Pontos Negativos</th>
              <th>Conclusão</th>
            </tr>
          </thead>

          <tbody>
            {analysis.map((analyze) => createCompetitor(analyze))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  )
}
