import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Command</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦄</text></svg>"
        />
      </Head>

      <main>
        <h3>Command</h3>
        <ul>
          <li>Command is something actionable</li>
          <li>
            <code>vscode.commands.registerCommand</code> to register a command.
          </li>
          <li>user facing commands must be declered in package.json</li>

          <li className={styles.fullCode}>
            <pre>
              <code>
                {`"contributes": {
    "commands": [
      {
        "command": "reminder.helloWorld",
        "title": "Hello World"
      }
    ]
  }`}
              </code>
            </pre>
          </li>
          <li>
            <img src="/command.png" width="100%" height="auto" />
          </li>
          <li>
            <a
              target="_blank"
              href="https://code.visualstudio.com/api/extension-guides/command"
            >
              Reference
            </a>
          </li>
        </ul>
      </main>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/extension">👈 Extension</Link>
        <Link href="/other-apis"> Other APIs 👉</Link>
      </nav>
    </div>
  );
}
