import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import D3Graph from "../components/d3graph"

const IndexPage = () => (
  <Layout>
    <SEO title="State of Javascript 2018 and State of CSS 2019" />
    <D3Graph />
  </Layout>
)

export default IndexPage
