
export default (topics, {text, sortBy}) => {
	return topics
	.filter(topic => {
		const textMatch = topic.description.toLowerCase().includes(text.toLowerCase());

			return textMatch;
		})

};
