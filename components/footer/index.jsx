import styles from '../../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="http://www.ic.uff.br/index.php/pt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          Feito por Daniel Lessa e Eduardo Martins
        </p>
        <p>
          para Interface Homem Máquina - 2022.1
        </p>
      </a>
    </footer>
  );
}