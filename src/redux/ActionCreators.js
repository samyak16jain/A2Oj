import * as ActionTypes from "./ActionTypes";
import { CATEGORIES } from "../shared/Problem_Category_wise";

export const fetchCategories = () => (dispatch) => {
	dispatch(categoriesFailed(true));

	setTimeout(() => {
		dispatch(addCategories(CATEGORIES));
	}, 2000);
};

export const categoriesLoading = () => ({
	type: ActionTypes.CAT_LOADING,
});

export const categoriesFailed = (errmess) => ({
	type: ActionTypes.CAT_FAILED,
	payload: errmess,
});

export const addCategories = (categories) => ({
	type: ActionTypes.ADD_CAT,
	payload: categories,
});
