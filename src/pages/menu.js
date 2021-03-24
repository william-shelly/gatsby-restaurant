import React from 'react'
import { graphql } from 'gatsby'
import Default from '../layouts/default.js'
import MenuItemPreview from '../components/menuitempreview.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles.scss'

// markup
const MenuPage = ({data}) => {
  const businessName = '';
  const welcomePhrase = '';
  // const menuContents = data.allContentfulMenuContents.edges;

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
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col py-2 py-lg-5 d-flex justify-content-center align-items-center">
                        <h2 className="fs-3">Menu</h2>
                      </div>
                    </div>
                    <div className="row">
{/*                      {data.allContentfulMenuContents.edges.map( ({ node, index}) => (
                        <MenuItemPreview node={node}></MenuItemPreview>
                      ))} */ }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Default>
  )
}

export default MenuPage
