import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'
import BookItem from '../components/BookItem/BookItem'

const IndexPage = (props) => {
  return (
    <Layout>
      <Seo title='Home' />
      {props.data.allBook.edges.map((edge) => (
        <BookItem
          bookAuthor={edge.node.author.name}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          bookImageUrl={edge.node.localImage.url}
        >
          <Link to={`/book/${edge.node.id}`}>Join conversation</Link>
        </BookItem>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          id
          localImage {
            url
          }
          summary
          title
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
