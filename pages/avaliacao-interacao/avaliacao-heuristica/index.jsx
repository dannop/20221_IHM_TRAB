import Head from 'next/head';
import Link from 'next/link';

import styles from '../../../styles/Home.module.css';

import Footer from '../../../components/footer';
import BackNav from '../../../components/back-nav';

export default function AvaliacaoHeuristica() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Avaliação da Interação</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/avaliacao-interacao" />

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Avaliação da Interação
        </h1>

        <div className={styles.grid}>
          <Link href="/avaliacao-interacao/first-click">
            <a className={styles.card}>
              <h2>First Click &rarr;</h2>
              <p>Método de avaliação First Click.</p>
            </a>
          </Link>
          <Link href="/avaliacao-interacao/teste-usabilidade">
            <a className={styles.card}>
              <h2>Análise Competitiva &rarr;</h2>
              <p>Método de observação: Avaliação Heurística.</p>
            </a>
          </Link>
        </div> 

        <div className={styles.info}>
          <h2>Método de Inspeção - Avaliação Heurística</h2>
          <p>Utilizamos esse método de inspeção principalmente devido a necessidade de avaliar a eficiência do aplicativo, pois de acordo com nossas pesquisas ela se mantevem como a meta de design prncipal.</p>
          <p>Enquanto isso, o Processo Cognitivo iria ter um foco maior na avaliação da curva de aprendizado, o que foi definido como nossa menor prioridade nas metas de design.</p>
          
          <h3>Resultados</h3>
          <p>Avaliador: Eduardo</p>
          <ul>
            <li>Tela de Comunidade</li>
            <li>Consistência e Padronização</li>
            <li>Os ícones de emprestar dinheiro diretamente poderiam estar mais destacados, como o botão de adicionar novo amigo que está na mesma tela.</li>
            <li>Severidade: Cosmético</li>
          </ul>

          <p>Avaliador: Daniel</p>
          <ul>
            <li>Local: Tela de Resumo da Conta</li>
            <li>Heurística: Visibilidade do Estado do Sistema</li>
            <li>Explicação: Ao apertar no botão de “Confirmar”, não é exibido nenhum tipo de notificação ou resposta a ação do botão.</li>
            <li>Severidade: Pequeno</li>
          </ul>

          <p>Avaliador: Daniel</p>
          <ul>
            <li>Local: Tela Inicial</li>
            <li>Heurística: Flexibilidade e Eficiência de Uso</li>
            <li>Explicação: Deveria ser possível pelo fluxo da tela inicial adicionar novas contas, atualmente o fluxo de adicionar uma conta nova fica escondido em muitas ações.</li>
            <li>Severidade: Grande</li>
          </ul>
          
          <div className='row'>
            <a href='/PaymeAvaliacaoHeuristica.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Baixar Avaliações" className='btn btn-dark mb-4'>
                Baixar Todas Avaliações
              </button>
            </a>
          </div>

          <h3>Sugestões de Redesign</h3>
          <ul>
            <li>Verificar mensagens de alerta;</li>
            <li>Melhorar validações nos formulários de pedir dinheiro emprestado;</li>
          </ul>
        </div>  
      </main>
      
      <Footer />
    </div>
  )
}
