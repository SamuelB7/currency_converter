import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import { Header } from '../components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js")
  }, [])

  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
