// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Book Club',
    description: 'Simple Gatsby + Firebase static site',
    author: '@thecobra159',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require('./firebase.json'),
        types: [
          {
            type: 'Book',
            collection: 'books',
            map: (doc) => ({
              title: doc.title,
              summary: doc.summary,
              imageUrl: doc.imageUrl,
              author___NODE: doc.author.id,
            }),
          },
          {
            type: 'Author',
            collection: 'authors',
            map: (doc) => ({
              name: doc.name,
            }),
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'Book',
        imagePath: 'imageUrl',
      },
    },
  ],
}
