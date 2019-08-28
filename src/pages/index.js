import React from "react"
import { Link } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <CssBaseline />
    <SEO title="Home" />
    <h1>Hi World!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
