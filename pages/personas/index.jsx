import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';

import Footer from '../../components/footer';
import BackNav from '../../components/back-nav';

import PersonaFabio from '../../assets/images/FábioPerfil.jpg';
import PersonaFerdinando from '../../assets/images/FerdinandoPerfil.jpg';
import PersonaCarla from '../../assets/images/CarlaPerfil.jpg';

export default function Questionario() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackNav href="/" />

      <main className={`${styles.main} container`}>
        <h1 className={styles.title}>
          Personas e Cenários
        </h1> 

        <Image src={PersonaFabio} alt={`Persona do Fábio`} />
        <div className={styles.info}>
          <p>Cenário:</p>
          <p>A gata de Fábio ficou doente e ele precisa levá-la no veterinário, porém é caro e já é final do mês. Como de costume, Fábio tem idéia de entrar em contato com Diego para pedir dinheiro emprestado, mas seu amigo ficam na dúvida de ajudá-lo, pois não é a primeira vez que Fábio pede dinheiro emprestado, e da última vez foi para comprar um par de sapatos, no qual ele esqueceu por muito tempo de pagar e Diego ficou sem graça de lembrar.</p>
          <p>Tarefas:</p>
          <p>Tarefas:</p>
          <ol>
            <li>
              Objetivo: pedir dinheiro emprestado
              <ol>
                <li>
                  Método: encontrar amigo pelo fluxo de comunidade
                  <ol>
                    <li>Operador: clica na opção de adicionar novo amigo</li>
                    <li>Operador: busca Diego na lista de usuários cadastrados</li>
                    <li>Operador: clica na opção de Pedir</li>
                    <li>Operador: preenche o formulário com dados para o empréstimo</li>
                    <li>Operador: confirma pedido de empréstimo</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Objetivo: lembrar Fábio do dinheiro emprestado
              <ol>
                <li>
                  Método: encontrar amigo pelo fluxo de comunidade
                  <ol>
                    <li>Operador: clica na opção de comunidade</li>
                    <li>Operador: escreve o nome de Fábio na lista de resultados</li>
                    <li>Operador: clica em Fábio</li>
                    <li>Operador: clica no empréstimo que deseja ver dentro da lista de empréstimos na visualização do Fábio</li>
                    <li>Operador: clica em Lembrar</li>
                  </ol>
                </li>
                <li>
                  Método: encontrar empréstimo pelos relatórios
                  <ol>
                    <li>Operador: clica em relatórios na barra de navegação</li>
                    <li>Operador: clica em empréstimos feitos</li>
                    <li>Operador: clica no empréstimo não pago que deseja cobrar</li>
                    <li>Operador: clica em Lembrar</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <Image src={PersonaFerdinando} alt={`Persona do Ferdinando`} />
        <div className={styles.info}>
          <p>Cenário:</p>
          <p>A Black Friday ainda será em alguns meses, mas Ferdinando já está fazendo planejamentos para ver se é possível melhorar seu computador com uma nova placa de vídeo. Aprendendo com os ensinamentos do passado, ele está tentando gerenciar seu dinheiro já contando com uma margem caso tenha algum imprevisto. Além disso, ele sabe que no período de tempo até o dia da promoção, ele pode não ter o dinheiro suficiente, então está combinando com seu pai a possibilidade de pegar emprestado e devolver na frente com um valor maior, mesmo que o pai não goste muito da ideia pois é seu filho.</p>
          <ol>
            <li>
              Objetivo: verificar como foram seus gastos e empréstimos nos últimos meses
              <ol>
                <li>
                  Método: verificar seus relatórios e histórico no menu de relatórios
                  <ol>
                    <li>Operador: clica em relatórios</li>
                    <li>Operador: clica na opção de gestão geral</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Objetivo: registrar sua dívida com um maior retorno
              <ol>
                <li>
                  Método: encontrar o pai pelo menu de comunidade
                  <ol>
                    <li>Operador: busca pelo pai na lista de amigos adicionados</li>
                    <li>Operador: clica na pai</li>
                    <li>Operador: clica no botão de Pedir</li>
                    <li>Operador: preenche o formulário com dados para o empréstimo prestando atenção no valor de retorno</li>
                    <li>Operador: confirma pedido de empréstimo</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <Image src={PersonaCarla} alt={`Persona da Carla`} />
        <div className={styles.info}>
          <p>Cenário:</p>
          <p>Esse mês Carla recebeu um grande cliente em seu escritório de advocacia. Ao mesmo tempo, seu filho mais novo terá uma apresentação de teatro na escola e ela precisa ajudar ele a ensaiar, além de ter que ir na apresentação do filho. Nesse mês também houve um problema com a entrega da conta de luz e com tantas tarefas, Carla não percebeu que a conta da luz não chegou.</p>
          <p>Tarefas:</p>
          <ol>
            <li>
              Objetivo: salvar uma conta para lembrar 
              <ol>
                <li>
                  Método: criar pelo extrato de contas nos relatórios
                  <ol>
                    <li>Operador: clica em relatórios na barra de navegação</li>
                    <li>Operador: clica em extrato de contas</li>
                    <li>Operador: clica em adicionar</li>
                    <li>Operador: preenche o fluxo com as informações da conta</li>
                    <li>Operador: confirma criação da conta</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Objetivo: lembrar Fábio do dinheiro emprestado
              <ol>
                <li>
                  Método: visualizar na tela de início
                  <ol>
                    <li>Operador: abrir informações da conta</li>
                    <li>Operador: confirmar conta paga</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  )
}
