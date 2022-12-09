import { gql } from "@apollo/client"

export const ADD_STASHABLE_MUTATION = gql`
  mutation AddStashable($link: String!) {
    addStashable(link: $link)
  }
`
