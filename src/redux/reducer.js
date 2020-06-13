import { CATEGORIES } from "../shared/Problem_Category_wise";
import { DIVISIONLADDERS } from "../shared/Problem_Division_Wise";
import { RATINGLADDERS } from "../shared/Problem_Rating_Wise";

export const initialState = {
	probCatWise: CATEGORIES,
	probDivWise: DIVISIONLADDERS,
	ProbRatWise: RATINGLADDERS,
};

export const Reducer = (state = initialState, action) => {
	return state;
};
