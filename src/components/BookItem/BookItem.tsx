import React, {ReactNode} from 'react'
import {BookItemLink, BookItemWrapper} from '../../styles/BookItem/BookItem'

interface IBookTemplate {
  bookTitle: string;
  bookSummary: string;
  bookAuthor: string;
  children?: ReactNode;
}

export default function BookItem(props: IBookTemplate) {
  return (
    <BookItemWrapper>
      <h2>{props.bookTitle}<small>{props.bookAuthor}</small></h2>
      <p>{props.bookSummary}</p>

      <BookItemLink>
        {props.children}
      </BookItemLink>
    </BookItemWrapper>
  )
}
