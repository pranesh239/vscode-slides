import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Intro to VSCode Extention</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦄</text></svg>"
        />
      </Head>

      <main>
        <ul>
          <li>
            Documentation:{' '}
            <a href="https://code.visualstudio.com/api/get-started/your-first-extension">
              https://code.visualstudio.com/api/get-started/your-first-extension
            </a>
          </li>
          <li>
            <code>npm install -g yo generator-code</code>
          </li>
          <li>
            <code>yo code</code>
          </li>
        </ul>
      </main>
      <nav style={{ textAlign: 'right' }}>
        <Link href="/extension">Extenstion 👉</Link>
      </nav>
    </div>
  );
}
