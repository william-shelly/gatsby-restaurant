const path = require("path")


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query MyQuery {
        allContentfulMenuContents {
        nodes {
            id
            name
            description {
            description
            }
            image {
            file {
                url
            }
            }
        }
        }
    }
  `)

  const productTemplate = path.resolve(`src/templates/menu-content-page.js`)
  queryResults.data.allContentfulMenuContents.nodes.forEach(node => {
    createPage({
      path: `/menu-contents/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        menuContent: node,
      },
    })
  })
}
