import {
	CHANGE_SEARCH_FIELD,
	SWITCH_SOURCE,
	SOURCE_API,
	SOURCE_LOCAL,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

import { robots } from './robots.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const switchSource = () => ({
	type: SWITCH_SOURCE
})

export const requestRobots = (source) => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	if (source === SOURCE_API) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
			.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}));
	} else if (source === SOURCE_LOCAL) {
		dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: robots});
	}
}