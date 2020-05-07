import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = ({ data }) => (
  
  <Layout>
    <SEO title="Home" />
    <h1>{data.contentfulGatsby.title}</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image /> 
    </div>
    <Link to="/page-2/">Go to page 2 Hello</Link>
    {/* <img src="{data.contentfulGatsby.image}" /> */}
    <p>{data.contentfulGatsby.description.description}</p>
  </Layout>
)

export default IndexPage

export const query = graphql`
query PageQuery {
  contentfulGatsby {
    title 
      description{
        id
        description
      }
    }
      }
`