import React from 'react'
import { graphql } from 'gatsby'
import Default from '../layouts/default.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles.scss'

// markup
const IndexPage = ({data}) => {
  const menuContents = data.allContentfulMenuContents.edges;
  return (
    <Default>
      <main>

        {menuContents.map( ({ node, index}) => (
          <div>
            <h2>{node.name}</h2>
            <img src={node.image.file.url} alt={node.name} />
            <p>{node.description.description}</p>
              {/*<img
              src={data.allContentfulMenuContents.nodes.image.file.url}
              alt={data.allContentfulMenuContents.nodes.name}/> */}
          </div>
        ))}

      </main>
    </Default>
  )
}

export const query = graphql`
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
      }
    }
  }
}

`

export default IndexPage
