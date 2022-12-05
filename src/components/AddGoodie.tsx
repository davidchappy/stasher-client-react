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
import { useMutation } from "@apollo/client"
import { ADD_GOODIE_MUTATION } from "../graphql/mutation"

const AddGoodie = () => {
  const [addGoodie, { loading }] = useMutation(ADD_GOODIE_MUTATION, {
    refetchQueries: ["Goodies"]
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [link, setLink] = useState("")

  const handleLinkChange = (e: any) => setLink(e.target.value)

  const handleSubmit = async () => {
    console.log("submit", link)
    await addGoodie({
      variables: {
        link
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
      Add a Goodie
    </Button>
  )
}

export default AddGoodie
