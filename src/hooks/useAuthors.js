import { useQuery } from "@tanstack/react-query"
import { beats } from "services"

export const useAuthors = () => {
	const response = useQuery({
		queryKey: ['authors'], 
		queryFn: beats.getAuthors, 
		select: (data) => data.data
	})
	return response
}