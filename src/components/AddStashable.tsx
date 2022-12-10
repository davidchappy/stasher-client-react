import { useState } from "react"
import {
  Box,
  FormControl,
  Button,
  useDisclosure,
  FormLabel,
  Input,
  ButtonGroup
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import {
  useAddStashableMutation,
  namedOperations,
  StashablesDocument
} from "../graphql/generated"

const AddStashable = () => {
  const [addStashable, { loading }] = useAddStashableMutation()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [link, setLink] = useState("")

  const handleLinkChange = (e: any) => setLink(e.target.value)

  const handleSubmit = async () => {
    console.log("submit", link)
    await addStashable({
      variables: {
        link
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        namedOperations.Query.Stashables,
        { query: StashablesDocument, fetchPolicy: "cache-first" }
      ],
      update(cache) {
        cache.evict({ fieldName: "Stashables" })
      }
    })
    setLink("")
    onClose()
  }

  if (isOpen) {
    return (
      <Box>
        <FormControl isRequired>
          <FormLabel>Paste a link</FormLabel>
          <Input
            value={link}
            placeholder="https://example.com"
            onChange={handleLinkChange}
          />
        </FormControl>
        <ButtonGroup mt="1rem">
          <Button type="submit" onClick={handleSubmit} isLoading={loading}>
            Submit
          </Button>
          <Button onClick={onClose} variant="outline" isDisabled={loading}>
            Cancel
          </Button>
        </ButtonGroup>
      </Box>
    )
  }

  return (
    <Button onClick={onOpen} rightIcon={<AddIcon />}>
      Add a Stashable
    </Button>
  )
}

export default AddStashable
