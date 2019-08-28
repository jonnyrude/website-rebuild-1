import { useStaticQuery, Link, graphql } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react"
import navStyles from "./nav.module.css"

const NavBar = ({ props }) => {
  // const state = {
  //   toggle: " toggle",
  // }

  // use state to track open/closed nav (0=closed, 1=open)
  let [navState, setNavState] = useState(0)

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressPage {
          edges {
            node {
              slug
              excerpt
              wordpress_id
              title
              link
            }
          }
        }
      }
    `
  )

  const toggleMenu = () => {
    setNavState(() => (navState ? 0 : 1))
    // console.log(navState)
  }

  return (
    // Nav bar

    <nav className={navStyles.nav_nav}>
      <button className={navStyles.nav_button} onClick={toggleMenu}>
        Menu
      </button>
      <ul className={navStyles.nav_ul + (navState ? " open" : " collapsed")}>
        {/* First nav item is HOME */}
        <li key="home" className={navStyles.nav_li}>
          <Link className={navStyles.nav_a} to="/">
            HOME
          </Link>
        </li>
        {/* List Items are Nav links
      TODO: Nest order - dropdown nav links */}
        {/* {data.allWordpressPage.edges.map(obj => {
            return (
              <li key={obj.node.wordpress_id} className={navStyles.nav_li}>
                <Link className={navStyles.nav_a} to={obj.node.link}>
                  {obj.node.title}
                  {console.log(obj.node.title)}
                </Link>
              </li>
            )
          })} */}
        <li className={navStyles.nav_li}>
          <Link className={navStyles.nav_a} to="/about-us">
            ABOUT US
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const toggleMenu = () => {
  console.log("button pressed")
}

export default NavBar
