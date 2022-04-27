import { EDIT_PROFILE, UPDATE_PROFILE } from "../types/ProfileTypes";

export const updateProfile = (createProfile) => ({
	type: EDIT_PROFILE,
	payload: createProfile,
}) 
export const updateProfileQuery = ( preparedProfileQuery, token, _id) => async (dispatch) => {
	const response = await fetch(`https://api.react-learning.ru/users/me`, {
		method: "PATCH",
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
	   body: preparedProfileQuery
	   	})
	if (response.status === 200) {
		const profileFromApi = await response.json()
		dispatch(updateProfile(profileFromApi))
	}
}

export const getProfile = (profile) => ({
	type: UPDATE_PROFILE,
	payload: profile
})

export const getProfileQuery = ( token) => async (dispatch) => {

	const response = await fetch(`https://api.react-learning.ru/users/me`, {
		method: "GET",
			headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json' 
		},
			
	})

	const profileFromApi = await response.json()

	dispatch(getProfile(profileFromApi))
}