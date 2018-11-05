import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import Link from 'next/link'

Router.events.on('routeChangeStart', url => {
  console.log('Navigating to:', url)
})

Router.events.on('routeChangeComplete', url => {
  console.log('Completed navigation to: ', url)
})

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ul>
          <Link href="/">
            <a style={{ paddingRight: '8px' }}>Home</a>
          </Link>
          <Link href="/about">
            <a style={{ paddingRight: '8px' }}>About</a>
          </Link>
          <Link href="/contact">
            <a style={{ paddingRight: '8px' }}>Contact</a>
          </Link>
          <Link href="/pricing">
            <a style={{ paddingRight: '8px' }}>Pricing</a>
          </Link>
        </ul>
        <hr />
        <Component {...pageProps} />
      </Container>
    )
  }
}
