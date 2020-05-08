import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import '../styles/main.sass'



const IndexPage = ({ data }) => (
  
  <Layout>
    < SEO title = {data.contentfulGatsby.title} description={data.contentfulGatsby.description.description} />
    <h1>{data.contentfulGatsby.title}</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image /> 
    </div>
    <div>
      <Banner />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Img fluid={data.contentfulGatsby.image.fluid} alt="image"/>
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
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`