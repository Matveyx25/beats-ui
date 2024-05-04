import { useQuery } from "@tanstack/react-query"
import { beats } from "../services";

export const useSnippets = () => {
	const response = useQuery({
		queryKey: ['snippets'], 
		queryFn: beats.getSnippets, 
		select: (data) => data.data
	})
	return response
}