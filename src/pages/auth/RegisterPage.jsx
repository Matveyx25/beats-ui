import React, { useState } from 'react'
import { auth } from 'services';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getTimezone } from 'helpers/getTimezone';
import { Register } from '../../components/auth/register/register';

export const RegisterPage = () => {
	const { referral } = useParams();

	const [error, setError] = useState('')

	const methods = useForm({defaultValues: {
			email: '',
			password: '',
			name: '',
		},	
		mode: 'onTouched'
	})

	const navigate = useNavigate()

	const {formState} = methods

  const handleSubmit = methods.handleSubmit(data => {
		const payload = {
			email: data.email,
			password: data.password,
			name: data.name,
			timezone: getTimezone(),
			referral
		}
		
		auth.register(payload).then((res) => {
			if(res.data.status === "success"){
				navigate('/waiting-confirm')
			}
		}).catch((response) => {
			setError(response.response)
		})
  })

	return <Register {...{handleSubmit, referral, error, methods, formState}}/>
}