import { createStore, combineReducers, applyMiddleware } from "redux";
import { ProbCatWise } from "./probCatWise";
import { ProbDivWise } from "./probDivWise";
import { ProbRatWise } from "./probRatWise";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			probCatWise: ProbCatWise,
			probDivWise: ProbDivWise,
			probRatWise: ProbRatWise,
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
