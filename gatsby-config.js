// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Book Club',
    description: 'Simple Gatsby + Firebase static site',
    author: '@thecobra159',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Book Club',
        short_name: 'BookClub',
        start_url: '/',
        background_color: '#A0E8AF',
        theme_color: '#3AB795',
        display: 'standalone',
        icon: './src/assets/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
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
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#3AB795',
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito']
        }
      }
    },
  ],
}
