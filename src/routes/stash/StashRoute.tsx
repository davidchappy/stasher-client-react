import Stash from "../../components/Stash"
import { StashablesQueryDocument } from "../../graphql/generated/graphql"
import getClient from "../../graphql/client"
import { useLoaderData } from "react-router-dom"

export const stashLoader = async () => {
  const client = getClient()
  const { data } = await client.query({
    query: StashablesQueryDocument
  })

  return {
    stashables: data.stashables
  }
}

const StashRoute = () => {
  const { stashables }: any = useLoaderData()

  return <Stash stashables={stashables} />
}
export default StashRoute
