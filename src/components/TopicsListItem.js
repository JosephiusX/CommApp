import React from 'react';
import {Link} from 'react-router-dom';

const TopicsListItem = ({id, description, amount, createdAt}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{phraseList}
		</p>
	</div>
);

export default TopicsListItem;
