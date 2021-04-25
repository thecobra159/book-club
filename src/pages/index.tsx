import * as React from 'react'
import SEO from '../components/SEO/SEO'
import {graphql, Link} from 'gatsby'
import BookItem from '../components/BookItem/BookItem'

const IndexPage = (props) => {
  return (
    <div>
      <SEO title='Home'/>
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
    </div>
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
