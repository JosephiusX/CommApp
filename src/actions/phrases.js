import uuid from 'uuid';

// ADD_Phrase
export const addPhrase = ({text = ''} = {}) => ({
	type: 'ADD_PHRASE',
	Phrase: {
		id: uuid(),
		text,
    }
});

// REMOVE_Phrase
export const removePhrase = ({id} = {}) => ({
	type: 'REMOVE_PHRASE',
	id,
});