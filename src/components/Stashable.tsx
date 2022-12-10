import DeleteStashable from "./DeleteStashable"
import {
  Stashable as StashableType,
  useUpdateStashableMutation
} from "../graphql/generated"
import {
  Flex,
  Link,
  Box,
  IconButton,
  Input,
  FormControl,
  InputLeftAddon,
  InputRightAddon,
  Icon,
  InputGroup
} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { IoSaveOutline } from "react-icons/io5"
import { ImCancelCircle } from "react-icons/im"
import { useState, SetStateAction, useRef } from "react"
import { useKey } from "react-use"

const Stashable = ({ stashable }: { stashable: StashableType }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [stashableLink, setStashableLink] = useState(stashable!.link || "")
  // const inputRef = useRef<HTMLInputElement>(null)

  // useKey("Enter", () => {
  //   console.log({ isEditing, inputRef }, document.activeElement)
  //   const inputId = inputRef.current && inputRef.current.id
  //   const activeInputId = document.activeElement && document.activeElement.id
  //   console.log({ inputId, activeInputId })
  //   if (isEditing && inputId === activeInputId) {
  //     handleSaveLink()
  //   }
  // })

  const [updateStashable, { loading }] = useUpdateStashableMutation({
    variables: {
      id: stashable!.id,
      link: stashableLink
    },
    refetchQueries: ["Stashables"],
    awaitRefetchQueries: true
  })

  const handleSaveLink = async () => {
    await updateStashable()
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setStashableLink(stashable!.link || "")
  }

  const renderLabel = () => {
    if (isEditing) {
      return (
        <FormControl isRequired>
          <InputGroup size="sm">
            <InputLeftAddon children="https://" />
            <Input
              // ref={inputRef}
              value={stashableLink}
              onChange={event => setStashableLink(event.target.value)}
              width="100%"
              placeholder="https://example.com"
              type="url"
            />
            <InputRightAddon>
              <IconButton
                aria-label="Save Stashable"
                icon={<Icon as={IoSaveOutline} />}
                onClick={handleSaveLink}
                height={8}
                minW={4}
                isLoading={loading}
                isDisabled={loading}
                variant="ghost"
                mr={4}
                type="submit"
              />
              <IconButton
                aria-label="Cancel edit Stashable"
                icon={<ImCancelCircle />}
                onClick={handleCancelEdit}
                height={8}
                minW={4}
                isDisabled={loading}
                variant="ghost"
              />
            </InputRightAddon>
          </InputGroup>
        </FormControl>
      )
    }

    return (
      <Link href={stashable!.link || undefined} isExternal>
        {stashable!.link}
      </Link>
    )
  }

  return (
    <Flex justify="space-between">
      <Box>{renderLabel()}</Box>
      <Box>
        {isDeleting ? null : (
          <IconButton
            aria-label="Edit Stashable"
            icon={<EditIcon />}
            onClick={() => setIsEditing(true)}
            height={8}
            minW={8}
            mr={2}
            isDisabled={loading || isDeleting || isEditing}
          />
        )}
        <DeleteStashable
          id={stashable!.id}
          onToggle={(toggle: SetStateAction<boolean>) => setIsDeleting(toggle)}
          isDisabled={loading || isEditing}
        />
      </Box>
    </Flex>
  )
}

export default Stashable
