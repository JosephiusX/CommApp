import React from 'react';
import {Link} from 'react-router-dom';

const TopicListItem = ({id, topic}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{topic}</h3>
		</Link>
	</div>
);

export default TopicListItem;
