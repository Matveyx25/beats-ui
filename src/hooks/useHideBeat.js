
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { beats } from "services"

export const useHideBeat = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.hideBeat(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['beat', data?.BeatID])
			toast.success('Бит скрыт')
    },
  })

	return mutation
}