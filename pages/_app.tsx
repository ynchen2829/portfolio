import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono} from 'next/font/google'

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono'
  })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto_mono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
