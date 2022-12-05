import { useQuery } from "@apollo/client"
import { GOODIES_QUERY } from "../graphql/query"
import { List, ListItem, Link, Flex } from "@chakra-ui/react"
import EmptyStash from "./EmptyStash"
import AddGoodie from "./AddGoodie"

type Goodie = {
  id: number
  link: string
}

const Stash = () => {
  const { data, loading, error } = useQuery(GOODIES_QUERY)

  if (error) return <p>Error : {error.message}</p>

  if (loading) return <p>Loading...</p>

  return data?.goodies ? (
    <Flex direction="column" w="100%">
      <List pt="1rem" mb="2rem">
        {data.goodies.map((goodie: Goodie) => (
          <ListItem key={goodie.id}>
            <Link href={goodie.link} isExternal>
              {goodie.link}
            </Link>
          </ListItem>
        ))}
      </List>
      <AddGoodie />
    </Flex>
  ) : (
    <EmptyStash />
  )
}

export default Stash
