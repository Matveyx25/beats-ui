import { useQuery } from "@tanstack/react-query"
import { beats } from "services"

export const useBeatById = (id) => {
	const response = useQuery({
		queryKey: ['beat', id], 
		queryFn: () => beats.getBeatById(id), 
		enabled: !!id,
		select: (data) => data.data
	})
	return response
}