import { List, ListItem, Link, Flex } from "@chakra-ui/react"
import EmptyStash from "./EmptyStash"
import AddStashable from "./AddStashable"

const Stash = ({ stashables }: { stashables: any }) => {
  return stashables ? (
    <Flex direction="column" w="100%">
      <List pt="1rem" mb="2rem">
        {stashables.map((stashable: any) => (
          <ListItem key={stashable!.id}>
            <Link href={stashable!.link || undefined} isExternal>
              {stashable!.link}
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
