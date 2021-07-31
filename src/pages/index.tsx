import Head from 'next/head'
import Layout from "../components/layout/layout";

export default function Home({children}: any) {
  return (
    <div>
      <Head>
        <title>Getir</title>
        <meta name="description" content="Getir clone made with NextJs" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
       <Layout>
           {children}
       </Layout>
    </div>
  )
}
