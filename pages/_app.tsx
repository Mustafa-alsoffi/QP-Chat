import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App