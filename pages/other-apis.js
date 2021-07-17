import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Other APIs</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦄</text></svg>"
        />
      </Head>

      <main style={{ lineHeight: '40px' }}>
        <h3>Other APIs</h3>
        <ul>
          <li>
            <code>
              {`vscode.languages.getLanguages().then((data) => console.log(data));`}
            </code>{' '}
            - To get all possible languages
          </li>
          <li>
            <code>{`editor.document.getText(editor.selection)`}</code> - to get
            the user selected text
          </li>
          <li>
            <code>{`vscode.languages.setTextDocumentLanguage(editor.document, 'json');`}</code>{' '}
            - to set the current document's language
          </li>
          <li>
            <code>{`editor.document.languageId`}</code> - to get the current
            document's language
          </li>
        </ul>
      </main>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/command">👈 Command</Link>
      </nav>
    </div>
  );
}
