import React, { Fragment } from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
