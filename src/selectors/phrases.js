// export default (phrases, {text, sortBy}) => {
// 	return phrases
// 	.filter(phrase => {
// 		const textMatch = phrase.description.toLowerCase().includes(text.toLowerCase());
        
// 			return textMatch;
// 		})

// };

// Get visible expenses
import moment from 'moment';

export default (phrases, {text, sortBy, startDate, endDate}) => {
	return phrases
	.filter(phrase => {
			const textMatch = topic.description.toLowerCase().includes(text.toLowerCase());

			return textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};
