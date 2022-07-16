import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../styles/Home.module.css';

import Footer from '../../../components/footer';

import FirstClick01 from '../../../assets/images/first-click/image1.jpg';
import FirstClick02 from '../../../assets/images/first-click/image2.png';
import FirstClick03 from '../../../assets/images/first-click/image3.png';
import FirstClick04 from '../../../assets/images/first-click/image4.png';
import FirstClick05 from '../../../assets/images/first-click/image5.png';
import FirstClick06 from '../../../assets/images/first-click/image6.png';
import FirstClick07 from '../../../assets/images/first-click/image7.png';
import FirstClick08 from '../../../assets/images/first-click/image8.jpg';

export default function FirstCLick() {
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
          <Link href="/avaliacao-interacao/avaliacao-heuristica">
            <a className={styles.card}>
              <h2>Avaliação Heurística &rarr;</h2>
              <p>Método de inspeção: Avaliação Heurística.</p>
            </a>
          </Link>
          <Link href="/avaliacao-interacao/teste-usabilidade">
            <a className={styles.card}>
              <h2>Teste de Usabilidade &rarr;</h2>
              <p>Método de observação: Teste de Usabilidade.</p>
            </a>
          </Link>
        </div> 

        <div className={styles.info}>
          <h2>First Click</h2>
          <p>Para avaliarmos a interação pelo método First Click, criamos 4 formulários, cada um para avaliar 2 funcionalidades no sistema.</p>
          
          <h3>Resultados</h3>
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

          <h3>Sugestões de Redesign</h3>
          <ul>
            <li>O ícone de engrenagem gerou confusão ao usuário na hora de pedir ajuda. O ideal seria remover o ícone, ou utilizar uma interrogação no lugar para ser mais amigável e útil ao usuário;</li>
            <li>A lista de movimentações pode ser melhorada para levar ao histórico total de empréstimos;</li>
            <li>Os botões na tela de Relatórios estão gerando confusão no usuário, os textos poderiam ser mais descritivos e o ícone também poderia indicar melhor o que encontrar naquele botão;</li>
          </ul>
        </div>  
      </main>
      
      <Footer />
    </div>
  )
}
