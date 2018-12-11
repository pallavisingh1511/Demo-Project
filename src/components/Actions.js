import * as types from './ActionTypes'

export const requestData =  () => {
	return {
		type: types.REQUEST_FEEDS
	}
}

export const responseData =  ( data ) => {
	return {
		type: types.RESPONSE_FEEDS,
		payload: {
			data
		}
	}
}

export const requestDataFailure =  () => {
	return {
		type: types.FAILURE_FEEDS
	}
}

export const toggleLike =  ( data ) => {
	const {
		feed_type,
		id
	} = data

	return {
		type: types.TOGGLE_LIKE,
		payload: {
			feed_type,
			id
		}
	}
}