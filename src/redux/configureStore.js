import { createStore, combineReducers } from "redux";
import { ProbCatWise } from "./probCatWise";
import { ProbDivWise } from "./probDivWise";
import { ProbRatWise } from "./probRatWise";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			probCatWise: ProbCatWise,
			probDivWise: ProbDivWise,
			probRatWise: ProbRatWise,
		})
	);
	return store;
};
