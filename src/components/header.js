import PropTypes from "prop-types"
import React from "react"

import logo from '../images/logo.png';

const Header = ({ siteTitle }) => (
  <header className="w-100 ph3 pv3 ph5-ns">
    <img src={logo} className="logo" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
