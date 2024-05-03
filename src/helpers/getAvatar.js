import gravatar from 'gravatar'

export const getAvatar = (email) => {
	return gravatar.url(email, {s: '100', r: '10', d: 'retro'}, true)
}