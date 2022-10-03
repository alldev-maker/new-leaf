const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicTermsAndPrivcay {
          nodes {
            id
            uid
          }
        }
    }
  `)

  queryResults.data.allPrismicTermsAndPrivcay?.nodes.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`src/templates/terms-and-conditions.js`),
      context: {
        id: node.id,
      },
    })
  })
}