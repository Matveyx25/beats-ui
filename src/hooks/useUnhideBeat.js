
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { beats } from "services"

export const useUnhideBeat = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.unhideBeat(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['beat', data?.BeatID])
			toast.success('Бит открыт')
    },
  })

	return mutation
}