import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { beats } from "services"

export const useBuyBeat = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.buyBeat(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['data', data?.BeatID])
			toast.success('Покупка прошла успешно')
    },
  })

	return mutation
}