import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css';

import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  );
}
