import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Herondeals!" />
        <p className="description">
          Automation at its best <code>Business Solutions</code>
        </p>
        <p className="description">
          A <code>Loading Form</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
