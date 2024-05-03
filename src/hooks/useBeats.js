import { useQuery } from "@tanstack/react-query"
import { beats } from "services"

export const useBeats = () => {
	const response = useQuery({
		queryKey: ['beats'], 
		queryFn: beats.getBeats, 
		select: (data) => data.data
	})
	return response
}