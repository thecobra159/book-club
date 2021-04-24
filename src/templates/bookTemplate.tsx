import React from 'react'
import Layout from '../components/layout'
import BookItem from '../components/BookItem/BookItem'

export default function BookTemplate(props) {
  return (
    <Layout>
      <BookItem
        bookAuthor={props.pageContext.author.name}
        bookTitle={props.pageContext.title}
        bookSummary={props.pageContext.summary}
        bookImageUrl={props.pageContext.localImage.url}
      />
    </Layout>
  )
}
