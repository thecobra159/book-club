import styled from 'styled-components';

export const BookItemWrapper = styled.div`
  border: 1px solid #ddd;
  background-color: #EFE6FF;
  padding: 16px;
  margin-bottom: 8px;

  h2 {
    small {
      font-size: 16px;
      padding-left: 8px;
      font-weight: normal;
    }
  }
`;

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
`;
