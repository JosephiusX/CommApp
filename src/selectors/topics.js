// Get visible expenses
// import moment from 'moment';

export default (topics, {text, sortBy}) => {
	return topics
	.filter(topic => {
		const textMatch = topic.description.toLowerCase().includes(text.toLowerCase());
			// const createdAtMoment = moment(topic.createdAt);
			// const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
			// const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

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
