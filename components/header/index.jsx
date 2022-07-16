import Link from 'next/link'
import Image from 'next/image'

import PayMe from '../../assets/images/PayMeTransparent.png'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <Image src={PayMe} alt="Pay.me Logo" width={50} height={50}/>
          </a>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Início</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/informacoes">
                <a className="nav-link">Informações</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarAnaliseSituacao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Análise da Situação 
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarAnaliseSituacao">
                <Link href="/desk-research">
                  <a className="dropdown-item">Desk Research</a>
                </Link>
                <Link href="/nalise-competitiva">
                  <a className="dropdown-item">Análise Competitiva</a>
                </Link>
                <Link href="/questionario">
                  <a className="dropdown-item">Questionário</a>
                </Link>
                <Link href="/grupo-focal">
                  <a className="dropdown-item">Grupo Focal</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarSinteseProtipacao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Síntese e Prototipação
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarSinteseProtipacao">
                <Link href="/personas">
                  <a className="dropdown-item">Personas e Cenários</a>
                </Link>
                <Link href="/prototipo">
                  <a className="dropdown-item">Protótipo</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarAvaliacaoInteracao" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Avaliação da Interação
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarAvaliacaoInteracao">
                <Link href="/avaliacao-interacao/first-click">
                  <a className="dropdown-item">First Click</a>
                </Link>
                <Link href="/avaliacao-interacao/avaliacao-heuristica">
                  <a className="dropdown-item">Avaliação Heurística</a>
                </Link>
                <Link href="/avaliacao-interacao/teste-usabilidade">
                  <a className="dropdown-item">Teste de Usabilidade</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}