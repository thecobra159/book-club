import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'

const IndexPage = (props) => {
  return (
    <Layout>
      <Seo title='Home' />
      {props.data.allBook.edges.map((edge) => (
        <div key={edge.node.id}>
          <h2>
            {edge.node.title} - <small>{edge.node.author.name}</small>
          </h2>
          <div>{edge.node.summary}</div>

          <Link to={`/book/${edge.node.id}`}>
            Join Conversation
          </Link>
        </div>
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
