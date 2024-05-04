import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { beats } from "services"

export const useDeleteBeat = () => {
	const queryClient = useQueryClient()
	const navigate  =useNavigate()

	const mutation = useMutation({
		mutationFn: (data) => beats.deleteBeat(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['beats'])
			navigate('/')
    },
  })

	return mutation
}