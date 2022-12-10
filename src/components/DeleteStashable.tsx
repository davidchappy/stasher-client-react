import { useState } from "react"
import { Button, IconButton, Box } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useDeleteStashableMutation, Stashable } from "../graphql/generated"

const DeleteStashable = ({
  id,
  onToggle,
  isDisabled
}: {
  id: Stashable["id"]
  onToggle: Function
  isDisabled: boolean
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const [deleteStashable, { loading }] = useDeleteStashableMutation({
    variables: {
      id
    },
    refetchQueries: ["Stashables"],
    awaitRefetchQueries: true
  })

  const handleDelete = () => {
    setIsDeleting(false)
    deleteStashable()
    onToggle(false)
  }

  const handleBeginDelete = () => {
    setIsDeleting(true)
    onToggle(true)
  }

  const handleCancelDelete = () => {
    setIsDeleting(false)
    onToggle(false)
  }

  if (isDeleting) {
    return (
      <Box height={8}>
        Are you sure?
        <Button
          variant="link"
          onClick={handleDelete}
          isLoading={loading}
          isDisabled={loading}
        >
          Yes
        </Button>
        <Button variant="link" onClick={handleCancelDelete}>
          No
        </Button>
      </Box>
    )
  }

  return (
    <IconButton
      aria-label="Delete Stashable"
      icon={<DeleteIcon />}
      onClick={handleBeginDelete}
      isLoading={loading}
      disabled={loading || isDisabled}
      height={8}
      minW={8}
    />
  )
}

export default DeleteStashable
