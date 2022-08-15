import React from 'react';
import TopicsList from './TopicList';
import TopicListFilters from './TopicListFilters';

const TopicsDashboardPage = () => (
	<div>
		<TopicListFilters />
		<TopicsList />
	</div>
);

export default TopicsDashboardPage;
