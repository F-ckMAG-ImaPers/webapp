import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <>
	<Head>
		<title>App</title>
		<link key={1} rel="icon" href="/favicon.ico" />
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500&display=swap"rel="stylesheet"/>
	</Head>
	  <Component {...pageProps} />

  </>


}

export default MyApp
