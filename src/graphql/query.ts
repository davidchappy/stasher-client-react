import { gql } from "@apollo/client"

export const GOODIES_QUERY = gql`
  query Goodies {
    goodies {
      id
      link
    }
  }
`
