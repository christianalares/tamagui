import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React, { Children } from 'react'
import { AppRegistry } from 'react-native'

import Tamagui from '../tamagui.config'

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main)
    const page = await renderPage()
    const styles = [
      <style key="tamagui-css" dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }} />,
    ]
    return { ...page, styles: Children.toArray(styles) }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="docsearch:language" content="en" />
          <meta name="docsearch:version" content="1.0.0,latest" />
          {/* <link
            rel="preload"
            href="/fonts/slkscr.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/subset-Inter-ExtraBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
