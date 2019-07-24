import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "./header.module.css"
import NavBar from "./nav/navbar"

const Header = ({ siteTitle }) => (
  <header className={headerStyle.header_class}>
    <div className={headerStyle.header_class_div}>
      <h1 className={headerStyle.header_class_h1}>
        <Link className={headerStyle.header_class_a} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
