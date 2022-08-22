import {createStore, combineReducers} from 'redux';
import topicsReducer from '../reducers/topics';
import filtersReducer from '../reducers/filters';
import phrasesReducer from '../reducers/phrases';

export default () => {
	// store creation
	const store = createStore(
		combineReducers({
			topics: topicsReducer,
			filters: filtersReducer,
			phrases: phrasesReducer,
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	);

	return store;
};

// looks the same
// import { createStore, combineReducers } from 'redux';
// import expensesReducer from '../reducers/expenses';
// import filtersReducer from '../reducers/filters';

// export default () => {
//   const store = createStore(
//     combineReducers({
//       expenses: expensesReducer,
//       filters: filtersReducer
//     })
//   );

//   return store;
// };
