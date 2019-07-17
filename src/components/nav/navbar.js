import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import navStyles from "./nav.module.css"

const NavBar = ({ props }) => (
  <nav className={navStyles.nav_nav}>
    <ul className={navStyles.nav_ul}>
      <li className={navStyles.nav_li}>
        <Link className={navStyles.nav_a} to="/">
          Home
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
