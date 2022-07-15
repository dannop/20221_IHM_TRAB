import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

import FirstClick01 from '../../assets/images/first-click/image1.jpg';
import FirstClick02 from '../../assets/images/first-click/image2.png';
import FirstClick03 from '../../assets/images/first-click/image3.png';
import FirstClick04 from '../../assets/images/first-click/image4.png';
import FirstClick05 from '../../assets/images/first-click/image5.png';
import FirstClick06 from '../../assets/images/first-click/image6.png';
import FirstClick07 from '../../assets/images/first-click/image7.png';
import FirstClick08 from '../../assets/images/first-click/image8.jpg';

import AnaliseInteracao01 from '../../assets/images/teste-usabilidade/AnaliseInteracao01.jpg'; 
import AnaliseInteracao02 from '../../assets/images/teste-usabilidade/AnaliseInteracao02.jpg'; 
import InformacoesGerais from '../../assets/images/teste-usabilidade/InformacoesGerais.jpg'; 
import Observacoes from '../../assets/images/teste-usabilidade/Observacoes.jpg'; 
import Sugestoes from '../../assets/images/teste-usabilidade/Sugestoes.jpg'; 

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
          <h2>First Click</h2>
          <p>Para avaliarmos a interação pelo método First Click, criamos 4 formulários, cada um para avaliar 2 funcionalidades no sistema.</p>
          <p>Resultados</p>
          <div className='row'>
            <a href='/PaymeHeatmaps.pdf' without rel="noopener noreferrer" target="_blank" className='col-md-12'>
              <button label="Heatmaps" className='btn btn-dark mb-4'>
                Baixar Heatmaps
              </button>
            </a>
          </div>

          <a href='https://du5i17a4.optimalworkshop.com/chalkmark/j70tw0io' rel="noopener noreferrer" target="_blank">
            <p>1º Questionário</p>
            <Image src={FirstClick01} alt={`First Click 01`} />
            <Image src={FirstClick02} alt={`First Click 02`} />
          </a>
          <a href='https://3f03w05l.optimalworkshop.com/chalkmark/p02asf3y' rel="noopener noreferrer" target="_blank">
            <p>2º Questionário</p>
            <Image src={FirstClick03} alt={`First Click 03`} />
            <Image src={FirstClick04} alt={`First Click 04`} />
          </a>
          <a href='https://du5i17a4.optimalworkshop.com/chalkmark/j70tw0io' rel="noopener noreferrer" target="_blank">
            <p>3º Questionário</p>
            <Image src={FirstClick05} alt={`First Click 05`} />
            <Image src={FirstClick06} alt={`First Click 06`} />
          </a>
          
          <a href='https://o343lrm6.optimalworkshop.com/chalkmark/jzvolb7c' rel="noopener noreferrer" target="_blank">
            <p>4º Questionário</p>
            <Image src={FirstClick07} alt={`First Click 07`} />
            <Image src={FirstClick08} alt={`First Click 08`} />
          </a>

          <p>Redesign</p>
          <ul>
            <li>O ícone de engrenagem gerou confusão ao usuário na hora de pedir ajuda. O ideal seria remover o ícone, ou utilizar uma interrogação no lugar para ser mais amigável e útil ao usuário;</li>
            <li>A lista de movimentações pode ser melhorada para levar ao histórico total de empréstimos;</li>
            <li>Os botões na tela de Relatórios estão gerando confusão no usuário, os textos poderiam ser mais descritivos e o ícone também poderia indicar melhor o que encontrar naquele botão;</li>
          </ul>

          <h2>Método de Inspeção - Avaliação Heurística</h2>
          <p>Utilizamos esse método de inspeção principalmente devido a necessidade de avaliar a eficiência do aplicativo, muito acima da curva de aprendizado.</p>
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
              <button label="Interação" className='btn btn-dark mb-4'>
                Baixar Todas Avaliações
              </button>
            </a>
          </div>

          <p>Redesign</p>
          <ul>
            <li>Verificar mensagens de alerta;</li>
            <li>Melhorar validações nos formulários de pedir dinheiro emprestado;</li>
          </ul>

          <h2>Método de Observação - Teste de Usabilidade</h2>
          <p>Utilizamos esse método de observação devido a necessidade de medir a eficiência e verificar a segurança do aplicativo. Além disso, com as perguntas conseguimos validar se a ideia é algo que realmente poderia ajudar no cotidiano das pessoas. As entrevistas foram feitas através do Google Meet. </p>
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

          <p>Resultados</p>
          <ul>
            <li>4 de 6 tiveram uma impressão ideal do que poderia na tela inicial: gerenciar as contas, verificar suas movimentações e acessar notificações;</li>
            <li>Em média as entrevistas duraram de 14 a 19 minutos;</li>
          </ul>

          <Image src={AnaliseInteracao01} alt={`AnaliseInteracao01`} />
          <Image src={AnaliseInteracao02} alt={`AnaliseInteracao02`} />
          <Image src={InformacoesGerais} alt={`InformacoesGerais`} />
          <Image src={Observacoes} alt={`Observacoes`} />
          <Image src={Sugestoes} alt={`Sugestoes`} />

          <p>Redesign</p>
          <ul>
            <li>Toda a tabela de sugestões serve como Redesign para o aplicativo;</li>
          </ul>
        </div>  
      </main>
      
      <Footer />
    </div>
  )
}
