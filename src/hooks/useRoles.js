import { useQuery } from "@tanstack/react-query"
import { auth } from 'services/index';

export const useRoles = () => {
	const response = useQuery({
		queryKey: ['roles'], 
		queryFn: auth.getRoles, 
		select: (data) => data.data
	})
	return response
}