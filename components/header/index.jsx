import Image from 'next/image'

import PayMe from '../../assets/images/PayMeTransparent.png'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a className="navbar-brand" href="/">
          <Image src={PayMe} alt="Pay.me Logo" width={50} height={50}/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/informacoes">Informações</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarAnaliseSituacao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Análise da Situação 
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarAnaliseSituacao">
                <a className="dropdown-item" href="/desk-research">Desk Research</a>
                <a className="dropdown-item" href="/analise-competitiva">Análise Competitiva</a>
                <a className="dropdown-item" href="/questionario">Questionário</a>
                <a className="dropdown-item" href="/grupo-focal">Grupo Focal</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarSinteseProtipacao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Síntese e Prototipação
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarSinteseProtipacao">
                <a className="dropdown-item" href="/personas">Personas e Cenários</a>
                <a className="dropdown-item" href="/prototipo">Protótipo</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarAvaliacaoInteracao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Avaliação da Interação
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarAvaliacaoInteracao">
                <a className="dropdown-item" href="/avaliacao-interacao/first-click">First Click</a>
                <a className="dropdown-item" href="/avaliacao-interacao/avaliacao-heuristica">Avaliação Heurística</a>
                <a className="dropdown-item" href="/avaliacao-interacao/teste-usabilidade">Teste de Usabilidade</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}