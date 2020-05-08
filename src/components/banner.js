import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


const Banner = () => {
const data = useStaticQuery(graphql `
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <h1>Suka bliat</h1>
       
    )

}


export default Banner 