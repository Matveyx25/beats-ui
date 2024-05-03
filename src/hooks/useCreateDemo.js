import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { beats } from "services"

export const useCreateDemo = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.createDemo(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['beat', data.BeatID])
			toast.success('Демо добавлено')
    },
  })

	return mutation
}