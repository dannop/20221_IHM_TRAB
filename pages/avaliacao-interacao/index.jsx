import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

// import PaymeHeatmaps  from '../../public/pdfs/PaymeHeatmaps.pdf';
// import PaymeScriptEntrevista  from '../../public/pdfs/PaymeScriptEntrevista.pdf';
// import PaymeAvaliacaoInteracao  from '../../public/pdfs/PaymeAvaliacaoInteracao.pdf';

export default function AvaliacaoInteracao() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Avaliação da Interação</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Avaliação da Interação
        </h1>

        <p className={styles.description}>
          Resultados da pesquisa realizada para avaliar a interação atual do aplicativo.
        </p>

        <div className={styles.info}>
          <p>Baixar PDFs</p>
          <div className='row mb-4'>
            <a href='/PaymeAvaliacaoInteracao.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Interação" className='btn btn-dark mb-4'>
                Avaliação da Interação
              </button>
            </a>
            <a href='/PaymeHeatmaps.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Heatmaps" className='btn btn-dark mb-4'>
                Heatmaps
              </button>
            </a>
            <a href='/PaymeTermosdeConsentimento.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Entrevista" className='btn btn-dark mb-4'>
                Termos de Consentimento
              </button>
            </a>
            <a href='/PaymeScriptEntrevista.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Entrevista" className='btn btn-dark mb-4'>
                Script da Entrevista
              </button>
            </a>
          </div>

          <p>Avaliações Heuristicas</p>
          <ul>
            <li>Avaliador: Eduardo</li>
            <li>Tela de Comunidade</li>
            <li>Consistência e Padronização</li>
            <li>Os ícones de emprestar dinheiro diretamente poderiam estar mais destacados, como o botão de adicionar novo amigo que está na mesma tela.</li>
            <li>Severidade: Cosmético</li>
          </ul>

          <ul>
            <li>Avaliador: Daniel</li>
            <li>Local: Tela de Resumo da Conta</li>
            <li>Heurística: Visibilidade do Estado do Sistema</li>
            <li>Explicação: Ao apertar no botão de “Confirmar”, não é exibido nenhum tipo de notificação ou resposta a ação do botão.</li>
            <li>Severidade: Pequeno</li>
          </ul>

          <ul>
            <li>Avaliador: Daniel</li>
            <li>Local: Tela Inicial</li>
            <li>Heurística: Flexibilidade e Eficiência de Uso</li>
            <li>Explicação: Deveria ser possível pelo fluxo da tela inicial adicionar novas contas, atualmente o fluxo de adicionar uma conta nova fica escondido em muitas ações.</li>
            <li>Severidade: Grande</li>
          </ul>
        </div>  
      </main>
      
      <Footer />
    </div>
  )
}
