import '../styles/global.ts'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import { GlobalStyle } from '../styles/global'
import { Container } from './styles.app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container>
        <Sidebar />
       <Component {...pageProps} />
    </Container>  
  
      <GlobalStyle />
    </>
    
  )
}

export default MyApp
