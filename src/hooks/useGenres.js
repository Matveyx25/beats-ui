import { useQuery } from "@tanstack/react-query"
import { beats } from 'services';

export const useGenres = () => {
	return useQuery({
		queryKey: ['genres'],
		queryFn: beats.getGenres,
		select: data => data.data
	})
}