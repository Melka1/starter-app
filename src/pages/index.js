import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homepage from './homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <title>Logoipsum Real Estate</title>
        <meta name="description" content="A real estate agent devoted to its customers to provide quality and luxurius apartment and houses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage/>
      </main>
    </>
  )
}
