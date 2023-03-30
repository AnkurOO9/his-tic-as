import Sidebar from '@/components/sidebar/Sidebar'
import NoSSRWrapper from '@/helpers/NoSSRWrapper'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSSRWrapper>
      < div className='main-container' >
        <div className='sidebar-container'>
          <Sidebar />
        </div>
        <Component {...pageProps} />
      </div >
    </NoSSRWrapper>
  )

}
