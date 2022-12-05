import { gql } from "@apollo/client"

export const ADD_GOODIE_MUTATION = gql`
  mutation AddGoodie($link: String!) {
    addGoodie(link: $link)
  }
`
