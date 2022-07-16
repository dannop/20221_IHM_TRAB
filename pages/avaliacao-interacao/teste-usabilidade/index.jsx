import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../styles/Home.module.css';

import Footer from '../../../components/footer';

import AnaliseInteracao01 from '../../../assets/images/teste-usabilidade/AnaliseInteracao01.jpg'; 
import AnaliseInteracao02 from '../../../assets/images/teste-usabilidade/AnaliseInteracao02.jpg'; 
import InformacoesGerais from '../../../assets/images/teste-usabilidade/InformacoesGerais.jpg'; 
import Observacoes from '../../../assets/images/teste-usabilidade/Observacoes.jpg'; 
import Sugestoes from '../../../assets/images/teste-usabilidade/Sugestoes.jpg'; 

export default function TesteUsabilidade() {
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

        <div className={styles.grid}>
          <Link href="/avaliacao-interacao/first-click">
            <a className={styles.card}>
              <h2>First Click &rarr;</h2>
              <p>Método de avaliação: First Click.</p>
            </a>
          </Link>
          <Link href="/avaliacao-interacao/avaliacao-heuristica">
            <a className={styles.card}>
              <h2>Avaliação Heurística &rarr;</h2>
              <p>Método de inspeção: Avaliação Heurística.</p>
            </a>
          </Link>
        </div> 

        <div className={styles.info}>
          <h2>Método de Observação - Teste de Usabilidade</h2>
          <p>Utilizamos esse método de observação devido a necessidade de medir a eficiência e verificar a segurança do aplicativo. Além disso, com as perguntas conseguimos validar se a ideia é algo que realmente poderia ajudar no cotidiano das pessoas.</p>
          <p>As entrevistas foram feitas através do Google Meet.</p>
          
          <div className='row mb-4'>
            <a href='/PaymeTermosdeConsentimento.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Entrevista" className='btn btn-dark mb-4'>
                Baixar Termos de Consentimento
              </button>
            </a>
            <a href='/PaymeScriptEntrevista.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Entrevista" className='btn btn-dark mb-4'>
                Baixar Script da Entrevista
              </button>
            </a>
          </div>

          <h3>Resultados</h3>
          <ul>
            <li>4 de 6 tiveram uma impressão ideal do que poderia na tela inicial: gerenciar as contas, verificar suas movimentações e acessar notificações;</li>
            <li>Em média as entrevistas duraram de 14 a 19 minutos;</li>
          </ul>

          <Image src={AnaliseInteracao01} alt={`AnaliseInteracao01`} />
          <Image src={AnaliseInteracao02} alt={`AnaliseInteracao02`} />
          <Image src={InformacoesGerais} alt={`InformacoesGerais`} />
          <Image src={Observacoes} alt={`Observacoes`} />
          <Image src={Sugestoes} alt={`Sugestoes`} />

          <h3>Sugestões de Redesign</h3>
          <ul>
            <li>Toda a tabela de sugestões pode ser utilizada para melhorar o aplicativo;</li>
          </ul>
        </div>  
      </main>
      
      <Footer />
    </div>
  )
}
