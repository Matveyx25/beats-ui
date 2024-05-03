import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { beats } from "services"

export const useCreateSnippet = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.createSnippet(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['beat', data.BeatID])
			toast.success('Сниппет добавлен')
    },
  })

	return mutation
}