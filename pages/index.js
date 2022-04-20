import Link from 'next/link'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pay.me</title>
        <meta name="description" content="Trabalho de IHM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pay.me
        </h1>

        <p className={styles.description}>
          Trabalho de{' '}
          <code className={styles.code}>Interface Homem Máquina</code>
        </p>

        <div className={styles.grid}>
          <Link href="desk_research">
            <a className={styles.card}>
              <h2>Desk research &rarr;</h2>
              <p>Certezas, suposições e dúvidas.</p>
            </a>
          </Link>

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://www.ic.uff.br/index.php/pt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por{' '}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
          Daniel Lessa e Eduardo Martins
        </a>
      </footer>
    </div>
  )
}
