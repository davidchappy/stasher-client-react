import { useQuery } from "@apollo/client"
import { STASHABLES_QUERY } from "../graphql/query"
import { List, ListItem, Link, Flex } from "@chakra-ui/react"
import EmptyStash from "./EmptyStash"
import AddStashable from "./AddStashable"

type Stashable = {
  id: number
  link: string
}

const Stash = () => {
  const { data, loading, error } = useQuery(STASHABLES_QUERY)

  if (error) return <p>Error : {error.message}</p>

  if (loading) return <p>Loading...</p>

  return data?.stashables ? (
    <Flex direction="column" w="100%">
      <List pt="1rem" mb="2rem">
        {data.stashables.map((stashable: Stashable) => (
          <ListItem key={stashable.id}>
            <Link href={stashable.link} isExternal>
              {stashable.link}
            </Link>
          </ListItem>
        ))}
      </List>
      <AddStashable />
    </Flex>
  ) : (
    <EmptyStash />
  )
}

export default Stash
