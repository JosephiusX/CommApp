import uuid from 'uuid';

// ADD_Topic
export const addTopic = ({description = '', note = '', amount = 0} = {}) => ({
	type: 'ADD_TOPIC',
	topic: {
		id: uuid(),
		description,
		note,
		amount,
	},
});

// REMOVE_TOPIC
export const removeTopic = ({id} = {}) => ({
	type: 'REMOVE_TOPIC',
	id,
});

// EDIT_TOPIC
export const editTopic = (id, updates) => ({
	type: 'EDIT_TOPIC',
	id,
	updates,
});