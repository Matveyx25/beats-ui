import { useMutation, useQueryClient } from "@tanstack/react-query"
import { beats } from "services"

export const useEditLicense = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => beats.editLicense(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['data', data?.BeatID])
    },
  })

	return mutation
}