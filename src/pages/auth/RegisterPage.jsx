import React, { useState } from 'react'
import { auth } from 'services';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Register } from '../../components/auth/register/register';
import { useRoles } from 'hooks/useRoles';

export const RegisterPage = () => {
	const [error, setError] = useState('')

	const {data: roles} = useRoles()
	const methods = useForm({defaultValues: {
			email: '',
			password: '',
			retypePassword: '',
			name: '',
			role: 'artist'
		},	
		mode: 'onTouched'
	})

	const navigate = useNavigate()

	const {formState} = methods


  const handleSubmit = methods.handleSubmit(data => {
		const payload = {
			email: data.email,
			password: data.password,
			username: data.name,
			role_id: roles?.find(el => el.name === data.role).id
		}
		
		auth.register(payload).then((res) => {
			if(res.data.status === "success"){
				navigate('/waiting-confirm')
			}
		}).catch((response) => {
			setError(response.response)
		})
  })

	return <Register {...{handleSubmit, error, methods, formState}}/>
}