import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import {toast} from "react-toastify";
import { setAuthToken } from 'helpers/tokens';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const errorHandler = (error) => {
	if(error?.response?.status && error?.response?.status !== 403 && error?.response?.status !== 404){
		toast.error(`${error?.response?.data?.message || 'Возникла ошибка'}`);  
	}

  return Promise.reject({ ...error })
}

instance.interceptors.response.use(
  (response) => {return response},
  (error) => errorHandler(error)
);


function getAccessToken() {
	return localStorage.getItem('token');
}

instance.interceptors.request.use((request) => {
	if (!request.headers['Authorization']){
		request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
	}
	return request;
});

const refreshAuthLogic = async failedRequest => {
	return instance.post('/api/refresh').then((tokenRefreshResponse) => {
		localStorage.setItem('token', tokenRefreshResponse.data.token)
		const newInstance = axios.create({
			baseURL: process.env.REACT_APP_API_URL,
			headers: {
				Authorization: `Bearer ${tokenRefreshResponse.data.token}`
			}
		});
		failedRequest.response.config.httpAgent = newInstance;
	}).catch(err => {
		localStorage.removeItem('token')
	})
};

createAuthRefreshInterceptor(instance, refreshAuthLogic, {statusCodes: [403, 401]});

export const auth = {
	login(loginPayload) {
		return instance.post("/api/login", loginPayload)
			.then(response => {
				const token  =  response.data.token;
				localStorage.setItem("token", token);
				setAuthToken(token);
				window.location.href = '/'
			})
	},
	register(payload) {
		return instance.post("/api/register", payload)
	},
	me() {
		return instance.get("/api/user")
	},
	logout() {
		localStorage.removeItem("token");
		setAuthToken();
		window.location.href = '/'
	},
	getRoles() {
		return instance.get('/api/roles')
	}
}

export const beats = {
	createBeat(data) {
		return instance.post('/api/beats/create', data)
	},
	createDemo(data) {
		return instance.post('/api/demo/create', data)
	},
	createSnippet(data) {
		return instance.post('/api/snippets/create', data)
	},
	getGenres() {
		return instance.get('/api/genres')
	}
}