import {
	CHANGE_SEARCH_FIELD,
	SWITCH_SOURCE,
	SOURCE_API,
	SOURCE_LOCAL,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: '',
	source: SOURCE_API
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		case SWITCH_SOURCE:
			var newSource = state.source === SOURCE_API ? SOURCE_LOCAL : SOURCE_API;
			return Object.assign({}, state, { source: newSource});
		default:
			return state;
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false})
		default: return state;
	}
}