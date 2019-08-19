import { useStaticQuery, Link, graphql } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import navStyles from "./nav.module.css"

const NavBar = ({ props }) => {
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

  return (
    // Nav bar
    <nav className={navStyles.nav_nav}>
      <ul className={navStyles.nav_ul}>
        {/* First nav item is HOME */}
        <li key="home" className={navStyles.nav_li}>
          <Link className={navStyles.nav_a} to="/">
            Home
          </Link>
        </li>
        {/* List Items are Nav links
      TODO: Nest order - dropdown nav links */}
        {data.allWordpressPage.edges.map(obj => {
          return (
            <li key={obj.node.wordpress_id} className={navStyles.nav_li}>
              <Link className={navStyles.nav_a} to={obj.node.link}>
                {obj.node.title}
                {console.log(obj.node.title)}
              </Link>
            </li>
          )
        })}

        <li className={navStyles.nav_li}>
          <Link className={navStyles.nav_a} to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
