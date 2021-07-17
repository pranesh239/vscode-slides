import '../styles/globals.css';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: 'center' }}>
        <svg
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <text y="0.9em" font-size="100">
            🦄
          </text>
        </svg>
        &nbsp; Intro to VSCode Extension
      </h1>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a href="/" rel="noopener noreferrer">
          ThoughtWorks
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
