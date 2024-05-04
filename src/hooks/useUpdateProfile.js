
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { auth } from "../services"

export const useUpdateProfile = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (data) => auth.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['profile'])
			toast.success('Данные обновлены')
    },
  })

	return mutation
}