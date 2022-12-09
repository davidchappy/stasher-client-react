import { gql } from "@apollo/client"

export const STASHABLES_QUERY = gql`
  query Stashables {
    stashables {
      id
      link
    }
  }
`
