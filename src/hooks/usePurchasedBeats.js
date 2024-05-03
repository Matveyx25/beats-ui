import { useQuery } from "@tanstack/react-query"
import { beats } from "services"

export const usePurchasedBeats = () => {
	const response = useQuery({
		queryKey: ['purchased-beats'], 
		queryFn: beats.getPurchased, 
		select: (data) => data.data
	})
	return response
}