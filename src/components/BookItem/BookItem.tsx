import React, { ReactNode } from 'react'
import {
  BookItemContent,
  BookItemImage,
  BookItemLink,
  BookItemWrapper,
} from '../../styles/BookItem/BookItem'

interface IBookTemplate {
  bookTitle: string
  bookSummary: string
  bookAuthor: string
  bookImageUrl: string
  children?: ReactNode
}

export default function BookItem(props: IBookTemplate) {
  return (
    <BookItemWrapper>
      <BookItemImage>
        <img src={props.bookImageUrl} alt={props.bookTitle} />
      </BookItemImage>

      <BookItemContent>
        <h2>
          {props.bookTitle}
          <small>{props.bookAuthor}</small>
        </h2>
        <p>{props.bookSummary}</p>

        <BookItemLink>{props.children}</BookItemLink>
      </BookItemContent>
    </BookItemWrapper>
  )
}
