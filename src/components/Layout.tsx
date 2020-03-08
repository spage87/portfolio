import React, { Fragment } from "react"

import Header from "./Header"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    background-color: #000;
  }
`

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
