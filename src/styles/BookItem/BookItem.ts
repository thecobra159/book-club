import styled from 'styled-components'

export const BookItemWrapper = styled.div`
  display: flex;
  border: 1px solid #ddd;
  background-color: #efe6ff;
  padding: 16px;
  margin-bottom: 8px;

  h2 {
    small {
      font-size: 16px;
      padding-left: 8px;
      font-weight: normal;
    }
  }
`

export const BookItemImage = styled.div`
  max-width: 220px;

  img {
    max-width: 220px;
  }
`

export const BookItemContent = styled.div`
  flex-grow: 1;
  padding-left: 16px;
`

export const BookItemLink = styled.div`
  text-align: right;

  a {
    padding: 8px;
    background: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      background-color: indigo;
    }
  }
`
