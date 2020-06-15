import * as ActionTypes from "./ActionTypes";

export const ProbCatWise = (state = { isLoading: true, errMess: null, probCatWise: [] }, action) => {
	switch (action.type) {
		case ActionTypes.CAT_FAILED:
			return { ...state, isLoading: false, errMess: action.payload, probCatWise: [] };

		case ActionTypes.CAT_LOADING:
			return { ...state, isLoading: true, errMess: null, probCatWise: [] };

		case ActionTypes.ADD_CAT:
			return { ...state, isLoading: false, errMess: [], probCatWise: action.payload };

		default:
			return state;
	}
};
