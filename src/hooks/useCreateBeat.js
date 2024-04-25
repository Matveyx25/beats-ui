import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { beats } from "services"

export const useCreateBeat = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.createBeat(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['my-beats'])
			toast.success('Бит добавлен')
    },
  })

	return mutation
}