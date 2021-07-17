import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Extension.ts</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦄</text></svg>"
        />
      </Head>

      <main>
        <h3>
          <code>extenstion.ts</code>
        </h3>
        <ul>
          <li>Entry file to register commands</li>
          <li>
            <code>activate</code> function is called when the extension is
            activated
          </li>
          <li>
            Different ways to activate extension -{' '}
            <a
              target="_blank"
              href="https://code.visualstudio.com/api/references/activation-events"
            >
              https://code.visualstudio.com/api/references/activation-events
            </a>
          </li>
          <li className={styles.fullCode}>
            <pre>
              <code>
                {`"activationEvents":[ 

             "onCommand:reminder.helloWorld" 
            ]`}
              </code>
            </pre>
          </li>
        </ul>
      </main>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/">👈 Intro</Link>
        <Link href="/command"> Command 👉</Link>
      </nav>
    </div>
  );
}
