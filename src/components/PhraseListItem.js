import React from 'react';
import {Link} from 'react-router-dom';

const PhraseListItem = ({id, phrase}) => (
	<div>
		<Link to={`/editTopic/${id}`}>
			<h3>{phrase}</h3>
		</Link>
	</div>
);

export default PhraseListItem;
