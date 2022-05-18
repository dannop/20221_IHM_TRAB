import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

export default function Entrevista() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me | Perguntas</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Perguntas
        </h1>

        <p className={styles.description}>
          Perguntas sobre partes importantes do processo de design
        </p>

        <div className={styles.info}>
          <ol>
            <li>Quais são as metas de design de IHC do seu projeto? Por que a escolha destas metas?</li>
            {/* <p>- Em ordem de prioridade nós utilizamos como metas a Eficiência, Segurança, Eficácia, Utilidade, Memorização e Aprendizagem. A escolha das métricas foi feita de acordo com o estudo de boas práticas feito por Jakob Nielsen. Sobre a ordem de prioridade, foi o que consideramos de importante ao imaginar o sistema.</p> */}
            
            <li>Qual o processo de design está guiando o desenvovlimento do pojeto de design da interação ?</li>
            {/* <p>- A Engenharia de Usabilidade de Nielsen. Até o momento fizemos Conheça seu Usuário, Realize uma Análise Competitiva e Defina as metas de usabilidade.</p> */}
            
            <li>Qual a estratégia de design utilizada? Dirigida ao problema ou dirigida a solução? Justifique.</li>
            {/* <p>- A estratégia utilizada até o momento é dirigida a solução, pois focamos menos em pensar a fundo quais seriam os problemaa, e mais bem mais refletindo e pesquisando as melhores soluções.</p> */}
            
            <li>Por que dizemos que o design da interação vai além do design da interface?</li>
            {/* <p>- Pois a interação está fortemente ligada a experiência que o usuário vai ter na utilização do sistema. O contato físico (motor ou perceptivo) e conceitual (percepção subjetiva) é observado quando falamos sobre design de interação.</p> */}
            
            <li>O que é e pra que serve o estudo piloto? O grupo aplicou estudo piloto?</li>
            {/* <p>- Com foco no estudo principal, o estudo piloto é uma prévia parcial do estudo em andamento, para verficar se é viável a continuidade do estudo. Tivemos uma consultoria na nossa primeira Desk Research.</p> */}
            
            <li>Por que é importante aplicar mais de uma técnica de coleta de dados? Qual técnica deu melhor resultado? Por que?</li>
            {/* <p>- Para confirmar os resultados dos dados obtidos a triangulação é uma forma muito utilizada, fazendo com que os dados sejam mais válidos. No nosso caso em perticular, os resultados do questionário foram bem eficazes.</p> */}
            
            <li>O grupo sugere aplicar outra técnica para aumentar a qualidade de seus achados? Qual e por que?</li>
            {/* <p>- Não vemos muita necessidade de acordo com os dados já obtidos. Porém, o Braisntorm poderia se encaixar bem, para ocasionalmente aparecer mais problemas que poderiam ser solucionados.</p> */}
            
            <li>Como foram aplicados os procedimentos de ética?</li>
            {/* <p>- Os termos de consentimento e garantia de anonimato, tanto no Questionário quanto no Grupo Focal. Além disso as perguntas foram feitas de forma que não houvesse nenhuma situação constrangedora.</p> */}
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  )
}
