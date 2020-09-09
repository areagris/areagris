/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;600&display=swap" rel="stylesheet" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/16.png" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="msapplication-TileImage" content="/favicons/32.png" />
      <meta name="theme-color" content="#000" />
    </Helmet>
    <Header />
    <div style={{ overflowX: 'scroll' }}>
      <main>{children}</main>
    </div>
  </div>
);

export default Layout
