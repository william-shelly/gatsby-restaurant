import React from 'react'
import { graphql } from 'gatsby'
import Default from '../layouts/default.js'
import MenuItemPreview from '../components/menuitempreview.js'
// import Helmet from "react-helmet"
import SEO from "../components/seo.js"
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles.scss'

// markup
const IndexPage = ({data}) => {
  const businessName = 'Kilkennys';
  const welcomePhrase = 'Tulsa\'s Best Irish-American Pub';
  // const menuContents = data.allContentfulMenuContents.edges;
  return (
    <Default>
{/*      <Helmet>
        <title>{welcomePhrase} | {businessName}</title>
        <meta name="description" content="Great Service and the Best Beer Selection!" />

        <meta property="og:title" content={{welcomePhrase} | {businessName}} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://modest-leavitt-89b7df.netlify.app/" />
        <meta property="og:image" content="https://d33wubrfki0l68.cloudfront.net/605bd99c21e6be0008e7758b/screenshot.png" />
      </Helmet> */}
      <SEO description="test"></SEO>
      <main>
        <div className="container-fluid intro-area-container">
          <div className="row">
            <div className="col-sm-12 p-0 intro-area">
              <div className="text-container p-5 d-flex flex-column justify-content-end justify-content-lg-center align-items-center">
                <h1 className="d-none d-lg-block text-center pb-4 text-shadow">{welcomePhrase}</h1>
                <p className="d-none d-lg-block text-center text-white text-shadow">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col py-2 py-lg-5 d-flex justify-content-center align-items-center">
                  <h2 className="fs-3">Menu</h2>
                </div>
              </div>
              <div className="row">
                {data.allContentfulMenuContents.edges.map( ({ node, index}) => (
                  <MenuItemPreview node={node}></MenuItemPreview>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Default>
  )
}

export const query = graphql`
query IndexMenuContents {
  allContentfulMenuContents(
    sort: {fields: name, order: ASC}
  ) {
    edges {
      node {
        id
        name
        image {
          file {
            url
          }
        }
        description {
          description
        }
        price
        menuContentsType
      }
    }
  }
}
`

export default IndexPage
