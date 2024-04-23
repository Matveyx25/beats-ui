import React, { useEffect, useState } from 'react'
import { auth } from 'services';
import { FormProvider, useForm } from 'react-hook-form';
import { Login } from '../../components/auth/login/login';

export const LoginPage = () => {
	const [error, setError] = useState('')

	const methods = useForm({
		mode: 'onTouched'
	})

	const { formState } = methods

  const handleSubmit = methods.handleSubmit(data => {
		const loginPayload = {
			email: data.email,
			password: data.password
		}
	
		auth.login(loginPayload).catch((response) => {
			setError(response.response)
		})
  })

	return <FormProvider {...methods}>
		<Login {...{handleSubmit, error, methods, formState}}/>
	</FormProvider>
}