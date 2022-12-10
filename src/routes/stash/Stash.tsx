import { StashablesDocument, useStashablesQuery } from "../../graphql/generated"
import getClient from "../../graphql/client"
import { useLoaderData } from "react-router-dom"
import {
  List,
  ListItem,
  Link,
  Flex,
  Stack,
  SkeletonText,
  Box
} from "@chakra-ui/react"
import EmptyStash from "../../components/EmptyStash"
import AddStashable from "../../components/AddStashable"
import Stashable from "../../components/Stashable"

// Going to avoid the loader route for now because
// I'm not finding a clear Apollo cache invalidation strategy (refetchQueries doesn't work)
// export const stashLoader = async () => {
//   const client = getClient()

//   const { data } = await client.query({
//     query: StashablesDocument,
//     fetchPolicy: "cache-first"
//   })

//   return {
//     stashables: data.stashables
//   }
// }

const Stash = () => {
  // const { stashables }: any = useLoaderData()
  const { loading, data } = useStashablesQuery({
    fetchPolicy: "cache-first"
  })

  const stashables = data?.stashables

  return (
    <Flex direction="column" w="100%">
      {loading ? (
        <Stack>
          <SkeletonText
            mt={4}
            noOfLines={15}
            spacing={3}
            skeletonHeight={5}
            isLoaded={!loading}
            fadeDuration={0.1}
            speed={0.4}
          />
        </Stack>
      ) : stashables ? (
        <>
          <List pt="1rem" mb="2rem">
            {stashables.map((stashable: any) => (
              <ListItem key={stashable!.id} py={2}>
                <Stashable stashable={stashable} />
              </ListItem>
            ))}
          </List>
          <AddStashable />
        </>
      ) : (
        <EmptyStash />
      )}
    </Flex>
  )
}

export default Stash
