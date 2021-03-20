import React from 'react'
// import { graphql } from 'gatsby'
import Default from '../layouts/default.js'

// markup
const MenuPage = ({data}) => {
  const businessName = 'Kilkennys';
  const welcomePhrase = 'Welcome to ' + businessName;
  /*const menuContents = data.allContentfulMenuContents.edges; */
  return (
    <Default>
      <main>
        <div className="container-fluid intro-area-container">
          <div className="row">
            <div className="col-sm-12 p-0 drop-area">
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
                {/* {menuContents.map( ({ node, index}) => (
                  <div className="col-12 col-lg-6 mb-4">
                    <div className="row">
                      {node.image.file.url ? <div className="menu-item-img col-12 col-lg-6"><img src={node.image.file.url} alt={node.name} loading="lazy" /></div> : undefined }
                      <div className="menu-item-description col-12 col-lg-6 text-center text-lg-left">
                          <h2>{node.name}</h2>
                          <p><span dangerouslySetInnerHTML={{ __html: node.description.description}}></span></p>
                          <p className="text-center text-lg-left">${node.price}</p>
                          <a className="btn btn-primarycolor d-sm-inline-block text-white" href="#0">View {node.name}</a>
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Default>
  )
}

{/* export const query = graphql`
query MyQuery {
  allContentfulMenuContents {
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
` */}

export default MenuPage
