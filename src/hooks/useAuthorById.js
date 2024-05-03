import { useQuery } from "@tanstack/react-query"
import { beats } from "services"

export const useAuthorById = (id) => {
	const response = useQuery({
		queryKey: ['author', id], 
		queryFn: () => beats.getAuthorById(id), 
		enabled: !!id,
		select: (data) => data.data
	})
	return response
}