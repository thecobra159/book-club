const path = require('path')

exports.onCreateWebpackConfig = ({actions, stage}) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ['main'],
      },
    })
  } else {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ['browser', 'module', 'main'],
      },
    })
  }
}

// exports.createPages = ({graphql, actions}) => {
//   const {createPage} = actions
//   const bookTemplate = path.resolve('src/templates/bookTemplate.tsx')
//
//   return graphql(`
//     {
//       allBook {
//         edges {
//           node {
//             id
//             localImage {
//               url
//             }
//             summary
//             title
//             author {
//               name
//             }
//           }
//         }
//       }
//     }
//   `).then((result) => {
//     if (result.errors) {
//       throw result.errors
//     }
//
//     result.data.allBook.edges.forEach((book) => {
//       createPage({
//         path: `/book/${book.node.id}`,
//         component: bookTemplate,
//         context: book.node,
//       })
//     })
//   })
// }
