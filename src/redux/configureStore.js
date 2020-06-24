import { createStore, combineReducers } from 'redux';
import { categories } from './categories';
import { divisionlad } from './divisionlad';
import { ratinglad } from './ratinglad';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			categories: categories,
			divisionlad: divisionlad,
			ratinglad: ratinglad,
		})
	);
	return store;
};
