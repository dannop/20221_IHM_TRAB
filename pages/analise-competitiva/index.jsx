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
        'Armazenamento de dados na nuvem podendo ser acessado em qualquer lugar: no iPhone, Android ou no computador;',
        'Integração entre vários usuários;',
        'Navegação offline;',
        'Integração com pagamentos de outras plataformas;',
        'Cálculo de saldos totais;',
        'Simplificação das dívidas;',
        'Categorização das despesas;'
      ],
      negatives: [
        'Totalmente em inglês;',
        'Funcionalidades excluisvas na versão paga;'
      ],
      conclusion: 'A organização em categorias é uma ótima ideia para organizar de uma forma melhor o conteúdo. Além disso, a forma que é feita interação de vários usuários pode servir de inspiração, por exemplo da forma que é calculada a dívida entre usuários.'
    },
    {
      id: 3, 
      link: 'https://picpay.com/site',
      name: 'PicPay', 
      logo: PicPay,
      description: 'Funciona como uma carteira digital. O programa permite fazer compras pelo smartphone com cartão de crédito ou valor de transferência.',
      positives: [
        'Opção de compartilhar os gastos e cobrar depois, bem parecido com o acompanhamento que será feito;',
        'Conhecido pela sua segurança;',
        'Fácil utilização após a fase de adaptação;',
        'Tela de início mostrando as principais funcionalidades de forma bem acessível;'
      ],
      negatives: [
        'Muitas funcionalidades, podendo gerar uma confusão em um primeiro momento;',
        'Em alguns fluxos aparecem muitos dados nas telas, como por exemplo na loja;'
      ],
      conclusion: 'Podemos olhar bastante em como funciona o fluxo de dividir um gasto, pois parece ser bem eficiente e seguro.'
    },
    {
      id: 4, 
      link: 'https://www.organizze.com.br/',
      name: 'Organizze', 
      logo: Organizze,
      description: 'Organiza o dinheiro em tempo real oferecendo praticidade e segurança, com a garantia de controle total das suas finanças.',
      positives: [
        'Alertas: receba alertas de todas as suas contas a pagar e dê adeus aos juros;',
        'Relatórios: resumos incríveis, com gráficos simples e completos;',
        'Categorização dos gastos;',
        'Os menus são muito bem organizado;'
      ],
      negatives: [
        'É pago;'
      ],
      conclusion: 'Aplicativo muito bom para organizar despesas. Em questão de eficiência e utilidade é uma ótima referencia, principalmente observando os relatórios gerados.'
    },
    {
      id: 5, 
      link: 'https://www.meudinheiroweb.com.br/',
      name: 'Meu Dinheiro', 
      logo: MeuDinheiro,
      description: 'Sistema para controle financeiro online.',
      positives: [
        'Controle de Metas',
        'Centro de Custos e Lucros',
        'Bem organizado'
      ],
      negatives: [
        'É pago',
        'Poucas funcionalidades'
      ],
      conclusion: 'Visando a parte de eficácia, os resumos de custos e lucros são ótimas referências.'
    }
  ];

  const createList = (list) => {
    return (
      <ol>
        {list.map((element, index) => <li key={index}>{element}</li>)}
      </ol>
    );
  }

  const createCompetitor = (competitor) => {
    return (
      <tr key={competitor.id}>
        <td className='align-middle'>
          <Link href={competitor.link}>
            <a target="_blank">
              <Image src={competitor.logo} alt={`${competitor.name} Logo`} />
            </a>
          </Link>
        </td>
        <td className='align-middle'>{competitor.description}</td>
        <td className='align-middle'>{createList(competitor.positives)}</td>
        <td className='align-middle'>{createList(competitor.negatives)}</td>
        <td className='align-middle'>{competitor.conclusion}</td>
      </tr>
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

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Análise Competitiva
        </h1> 

        <p className={styles.description}>
          Concorrentes que possuem modelos de negócio e ideias inspiradores para o projeto
        </p>

        <table className='table table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Concorrente</th>
              <th scope='col'>Descrição</th>
              <th scope='col'>Pontos Positivos</th>
              <th scope='col'>Pontos Negativos</th>
              <th scope='col'>Conclusão</th>
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
