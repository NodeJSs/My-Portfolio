import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css, Global } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";


const AboutPage = () => {

    const data = useStaticQuery(graphql`
    query{
        allFile(filter: {relativePath: {eq: "faruq.jpeg"}, childImageSharp: {fluid: {src: {}}}}) {
          nodes {
            sharp: childImageSharp {
              fluid(
                  maxWidth: 300,
                  maxHeight: 400
              ){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      
    `);
    return (
        <Layout>
            <Global styles={css`
                h1,p{
                    color: white;
                }
            `}
            />
            <SEO title="About" />

            <div css={css`
                display: flex;
                width: 80%;
                margin: 0 auto;
                > div{
                    flex: 2;
                    margin-right: 3rem;
                    

                    p{
                        font-size: 115%;
                        line-height: 2rem;
                    }
                }

                .gatsby-image-wrapper{
                    flex: 1.5; 
                    height: 550px;
                    width: 100%;
                    margin: 0;
                }
                @media (max-width:800px){
                    .gatsby-image-wrapper{
                        flex: 2; 
                    }
                }
                @media(max-width:750px){
                    flex-direction: column;
                    > div{
                        margin-right: 0;
                        p {
                            text-align: justify;
                            
                        }
                    }
                    .gatsby-image-wrapper{
                        height: 50px;
                        width: 80%;
                        margin: 1rem auto;
                    }
                }
                /** */
            `}>
                <div>
                    <h1>About</h1>
                    <p>
                        I am a front-end web developer, Flutter developer and technical author. I am well versed in Front-end tools and technologies like HTML, CSS, JavaScript, ESNext, React, Gatsby, Firebase and so on. I also build cross-platform mobile apps with Dart and Flutter. I have a passion for delivering pixel-perfect UI and writing scalable and maintainable code.
                    </p>
                </div>

                {
                    data.allFile.nodes.map(image => (
                        <Image fluid={image.sharp.fluid} alt="A Picture of Faruq" fadeIn />
                    ))
                }



            </div>

        </Layout>);
}

export default AboutPage;
