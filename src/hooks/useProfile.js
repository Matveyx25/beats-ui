import { useQuery } from "@tanstack/react-query"
import { auth } from 'services/index';

export const useProfile = () => {
	const response = useQuery({
		queryKey: ['profile'], 
		queryFn: auth.me, 
		enabled: !!localStorage.getItem("token"),
		select: (data) => data.data,
		retry: 5
	})
	return response
}