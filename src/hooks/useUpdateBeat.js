import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { beats } from "services"

export const useUpdateBeat = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.updateBeat(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['beat', data?.BeatID])
			toast.success('Обновления сохранены')
    },
  })

	return mutation
}